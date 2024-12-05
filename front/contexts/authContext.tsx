"use client";

import { Order, UserSession } from "@/app/interfaces";
import { createContext, useEffect, useState } from "react";

// Creo la interfaz del contexto
interface AuthContextProps {
    user: UserSession | null;
    setUser: (user: UserSession | null) => void;
    logout: () => void;
    orders: Order[];
    setOrders: (orders: Order[]) => void;
}

// Creo el contexto, aquí voy a guardar los datos
export const AuthContext = createContext<AuthContextProps>({
    user: null,
    orders: [],
    setUser: () => {},
    logout: () => {},
    setOrders: () => {},
});

// Aquí voy a crear el provider que va a tener el contexto de autenticación
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserSession | null>(null);
    const [orders, setOrders] = useState<Order[]>([]);

    // Guardamos el estado del usuario y de las órdenes en localStorage
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setOrders(user?.user.orders || []);
            // Guardamos las órdenes también en localStorage
            localStorage.setItem("orders", JSON.stringify(user?.user.orders || []));
        }
    }, [user]);

    // Cargamos el usuario y las órdenes de localStorage al iniciar
    useEffect(() => {
        const localUser = JSON.parse(localStorage.getItem("user")!);
        const localOrders = JSON.parse(localStorage.getItem("orders")!);
        if (localUser) {
            setUser(localUser);
        }
        if (localOrders) {
            setOrders(localOrders);
        }
    }, []);

    // Función para cerrar sesión
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("orders");  // Eliminar también las órdenes
        setUser(null);
        setOrders([]);  // Limpiar las órdenes en el estado
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout, orders, setOrders }}>
            {children}
        </AuthContext.Provider>
    );
};
