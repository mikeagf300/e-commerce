import AuthProtected from "@/components/AuthProtected/AuthProtected";
import CartDetail from "@/components/CartDetail/CartDetail";

const page = () => {
    return (
         /* Este componente garantiza que solo los usuarios autenticados puedan ver su carrito */
        <AuthProtected>
            <CartDetail />
        </AuthProtected>
    );
};

export default page;