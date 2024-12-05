"use client";

import { Product } from '@/app/interfaces';
import styles from './ProductDetail.module.css'
import { useContext } from 'react';
import { AuthContext } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { CartContext } from '@/contexts/cartContext';

interface ProductDetailProps {
    id: string;
    product: Product
}

const ProductDetail = ({ product}: ProductDetailProps) => {
    const {user} = useContext(AuthContext); // Accede al estado de usuario desde el contexto AuthContext
    const {cart, setCart} = useContext(CartContext) // Accede al estado del carrito para actualizarlo desde el contexto CartContext
    const router = useRouter(); // Utiliza el hook useRouter para navegar entre páginas
    const {id, name, price, image, description} = product; // Desestructura las propiedades del producto desde el objeto product
    const isOnCart = cart?.filter(item => item.id === id).length > 0; // Verifica si el producto ya está en el carrito

    const handleAddToCart = () => { // Función para agregar el producto al carrito
            if (user?.login) {  // Verifica si el usuario está autenticado antes de agregar el producto al carrito
                if (Array.isArray(cart)) {
                    setCart([...cart, { id, name, price }]);
                } else {
                    setCart([{ id, name, price }]);
                }
                alert('Product added to cart');
            } else {
                // Si el usuario no está logueado, lo redirige al login
                alert('Please login to add product to cart');
                router.push("/login");
            }
        } 
    
    return  <article> 
                <h1> {name}</h1>
                <div className={styles.productDetail}>
                    <img src={image} alt={name} />
                    <div className={styles.info}>
                        <p>{description}</p>
                        <div className={styles.widget}>
                        <button 
                            onClick={
                                isOnCart ? () => router.push("/cart") : () => handleAddToCart () // Si ya está en el carrito, redirige al carrito, si no, agrega al carrito
                            }
                        >
                            {isOnCart ? "You can only buy one product of the same type at a time, please go to Cart" : "Add to cart"}
                        </button>
                        <p>{price}</p>
                        </div>
                    </div>
                </div>
                
            </article>
}

export default ProductDetail;