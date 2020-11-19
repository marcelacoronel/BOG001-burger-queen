const OrderDetail = ({detailOrder})=>{
    return(detailOrder.map((item,index)=>{
        return (
            <div key={"item-" + index}>
                <p>{item.name} {item.price} {item.quantity}</p>
                {item.custom.map((itemCustom,idxItem)=>{return(<ul key={"custom-"+idxItem}><li>{itemCustom.name} {itemCustom.price}</li></ul>)})}
            </div>)}));
}

export default OrderDetail;