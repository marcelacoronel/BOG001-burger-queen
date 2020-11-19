import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//----------Componentes------------------------------
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import OrderDetail from "./OrderDetail";
import Modal from "./Modal";


const TakingOrder = () => {
    // Estado que recibe el producto seleccionado en el menu y se le pasa al modal
    const [detailProduct, setDetailProduct] = useState({});
    // Muestra y oculta los menus seleccionados
    const [show, setShow] = useState(true);
    // Parametro que se pasa a través del router para identificar la mesa seleccionada 
    const { id } = useParams();
    //Estado que se modifica al seleccionar un producto en el menu y se le pasa al modal para que se visualice
    const [ open, setOpen ] = useState(false);
    // Captura el objeto creado en el modal y es recibido en OrderDetail
    const [ order, setOrder ] = useState([]);
    // Estado para los estilos dinámicos de los botones del modal
    const [styleBtn, setStyleBtn] = useState([]);
    //--------------------------------------------------------------------------->
    return (<div className="containerTaking">
        <div className="menuInTaking">
        <h2>Mesa {id}</h2>
        <button onClick= {()=>{setShow(true)}}>Desayuno</button>
        <button onClick= {()=>{setShow(false)}}>Almuerzo y Cena</button>
        <Modal show={open} close={setOpen} detailProduct={detailProduct} setDetailProduct={setDetailProduct} detailOrder={order} modifyOrder={setOrder} stylesBtn={ styleBtn } setStylesBtn={ setStyleBtn }/>
        {show ? (<Breakfast statusOrder = {setDetailProduct} />) : (<Lunch statusOrder = {setDetailProduct} showModal={setOpen}/>) }
        </div>
        <div className="orderInTaking">
        <p>Vista Toma de pedido</p>
                <OrderDetail detailOrder={order} modifyOrder={setOrder}/>
        </div>
            </div>);
}


export default TakingOrder;