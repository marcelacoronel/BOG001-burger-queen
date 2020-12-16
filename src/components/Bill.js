import React, { useState } from 'react';


const Bill = (props) => {
 
    const bill = props.bill;

    return (
        <div>
             <h2>Total: $ {bill}</h2>
        </div>
    )

}

export default Bill;


