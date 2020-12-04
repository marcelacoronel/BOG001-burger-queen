import React, { useState } from 'react'
import iconAdd from '../img/icon-add.png'
import iconSubtract from '../img/icon-subtract.png'
import iconRemove from '../img/icon-remove.png'


function RowOrder(props) {

    const [number, setNumber] = useState(1);
    
    const addItem = (orderA, i) =>{
        const orderCopy = [...orderA];
        orderCopy[i].number += 1;
        orderCopy[i].priceTotal = orderCopy[i].price * orderCopy[i].number;
        console.log(orderCopy);
        return orderCopy;
    }

    
    const subtractItem = (orderA, i) =>{
        const orderCopy = [...orderA];
        orderCopy[i].number -= 1;
        orderCopy[i].priceTotal = orderCopy[i].price * orderCopy[i].number;
        console.log(orderCopy);
        return orderCopy;
    }


    return (
        <div className="container-rowOrder">
            <p>{props.product.product}</p>
            <img src={iconSubtract}  onClick={() => {(props.product.number - 1 === 0) ? props.setOrder(props.order.filter((item) => item.id !== props.index )) : props.setOrder(subtractItem(props.order, props.index))}}></img>
            <p>{props.product.number}</p>
            <img src={iconAdd} onClick={()=>props.setOrder(addItem(props.order, props.index)) }></img>
            <p>{props.product.price}</p>
            <img src={iconRemove} onClick={()=>props.setOrder(props.order.filter((item) => item.id !== props.product.id ))}></img>
            
        </div>
    )
}

export default RowOrder;

