import OrderPages from "../views/private/order";
import ProfilePages from "../views/private/profile";
import Home from "../views/public/home/pages/Home";
import Product from "../views/public/product";



export const publicRoutes = [
    {
        path:'/*',
        element: <Home />
    },
    {
        path:'/products/*',
        element: <Product />
    }
]

export const privateRoutes = [
    {
        path:'/orders/*',
        element: <OrderPages />
    },
    {
        path:'/profile/*',
        element: <ProfilePages />
    }
]

