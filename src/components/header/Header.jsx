import React from 'react'
import styles from "./header.module.css"
export default function Header() {
  return (
    <div className={styles.navBar}>
        <div className={styles.logo}>
            <h1>Inventory Managment System</h1>
        </div>

        <ul className={styles.list}>
            <li className={styles.items}>Home</li>
            <li className={styles.items}>About</li>
            <li className={styles.items}>Services</li>
            <li className={styles.items}>Contact</li>
        </ul>
       
    </div>
  )
}
