import React, { useEffect, useState } from 'react';
import firestore from '../../controller/firestore';
import OrderList from '../OrderList';

//Importando componentes
import SelectOrderStatus from '../SelectOrderStatus';
import OrderDetail from '../OrderDetail';

//Inicio función principal
const PageWaiter = () => {
    let getActiveUser = JSON.parse(localStorage.getItem('activeUser'))
    const [orderStatus, setOrderStatus] = useState('EN COCINA');
    const [dataOrders, setDataOrders] = useState([]);
    const [dataOrderDetail, setDataOrderDetail] = useState([]);

    const readOrders = () => {
        firestore.getOrders(orderStatus, (orderList) => {
            setDataOrders(orderList);
        });
    };

    useEffect(() => {
        readOrders();
    }, [orderStatus]);


    return (

        <div className="pageChef-container">
            <div className="list-orders-details" >
                <div className="container-cards">
                    <div>
                        <p>para ver los pedidos </p>
                        {dataOrders.map((order, index) => (
                            <OrderList
                                key={'order' + index}
                                order={order}
                                index={index}
                                setDataOrderDetail={setDataOrderDetail}
                            />
                        ))
                        }
                    </div>
                </div>
                <div className="order-detail">
                    <h1>VISTA CHEF {getActiveUser}</h1>
                    <OrderDetail
                        dataOrderDetail={dataOrderDetail}
                    />
                </div>
            </div>

            <div>
                <SelectOrderStatus
                    setOrderStatus={setOrderStatus} />
            </div>
        </div>
    )
}

export default PageWaiter;