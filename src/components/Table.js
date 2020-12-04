import { useState } from "react";

//-----------------------------------------


const Table = ({ tab, order, setOrder, takingTable, setTakingTable }) => {

    const [selectTable, setSelectTable] = useState(false);

    const TakeOrder = () => {
        const orderCopy = [...order, { table: tab.name }];
        console.log(orderCopy);
        setTakingTable(false);
        return orderCopy;
    }


    return (
        <button onClick={() => setOrder(TakeOrder)} style={StyleUnavailable(tab.status)}>
            {tab.name}
        </button>)
}



const StyleUnavailable = (status) => {
    return {
        fontSize: "20px",
        color: "black",
        textDecoration: "none",
        background: status ? "#837E72" : "#FDC300",
        cursor: "pointer",
        width: "80px",
        height: "80px",
        margin: "20px"
    }
};


export default Table;