"use client";

import { Product } from "@/app/interfaces";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { FavoriteContext } from "@/contexts/favoriteContext";
import { FaHeart } from "react-icons/fa"; // Importa el ícono de corazón

// Interfaz de propiedades que extiende la interfaz de Producto
interface CardProps extends Product {
  variant?: "primary" | "secondary";
}

// Componente Card para representar un producto
const Card = ({ name, image, price, id, variant = "primary" }: CardProps) => {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext) || {};
  if (!favorites) {
    console.error("FavoriteContext is not properly initialized"); // Manejo de error si FavoriteContext no está inicializado correctamente
  }

  const isFavorite = favorites.some((item) => item.id === id); // Verifica si el producto está en la lista de favoritos

  // Maneja el clic en el corazón para agregar o eliminar de favoritos
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        name, image, price, id,
        description: "",
        stock: 0,
        categoryId: 0
      });
    }
  };

  return (
    <Link href={`/products/${id}`}>
      <article
        className={`w-64 h-80 m-2 overflow-hidden flex flex-col items-center rounded-lg shadow-black transition-transform transform hover:scale-105 ${
          variant === "primary" ? "bg-quaternary" : "bg-quaternary"
        }`}
      >
        <div className="flex justify-between w-full px-2 pt-2">
          <h3 className="text-black">{name}</h3>
          <button
            onClick={(e) => {
              e.preventDefault(); // Evita la navegación al detalle del producto al hacer clic en el corazón
              handleFavoriteClick(); // Llama a la función para manejar el clic en el favorito
            }}
          >
            <FaHeart className={isFavorite ? "text-red-500" : "text-gray-400"} /> {/* Muestra el corazón rojo si es favorito, gris si no lo es */}
          </button>
        </div>
        <div className="w-full h-48 flex items-center justify-center overflow-hidden">
          <Image
            src={image}
            alt={name}
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-black mt-2">{price}</p> 
      </article>
    </Link>
  );
};

export default Card;

