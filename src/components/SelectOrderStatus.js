

import React, { setOrderStatus} from 'react'

function BtnSelectMenu(props) {

   // const [menu, setmenu] = useState(true);
   //  const [backg, setBackg] = useState(true);

   
   // const setStyle = (backg)=>{

   //     backg ? '#FFC300':'red';
   // setStyle={props.setBackg(true)
   // };  


   return (
       <div>
            <button onClick={() => props.setOrderStatus('EN COCINA') } > ENTRANTES</button>
            <button onClick={() => props.setOrderStatus('EN PROCESO')}> EN PROCESO</button>
            <button onClick={() => props.setOrderStatus('PARA SERVIR')}> PARA SERVIR</button>
            {/* <button onClick={() => props.setOrderStatus(false)}> PARA SERVIR</button> */}
       </div>
   )
}

export default BtnSelectMenu;
