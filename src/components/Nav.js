import { Link } from "react-router-dom";
import logoBQNav from '../img/logoBQNav.png';
//----------------------------------------------

const Nav = () => {

return (<div>
    <Link to="/">
            <img src ={logoBQNav} alt=""/>
            <span>Cerrar Sesión</span>
        </Link>

<p>Nombre mesero</p>

<ul>
    <li><Link to= "/selecttable">Select Table</Link></li>
    <li><Link to= "/status">Status Order</Link></li>
    <li><Link to= "/stock">Stock</Link></li>
    <li><Link to= "/bill">Bill</Link></li>
    
</ul>


<p>Aqui va la fecha</p>
    </div>
    )}

export default Nav;