import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";

// import * as firebase from "firebase/app";
// import "firebase/firestore";

import Breakfast from '../components/Breakfast';
import Lunch from '../components/Lunch';
import OrderDetail from '../components/OrderDetail';
import RowOrder from './RowOrder';
import dataMenu from '../data/dataMenu.json';
import MenuCard from './MenuCard';
import BtnSelectMenu from './BtnSelectMenu';
import Bill from './Bill';

//------------------------------------------------

const TakingOrder = ({ props }) => {
    const { id } = useParams();

    let activeUser = JSON.parse(localStorage.getItem('activeUser'))
    const [menuBL, setMenuBL] = useState(true);
    const [backg, setBackg] = useState('#FFC300');
    const [bill, setBill] = useState(0);
    const [order, setOrder] = useState([]);

    const sendOrder = async (objOrder)=>{
    //    await db.colection('orders').doc().set(objOrder);
       console.log("Datos enviados")
    }


    return (
        <div className="takingOrder-container">
            <div className="menu-order-container">
                <div>
                    <BtnSelectMenu setMenuBL={setMenuBL} />

                </div>
                <div>

                    {menuBL ? <MenuCard menu={dataMenu.breakfast} order={order} setOrder={setOrder} bill={bill} setBill={setBill}/> : <MenuCard menu={dataMenu.lunch} />}
                </div>
            </div>

            <div className="side-OrderDetail">
                <div className="head-orderDetail">
                    <p>Mesero: <span>{activeUser}</span></p>
                    <Link to="/table"><span>Mesa {id}</span></Link>
                </div>
                <label>Cliente:</label>
                <input type="text" placeholder="Nombre Cliente"></input>


                <div className="orderDetail-container">
                    <div className="header-order">
                        <h3>Item</h3>
                        <h3>Cantidad</h3>
                        <h3>Precio</h3>
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

                <div>
                    <button className="btnEnviar" onClick={sendOrder(order)}>ENVIAR A COCINA</button>
                    <button className="btnCancelar">CANCELAR</button>
                </div>


            </div>
        </div>);
}


export default TakingOrder;