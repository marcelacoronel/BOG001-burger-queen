const Bill = () =>{
    return (
        <div>
            <p>Aqui va la vista de cuenta cliente</p>
            <button onClick={()=> window.location.href="/selecttable"}>Regresar a Selección de mesa</button>
        </div>);
}

export default Bill;