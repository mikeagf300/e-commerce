"use client";

import { useContext } from "react";
import { CartContext } from "@/contexts/cartContext";
import { AuthContext } from "@/contexts/authContext";
import { postOrders } from "@/service/orders";
import AuthProtected from "@/components/AuthProtected/AuthProtected";

// Componente que muestra los detalles del carrito
const CartDetail = () => {
    const { user, orders, setOrders } = useContext(AuthContext);  // Accede a orders desde el contexto
    const { cart, emptyCart } = useContext(CartContext); // Accede al carrito desde el contexto

    // Función para manejar la compra
    const handleBuy = async () => {
        await postOrders(user?.user.id || 0, user?.token || "", cart).then((r) => {
            if (r.status === "approved") { // Verifica el estado de la respuesta
                alert(r.id);
                console.log(r);
                emptyCart(); // Vacía el carrito después de la compra

                // Añadir la nueva orden a las órdenes existentes
                setOrders([
                    ...orders,  // Usa el estado actual de orders
                    { 
                        id: parseInt(r.id), // Añade la nueva orden al array 
                        status: r.status, 
                        date: r.date, 
                    }
                ]);
            } else {
                alert(r); // Muestra un mensaje de error si la compra no fue exitosa
            }
        });
    };

    return (
        <AuthProtected>
            <div>
                {cart && cart.length === 0 ? (
                    <h2>Cart is Empty!</h2> // Muestra un mensaje si el carrito está vacío
                ) : (
                    cart?.map((item, i) => ( // Muestra los detalles de cada producto en el carrito
                        <div key={i}> 
                            <h2>{item.name}</h2>
                        </div>
                    ))
                )}
                <button 
                    type="submit" 
                    className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    onClick={handleBuy}>
                    Buy
                </button>
            </div>
        </AuthProtected>
    );
};

export default CartDetail;



