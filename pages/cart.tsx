import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Container from "../components/Container";
import Layout from "../components/Layout";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { removeFromCart } from "../redux/slices/cart.slice";
import styles from "../styles/pages/Cart.module.css";
import { IProduct } from "../types";
import Button from "../ui/Button";


const Cart = () => {
  const dispatch = useDispatch()
  const {cart} = useTypedSelector(state => state)

  const total = cart.reduce<number>((acc, p) => {
    const result = Math.round(acc + p.price)
    return result
  }, 0)

  return (
    <Layout title="Cart">
      <div className={styles.cart}>
        <Container>
          <div className={styles.inner}>
            <h1 className={styles.title}>{cart.length ? 'Your Cart' : 'Your Cart is empty'}</h1>
            <ul className={styles.products}>
              {
                cart.map(p => {
                  const productLink = `/products/${p.id}`
                  return (
                    <li className={styles.product} key={`${p.title}-${p.id}`}>
                      <div className={styles['product-img-wrap']} >
                        <Image 
                          className={styles['product-img']} 
                          src={p.image} 
                          alt={p.title}
                          width="80" 
                          height="80"
                          objectFit="contain"
                          />
                      </div>
                      <Link href={productLink}>
                        <a className={styles['product-title']}>{p.title}</a>
                      </Link>
                      <div className={styles['product-price']}>${p.price}</div>
                      <button 
                        className={styles['product-delete']}
                        onClick={() => dispatch(removeFromCart({id: p.id}))}
                        type="button"
                        >
                          <FaTrash />
                      </button>
                    </li>
                )
              })
              
            }
            </ul>
            <aside className={styles.sidebar}>
              {cart.length ? (<div className={styles.total}>Total: ${total}</div>) : ''}
              <Button>
                <Link href="/products">
                  <a>Back to shopping</a>
                </Link>
              </Button>
              {
                cart.length ? (
                  <Button 
                    disabled={true} 
                    opacity="0.3"
                  >
                    Proceed to checkout
                  </Button>
                ) : ''
              }

            </aside>
          </div>

        </Container>
      </div>
    </Layout>
  );
}

export default Cart;