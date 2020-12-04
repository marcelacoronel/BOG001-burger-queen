import React from 'react';

import iconTakeOrder from '../img/iconTakeOrder.png';
import iconOrderStatus from '../img/iconOrderStatus.png';

const NavBarData = [
    {
        title: 'Tomar Pedido',
        path: "/order",
        icon: iconTakeOrder,
        cName: 'navOptions'
    },
    {
        title: 'Estado Pedidos',
        path: "/status",
        icon: iconOrderStatus,
        cName: 'navOptions'
    },
   
]

export default NavBarData;
