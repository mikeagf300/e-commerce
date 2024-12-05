"use client";
import { createContext, useEffect, useState } from "react";


export interface Cart {
    id: number;
    name: string;
    price: number;
}
//Creo interface del context
interface CartContextProps {
    //tipos de lo que comparto 
    cart: Cart[];
    setCart: (cart: Cart[]) => void;
    emptyCart: () => void;
}

//Creo el contexto, aca voy a guardar los datos

export const CartContext = createContext<CartContextProps>({
    //datos iniciales de lo que comparto 
    cart: [],
    setCart: () => {},
    emptyCart: ()=> {},
});

//aca voy a crear el provider que va a tener el contexto de autenticacion

export const CartProvider = ({children} : {children: React.ReactNode}) => { 
    //codigo compartido
    const [cart, setCart] = useState<Cart[]>([]);
   
    useEffect(()=>{
        if (cart?.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    useEffect( ()=> {
        const localCart = JSON.parse (localStorage.getItem("cart")!);
        setCart(localCart);
    }, []);

    const emptyCart = () => {
        localStorage.removeItem("cart");
        setCart([]); //limpia el estado
    };

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            emptyCart
        }}>{children}
            </CartContext.Provider>
        );  
};