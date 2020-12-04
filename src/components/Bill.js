import React, { useState } from 'react';


const Bill = (props) => {
    console.log(props.bill);
    const orderIn = props.order;
    const bill = props.bill;
    const setBill = props.setBill;
    let totalBill= bill;
    
  
    // const totalBill = ()=>{
    //     const a = orderIn.forEach((p) => {
    //     let b = b + p.PriceTotal;
    //         console.log(p.priceTotal);
    //         return b;
    //     });
    //     console.log(a);
    //     return a;
        
         
    // }

    // useEffect(() => {
    //     return () => {
    //         setBill(totalBill);
    //     }
    // }, [orderIn])

    const suma = orderIn.map((item) => {
        totalBill = totalBill + item.priceTotal;
        setBill(totalBill);
        console.log(totalBill);
    })

    return (
        <div>
             <p>Total: $ {bill}</p>
        </div>
    )

}

export default Bill;


