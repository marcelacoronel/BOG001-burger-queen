import React from 'react'

const OrderDetail = ({ dataOrderDetail }) => {
    console.log(dataOrderDetail);

    return (
        <>
            <div>
                <p>Orden # : {dataOrderDetail.id}</p>
                <span>Hora: {dataOrderDetail.hour}</span>
                <p>Cliente: {dataOrderDetail.clientName}</p>
            </div>
            <div>
                <p>{dataOrderDetail.orderStatus}</p>
            </div>


        </>
    )
}

export default OrderDetail;