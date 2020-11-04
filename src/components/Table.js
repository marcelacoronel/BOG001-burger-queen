import data from "../data/dataTables.json";
//-----------------------------------------


const Table = () => {
return(
data.map((table)=>{
return (
<button onClick={()=>TakeOrder(table.id) } key={table.id} style={StyleUnavailable(table.status)}>
    {table.name}
</button>)

}));
}

const TakeOrder = (id) =>{
    window.location.href = "/order/" + id;
}

const StyleUnavailable= (status) => {
        return {
            fontSize: "20px",
            color: "black",
            textDecoration: "none",
            background: status ? "#837E72" : "#FDC300",
            cursor:"pointer"
        }
    };


export default Table;