import React from 'react'

const OrderList = ({ order, index, setDataOrderDetail }) => {

    const status = order.orderStatus === 'EN COCINA' ? "cocina"  : ( order.orderStatus === 'EN PROCESO' ? "proceso" : "servir");

    const handleClickCard = () => {
        setDataOrderDetail(order);
    };

    return (
        <div className="container-card-order" onClick={handleClickCard}>
            <div className="numberOrder"><p>Orden # : {index + 1}</p></div>
            <div className={status}><p>{order.orderStatus}</p></div>
        </div>
    )
}

export default OrderList;
