import React, { useState } from 'react';
import firestore from '../controller/firestore';

//Impotando datos de las mesas y menu
import data from "../data/dataTables.json";
import dataMenu from '../data/dataMenu.json';

//Importando componentes
// import OrderDetail from '../components/OrderDetail';
import Table from "./Table";
import RowOrder from './RowOrder';
import MenuCard from './MenuCard';
import MenuCardLuch from './MenuCardLunch';
import BtnSelectMenu from './BtnSelectMenu';
import Bill from './Bill';

//------------------------------------------------

const TakingOrder = ({ props }) => {
    // const { id } = useParams();
    let activeUser = JSON.parse(localStorage.getItem('activeUser'))

    const [menuBL, setMenuBL] = useState(true);
    const [backg, setBackg] = useState('#FFC300');
    const [bill, setBill] = useState(0);
    const [order, setOrder] = useState([]);
    const [orderTotal, setOrderTotal] = useState({});
    const [takingTable, setTakingTable] = useState(true);
    const [client, setClient] = useState('');


    const handleClientChange = (e) => {
        setClient(e.target.value)
    };

    const addDocOrder = (arrayOrder) => {
        firestore.addOrder(arrayOrder);
    };

    const sendOrder = (e) => {
        e.preventDefault();
        let registro = Date.now();
        let getDate = new Date()
        let currentDate = getDate.toDateString();
        let localTime = getDate.toLocaleTimeString();
        const objOrder = order;
        const newOrder = ({ ...orderTotal, clientName: client, items: objOrder, waiter: activeUser, orderStatus: 'EN COCINA', hour: localTime, bill: bill });
        console.log(newOrder);
        addDocOrder(newOrder);
        console.log("Datos enviados");
        setTakingTable(true);
        setOrder([]);
        setBill(0);
        console.log(registro);
    };

    const updateBill = (parametro) => {
        setBill(prevState => {
            return prevState + parametro;
        })
    }

    const cleanOrder = () => {
        setTakingTable(true);
        setMenuBL(true);
    }

    return (
        <>
            {console.log(bill)}
            {takingTable ?
                <div>
                    <h2>Listado de mesas</h2>
                    {data.map((tab, index) => (
                        <Table
                            key={tab.id}
                            tab={tab}
                            orderTotal={orderTotal}
                            setOrderTotal={setOrderTotal}
                            takingTable={takingTable}
                            setTakingTable={setTakingTable} />
                    ))
                    }
                </div>
                :
                <div className="takingOrder-container">
                    <div className="menu-order-container">
                        <div>
                            <BtnSelectMenu setMenuBL={setMenuBL} menuBL={menuBL} />
                        </div>
                        <div className="container-menuCards">
                            {menuBL ? <MenuCard menu={dataMenu.breakfast} order={order} setOrder={setOrder} bill={bill} setBill={setBill} updateBill={updateBill} /> : <MenuCardLuch menu={dataMenu.lunch} order={order} setOrder={setOrder} bill={bill} setBill={setBill} updateBill={updateBill} />}
                        </div>
                    </div>

                    <div className="side-OrderDetail">
                        <div className="container-head-detail">
                            <div className="head-orderDetail">
                                <p>Mesero: <span>{activeUser}</span></p>
                                <p>{orderTotal.table}</p>
                                {/* <Link to="/table"><span>Mesa {id}</span></Link> */}
                            </div>
                            <label>Cliente:</label>
                            <input type="text" name="client" placeholder="Nombre Cliente" onChange={handleClientChange}></input>
                            <div className="orderDetail-container">
                                <div className="header-order">
                                    <h3>Item</h3>
                                    <h3>Cant.</h3>
                                    <h3>Precio c/u</h3>
                                    <h3>Total</h3>
                                    {/* <h3>Eliminar</h3> */}
                                </div>
                                <div className="content-order">
                                    <p>Agrega productos al pedido</p>
                                    {order.map((product, index) => (
                                        <RowOrder
                                            key={'itemProduc' + index}
                                            product={product}
                                            index={index}
                                            order={order}
                                            setOrder={setOrder}
                                            bill={bill}
                                            setBill={setBill}
                                            updateBill={updateBill}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Bill
                                    order={order}
                                    bill={bill}
                                    setBill={setBill} />
                            </div>
                        </div>

                        <div className="btn-bottom">
                            <button className="btnEnviar" onClick={sendOrder}>ENVIAR A COCINA</button>
                            <button className="btnCancelar" onClick={cleanOrder}>CANCELAR</button>
                        </div>
                    </div>
                </div>
            }
        </>);
}


export default TakingOrder;