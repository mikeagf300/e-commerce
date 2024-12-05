"use client"

import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { Product } from "@/app/interfaces";

interface FavoriteContextProps {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: number) => void;
  loadFavorites: () => void;
}

// Creación del contexto
export const FavoriteContext = createContext<FavoriteContextProps>({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  loadFavorites: () => {},
});

// Provider para compartir el contexto
export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  // Función para cargar favoritos desde localStorage
  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (storedFavorites.length > 0) {
      setFavorites(storedFavorites); // Solo actualiza si hay datos en localStorage
    }
  };

  useEffect(() => {
    loadFavorites(); // Cargar favoritos al montar el contexto
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); // Solo sincroniza cuando favorites cambia

  const addFavorite = (product: Product) => {
    setFavorites((prev) => [...prev, product]);    
  };

  const removeFavorite = (id: number) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite, loadFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};


// Hook personalizado para usar el contexto
export const useFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoriteProvider");
  }
  return context;
};