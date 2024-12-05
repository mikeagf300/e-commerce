"use client";

import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useContext } from "react";

const UserWidget = () =>{
  // Obtiene los valores del contexto de autenticación (usuario y función de logout)
    const {user, logout} = useContext(AuthContext)
    return (
        <div>
           {/* Verifica si el usuario no está autenticado y muestra un enlace de inicio de sesión, de lo contrario, 
           muestra el correo electrónico del usuario y un botón de cierre de sesión */}
          {!user?.login ? (
            <Link href="/login"> Sign in </Link>
         ) : (
          // Si el usuario está logueado, muestra su correo y un botón para cerrar sesión
          <div className="flex gap-3 ">
            <Link href="/dashboard"> {user.user.email} </Link>
         <button onClick={logout}>Sign Out</button>
         </div>
        )}
    </div>
  );
};  

export default UserWidget;