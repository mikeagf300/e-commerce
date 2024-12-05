import type { Metadata } from "next";
import {Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer.tsx/Footer";
import { AuthProvider } from "@/contexts/authContext";
import { CartProvider } from "@/contexts/cartContext";
import { FavoriteProvider } from "@/contexts/favoriteContext";
import SidebarComponent from "@/components/Sidebar/Sidebar";

const primaryFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--primary-font",
});
const secondaryFont = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--secondary-font",
})
// Metadata de la página (título y descripción)
export const metadata: Metadata = {
  title: "My e-commerce",
  description: "My first e-commerce ",
};
// Layout raíz que incluye los contextos y el diseño global
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     // Proveedores de contextos para autenticación, carrito y favoritos
    <AuthProvider>
      <CartProvider>
        <FavoriteProvider>
          <html lang="en" className={secondaryFont.className}>  {/* Se aplica la fuente secundaria globalmente */}
            <body
              className={`${primaryFont.variable} ${secondaryFont.variable} antialiased`}              >
                 {/* Componente del Navbar que se mantendrá fijo en todas las páginas */}
                <Navbar/>
                  <div className="flex">
                    {/* Componente de la barra lateral */}
                    <SidebarComponent />
                    {/* El contenido de la página se inyecta aquí, se renderiza con el layout */}
                    <main className="container">{children}</main>
                  </div>
                  {/* Componente del Footer que se mantiene en todas las páginas */}
              <Footer/>
            </body>
          </html>
        </FavoriteProvider>
      </CartProvider>
    </AuthProvider>
  );
}
