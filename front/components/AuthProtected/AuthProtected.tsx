"use client"

import { AuthContext } from "@/contexts/authContext";
import { useRouter } from "next/navigation";
import React, {useContext, useEffect} from "react";

// Componente que envuelve el contenido y lo hace accesible solo a usuarios autenticados
const AuthProtected = ({ children }: { children: React.ReactNode}) => {
    const router = useRouter (); // Hook para redireccionar en caso de no estar autenticado
    const context = useContext(AuthContext); // Usamos el contexto para obtener el estado de autenticación
    const user = context.user?.user; // Extraemos el usuario desde el contexto de autenticación 


    // Redirige al login si no hay un usuario autenticado
    useEffect (() => {
        if (!user) {
            router.push('/login'); // Redirige al login si el usuario no está autenticado
        }
    }, []);

    return <>{children}</>; // Si el usuario está autenticado, se renderiza el contenido
};

export default AuthProtected;