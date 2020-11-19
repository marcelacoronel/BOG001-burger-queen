import dataMenu from "../data/dataMenu.json";

const Breakfast = ({statusOrder}) =>{
    const setOrder = (event)=>{
        event.preventDefault();
            statusOrder(event.target.innerHTML);
        }
    return (
dataMenu.breakfast.map((item)=>{
    return(
        <button onClick={setOrder} key={item.id}>
            { item.name }
        </button>
    )
})
    )
}

export default Breakfast;