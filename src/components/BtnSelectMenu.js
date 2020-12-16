import React, { useState } from 'react'

function BtnSelectMenu(props) {

    // const btnMenu = props.menuBL ? "active" : "disable";
    // const btnMenu2 = props.setMenuBL ? "active" : "disable";
    const [btnMenu1, setBtnMenu1] = useState("active");
    const [btnMenu2, setBtnMenu2]= useState("disable");


    const selectBreakfast = ()=>{
        props.setMenuBL(true)
        setBtnMenu1("active");
        setBtnMenu2("disable");
    };

    const selectLuch = ()=>{
        props.setMenuBL(false);
        setBtnMenu1("disable");
        setBtnMenu2("active");
    };

    return (
        <div>
            <button className={btnMenu1} onClick={selectBreakfast} > DESAYUNO</button>
            <button className={btnMenu2} onClick={selectLuch}> ALMUERZO - CENA</button>
        </div>
    )
}

export default BtnSelectMenu;
