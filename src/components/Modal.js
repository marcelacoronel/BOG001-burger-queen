import React, { useState } from 'react';

// -------- Modal ------------->
const Modal = (props) => {
    let order = props.detailOrder;
    let setStylesBtns = props.setStylesBtn;
    let stylesBtns = props.stylesBtn;
    let DetailProtein=[];
    let DetailAdicional=[];
    let DetailType = [];


    //----------- objeto para construir el modal --------->
    const objectProps = {
        id: "",
        name: "",
        price:0,
        protein:[],
        adicional:[],
        extra:[],
        type:[]
    }

    //------------- Objeto para enviar a la orden--------->
    const objectOrder = {
        id:"",
        name:"",
        quantity:1,
        price:0,
        custom:[],
        preferency:""
    }


    if(props.detailProduct[0]){
        objectProps.id = props.detailProduct[0].id;
        objectProps.name = props.detailProduct[0].name;
        objectProps.price = props.detailProduct[0].price;
        objectOrder.name = objectProps.name;
        objectOrder.price = objectProps.price;
        objectOrder.id = objectProps.id;
    if(props.detailProduct[0].custom.protein)
        objectProps.protein = props.detailProduct[0].custom.protein;

        if(props.detailProduct[0].custom.adicional)
        objectProps.adicional = props.detailProduct[0].custom.adicional;

        if(props.detailProduct[0].custom.type)
        objectProps.type = props.detailProduct[0].custom.type;
    }


    DetailProtein = objectProps.protein.map((item)=>{
        return (<button onClick={()=> {addCustom(objectOrder, {name: item.name, price: item.price, id: item.id, property: "protein"}, true)
        props.setStylesBtn({background: "red"})
    }}  key={item.id} style={ props.stylesBtn }>{item.name}</button>)
    })



    DetailAdicional = objectProps.adicional.map((item)=>{
        return (<button  onClick={()=> addCustom(objectOrder, {name: item.name, price: item.price, id: item.id, property: "adicional"}, false)}key={item.id}>{item.name}{item.price}</button>)
    })

    DetailType = objectProps.type.map((item)=>{
        return (<button onClick={()=> addCustom(objectOrder, {name: item.name, price: item.price, id: item.id, property: "type"}, true)} key={item.id}>{item.name}{item.price}</button>)
    })




    const DivModal = props.show && ( 
    <div className="overlay">
        <div className="popup">
            <h1>Modal</h1>
            <h1>{objectOrder.name}</h1>
            <h3>{objectOrder.price}</h3>
            <div>
                {DetailProtein}
                {DetailAdicional}
                {DetailType}
            </div>
                <button onClick={()=> {
                    order.push(objectOrder);
                    props.setDetailProduct(order);
                    props.close(false);
                }}>Agregar</button>
                <button onClick={()=> props.close(false)}>Cancelar</button>
        </div>
    </div>);

    return(
    <div>
        {DivModal}
    </div>
)}

//----------- Función añadir preferencia ------------->

const addCustom=(orderObject, customFood, selSingle)=>{
    let newObject={
        name:customFood.name,
        price:customFood.price,
        idItem: customFood.id,
        property: customFood.property
    }

    let filterItem = [];
    if (selSingle)
    filterItem = orderObject.custom.filter(item => item.property !== customFood.property);
    else
    filterItem = orderObject.custom.filter(item => item.idItem !== customFood.id);
    
    const filterId = orderObject.custom.filter(item => item.idItem === customFood.id);
    if(filterId.length == 0){
        filterItem.push(newObject);
    }

    orderObject.custom = filterItem;
    return orderObject;
}


const styleButtonCustom = (algo) => {
if(algo.background == "yellow"){
    algo.background = "red"
}else{
    algo.background = "yellow"
}
return algo;
}



export default Modal;    