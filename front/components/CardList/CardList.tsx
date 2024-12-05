import React from "react";

// Interfaz de propiedades para la tarjeta
interface CardListProps {
    children: React.ReactNode;
}
// Componente CardList que envuelve los elementos hijos
const CardList = ({children}: CardListProps) => { 
    return (
        <div className="flex flex-wrap gap-4 p-4 justify-center"> 
            {children} {/* Renderiza los elementos hijos dentro del contenedor */}
        </div>
    );
}

export default CardList;