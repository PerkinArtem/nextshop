import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaAlignRight, FaBars, FaCross, FaOutdent, FaShoppingCart, FaTimes } from "react-icons/fa";
import { useTypedSelector } from "../hooks/useTypedSelector";
import styles from '../styles/components/Navigation.module.css'
import { MenuItem } from "../types";

const Navigation = () => {
  const menuItems:MenuItem[] = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/products',
      title: 'Catalog'
    },
    {
      path: '/about',
      title: 'About'
    },
  ]

  const router = useRouter()
  const {cart} = useTypedSelector(state => state)
  const [menuActive, setMenuActive] = useState(false)
  
  return (
    <nav className={styles.nav}>
      <ul className={styles.menu}>
      {
        menuItems.map((item, idx) => {
          const itemClass = router.pathname === item.path ? styles.item + ' ' + styles.active : styles.item
          return (
            <li 
              className={itemClass}
              key={`${item.title}-${idx}`}
            >
              <Link href={item.path}>
                <a className={styles.link}>
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })
      }
      </ul>
      <ul 
        className={`${menuActive ? styles['mobile-menu'] + ' ' + styles.active : styles['mobile-menu']}`}
      >
      {
        menuItems.map((item, idx) => {
          const itemClass = router.pathname === item.path ? styles['mobile-item'] + ' ' + styles.active : styles['mobile-item']
          return (
            <li 
              className={itemClass}
              key={`${item.title}-${idx}`}
            >
              <Link href={item.path}>
                <a className={styles['mobile-link']}>
                  {item.title}
                </a>
              </Link>
            </li>
          )
        })
      }
      </ul>
      <Link href={'/cart'}>
        <a className={styles.cart}>
          <FaShoppingCart/>
          {cart.length ? (<span className={styles['cart-count']}>{cart.length}</span>) : ''}
        </a>
      </Link>
      <button 
        className={styles.burger}
        onClick={() => setMenuActive(!menuActive)}
      >
        {menuActive ? <FaTimes /> : <FaOutdent />}
        
      </button>
    </nav>
  );
}

export default Navigation;