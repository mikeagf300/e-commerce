"use client"

import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import styles from './sidebar.module.css';
import { useEffect, useState } from "react";


const CustomSidebar = () => {

   // Estado para verificar si el componente se está ejecutando en el cliente
  const [isClient, setIsClient] = useState(false);

   // Efecto para establecer isClient en true una vez que el componente se haya montado en el cliente
  useEffect(() => {
    setIsClient(true); // Establece isClient en true cuando el componente se monta en el cliente
  }, []);

   // Si el componente no se está ejecutando en el cliente, no se renderiza nada
  if (!isClient) {
    return null; // Evitar renderizar en el servidor
  }
  
  return (
    <Sidebar className={styles["sidebar-container"]}>
    <Menu>
      <SubMenu label="Categories" className={styles["sub-menu"]}>
        <MenuItem className={styles["sub-menu-item"]}>Smartphones</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Laptops</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Tablets</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Headphones</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Cameras</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Printers</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Monitors</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Storage</MenuItem>
        <MenuItem className={styles["sub-menu-item"]}>Accessories</MenuItem>
      </SubMenu>

      <MenuItem className={styles["menu-item"]} href="/favorites">
  Favorites List
</MenuItem>
    </Menu>
  </Sidebar>
  );
};

export default CustomSidebar;
