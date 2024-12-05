// Define las interfaces para estructurar datos en la aplicación

// Interfaz para los productos que se muestran en la tienda

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
}

// Interfaz para el usuario
export interface User {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role:  "admin" | "user";
}



export interface UserLogin { 
    email: string;
    password: string;
}

export interface UserData { 
    name: string;
    email: string;
    address: string;
    phone: string;
}

export interface UserSession {
    login: boolean;
    token: string;
    user: UserSessionData;
}

interface UserSessionData {
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    credential: Credential;
    orders: Order[];
}

// Interfaz para el pedido
export interface Order {
    id: number;
    status?: string;
    date?: string;
}

interface Credential {
    id: number;
    password: string;
}