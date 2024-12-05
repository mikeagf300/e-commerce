import { Product } from "@/app/interfaces";
import { productsMock } from "@/app/mocks/products";

// Usar productos mock si está habilitado, o la URL de la API si no
const ffProductsMock = process.env.FF_PRODUCTS_MOCK || false;
const apiUrl = process.env.API_URL || "http://localhost:3001";

// Función para obtener todos los productos desde la API
export const getProducts = async (): Promise<Product[]> => {
    try {
        const res = await fetch(apiUrl + "/products", {
            cache: "no-store", // No almacenar en caché para obtener datos actualizados
        });

        // Verificar si la respuesta es válida y contiene un array
        if (!res.ok) {
            throw new Error("Error en la respuesta del servidor");
        }

        const data = await res.json();

        // Asegurarse de que data es un array
        if (!Array.isArray(data)) {
            throw new Error("El formato de los datos es incorrecto");
        }

        return data; // Devolver los datos obtenidos desde la API

    } catch (error) {
        console.error("Error al obtener productos:", error);

        // Si falla el fetch, utilizar el mock si está activado
        if (ffProductsMock) {
            console.warn("Usando productos mock debido a un fallo en el fetch");
            return productsMock;
        }

        throw error;  // Lanzar el error si no hay mock disponible
    }
};

// Función para obtener los productos destacados (los primeros 3 de la lista)

export const getFeaturedProducts = async (): Promise<Product[]> => {
    const res = await getProducts();

    // Asegurarse de que res sea un array antes de usar slice
    const featured = Array.isArray(res) ? res.slice(0, 3) : [];
    return featured;
};

// Función para obtener un producto por su ID
export const getProductById = async (id: number): Promise<Product> => {
    const res = await getProducts();
    const product = res.filter((p) => p.id === id)[0];
    return product;
};
