
import React, { Fragment, useState } from 'react'


const  MenuCard = (props)=> {
    
    let setOrder = props.setOrder;
    let order = props.order;  
   
    return (
        <Fragment>
            {props.menu.map((item,index)=>{
                    return (
                        <div key={"card"+index}>
                            <div className= 'titleBreakfast' >
                                <h2>{item.title}</h2>
                            </div>
                            <div className='btn-breakfast'  onClick={()=>setOrder([...order, {id:item.id, name:item.name, price:item.price, number:1, bill:item.price}])} >
                                <div className="imgBreakfast"><img src ={item.img} alt="" /></div>
                                <div className="textBreakfast"><h3 >{item.name}</h3></div>
                            </div>
                        </div>
                    )})
                }   
                </Fragment>


       
    )
}


export default MenuCard;
