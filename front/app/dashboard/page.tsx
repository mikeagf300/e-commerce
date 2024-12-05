"use client"

import AuthProtected from "@/components/AuthProtected/AuthProtected";
import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";
import Card from 'react-bootstrap/Card';

const Page = () => {
    const context = useContext(AuthContext); // Se obtiene el contexto de autenticación
    const user = context.user?.user; // Usuario autenticado
    const orders = context.orders; // Órdenes del usuario

    return (
        <AuthProtected>
            <div>
                <h1>Dashboard</h1>
                 {/* Información del usuario autenticado */}
                <h3>{user?.name}</h3>
                <h4>{user?.email}</h4>
                <h5>{user?.phone}</h5>
                <h6>{user?.address}</h6>
                
                {/* Si el usuario tiene órdenes, se muestran */}
                {orders && orders.length > 0 ? (
                    orders.map((order, i) => (
                        <Card key={i} border="primary" style={{ width: '18rem', margin: '1rem 0' }}>
                            <Card.Header>Order ID: {order.id}</Card.Header>
                            <Card.Body>
                                <Card.Title>Status: {order.status}</Card.Title>
                                <Card.Text>Date: {order.date}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                ) : (
                    <p>No orders!</p>
                )}
            </div>
        </AuthProtected>
    );
};

export default Page;

