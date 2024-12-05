import Card from "@/components/Card/Card";
import CardList from "@/components/CardList/CardList";
import { getProducts } from "@/service/products";

const page = async () => {

    const products = await getProducts();

    return (
        <div>
            <CardList>
                {products.map((product, i) => (
                    <Card key={i} {...product} variant="secondary"/>
                ))}
            </CardList>
        </div>
    );
};

export default page;