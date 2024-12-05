import Card from "@/components/Card/Card";
import CardList from "@/components/CardList/CardList";
import Hero from "../components/Hero/Hero";
import { getFeaturedProducts } from "@/service/products";

// Página principal para mostrar los productos destacados
const page = async () => {
  // Llamada al servicio para obtener los productos destacados
  const products = await getFeaturedProducts();

  return (
    <>
      <Hero/>
      {/* Lista de tarjetas de productos */}
      <CardList>
         {/* Mapeamos los productos obtenidos y generamos una tarjeta por cada uno */}
      {products.map((product, i) => (
        <Card key={i} {...product} variant="secondary"/>  
      ))}
      </CardList>
    </>
  );
}

export default page;
