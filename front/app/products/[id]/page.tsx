import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { getProductById } from "@/service/products";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: {id: string} }) => {
    // Extraer el id directamente de params
    const {id} = await params;
     // Obtener el producto usando el id
    const product = await getProductById(Number(id));

     // Si no se encuentra el producto, retorna una página de error 404
    if (!product) {
        return notFound()
    }
// Pasa tanto el producto como el id al componente ProductDetail
    return <ProductDetail product={product} id={""} />;
}

export default page;