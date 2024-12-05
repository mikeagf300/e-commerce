import { Cart } from "@/contexts/cartContext";

const apiUrl = process.env.API_URL || "http://localhost:3001";

// Función para crear una nueva orden, recibe el ID del usuario, el token y el carrito de compras
export const postOrders = async (userId: number, token: string,  cart: Cart []) => {
     // Preparar los datos que se enviarán, solo el ID de los productos
    const data = {userId, products: cart.map(( item ) => item.id)};

    const res = await fetch(`${apiUrl}/orders`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Authorization: token, // Incluir el token de autorización del usuario
        },
    });
    return await res.json();
}