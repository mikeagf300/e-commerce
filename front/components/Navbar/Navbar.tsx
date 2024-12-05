"use client";

import Link from "next/link";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";
import UserWidget from "../UserWidget/UserWidget";
import { useContext } from "react";
import { AuthContext } from "@/contexts/authContext";

const Navbar = () => {
    const { user } = useContext(AuthContext);  // Obtiene el estado del usuario desde el contexto de autenticación

    return (
        <nav className={styles.navbar}>
            <div className="container flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <FaHome size={30} /> HOME
                </Link>
                <input 
                    type="text"
                    placeholder="Let's find your next purchase"
                    className="border rounded-lg px-3 py-1.5 text-sm w-1/3 text-black"
                />
                <div className="flex gap-3 items-center">
                    {/* Solo mostrar el enlace al carrito si el usuario está logeado */}
                    {user?.login && (
                        <Link href="/cart" className="flex items-center gap-2">
                            <FaShoppingCart size={24} />
                            Cart
                        </Link>
                    )}
                    {/* Si el usuario no está logeado, muestra el enlace de "Register" */}
                    {!user?.login && <Link href="/register">Register</Link>}
                    <UserWidget />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

