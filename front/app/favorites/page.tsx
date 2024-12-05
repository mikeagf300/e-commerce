"use client";

import { useFavorites } from "@/contexts/favoriteContext";

const FavoritesPage = () => {
  const { favorites } = useFavorites(); // Obtiene los productos favoritos directamente desde el contexto


  return (
    <div>
      <h2>Mis Favoritos</h2>
      {/* Si no hay productos favoritos, muestra un mensaje */}
      {favorites.length === 0 ? (
        <p>No tienes productos en favoritos.</p>
      ) : (
        <div>
           {/* Mapea y renderiza cada producto favorito */}
{favorites.map((product) => (
  <div key={product.id} className="favorite-item">
    <img
      src={product.image}
      alt={product.name}
      width={100}
      height={100}
    />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default FavoritesPage;


