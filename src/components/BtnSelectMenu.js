

import React, { useState } from 'react'

function BtnSelectMenu(props) {

   // const [menu, setmenu] = useState(true);
   //  const [backg, setBackg] = useState(true);

   
   // const setStyle = (backg)=>{

   //     backg ? '#FFC300':'red';
   // setStyle={props.setBackg(true)
   // };  


   return (
       <div>
            <button onClick={() => props.setMenuBL(true) } > DESAYUNO</button>
            <button onClick={() => props.setMenuBL(false)}> ALMUERZO - CENA</button>
       </div>
   )
}

export default BtnSelectMenu;
