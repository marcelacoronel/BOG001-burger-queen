
import React, { Fragment, useState } from 'react'


const MenuCard = (props) => {
    console.log(props);
    let setOrder = props.setOrder;
    let order = props.order;

    const newOrder = (item, i) => {
        const newOrder = [...order, { product: item.name, price: item.price, number: 1, priceTotal: item.price }];
        props.updateBill(item.price);
        console.log(newOrder);
        return newOrder
    }

    return (
        <Fragment>
            {props.menu.map((item, index) => {
                return (
                    <div key={"card" + index}>
                        <div className='titleBreakfast' >
                            <h2>{item.title}</h2>
                        </div>
                        <div className='btn-breakfast' onClick={() => setOrder(newOrder(item, index))} >
                            <div className="imgBreakfast"><img src={item.img} alt="" /></div>
                            <div className="textBreakfast"><h3>{item.name}</h3></div>
                        </div>
                    </div>
                )
            })
            }
        </Fragment>
    )
}


export default MenuCard;
