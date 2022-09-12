import { GetServerSideProps } from "next";
import Image from "next/image";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import Rating from "../../components/Rating";
import styles from '../../styles/pages/Product.module.css'
import { IProduct } from "../../types";
import Button from "../../ui/Button";
import { FaCartPlus, FaCheck, FaHome } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addToCart, removeFromCart } from "../../redux/slices/cart.slice";

type ProductPageProps = {
  data: IProduct,
}

const ProductPage = ({data}: ProductPageProps) => {
  const dispatch = useDispatch()
  const {cart} = useTypedSelector(state => state)
  
  const {id,title,price,description,category,image,rating} = data

  const isInCart = cart.some(p => p.id === id)

  const cartHandler = () => {
    if (isInCart) {
      dispatch(removeFromCart({id}))
    } else {
      dispatch(addToCart(data))
    }
  }

  return (
    <Layout title={title}>
      <Container>
        <nav className={styles.breadcrumbs}>
          <span>
            <Link href="/">
              <a><FaHome /></a>
            </Link>
          </span>
          <span className={styles.divider}>/</span>
          <span>
            <Link href="/products">
              <a>Catalog</a>
            </Link>
          </span>
          <span className={styles.divider}>/</span>
          <span className={styles['breadcrumbs-last']}>{title}</span>
        </nav>
        <div className={styles.inner}>
          <div className={styles.wrap}>
            <Image 
              className={styles.img}
              src={image} 
              objectFit='contain'
              width={'200'}
              height={'300'}
              />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <Rating rating={rating}/>
            <div className={styles.description}>{description}</div>
            

            <div className={styles.actions}>
              <div className={styles.price}>${price}</div>
              <Button
                bgColor={isInCart ? '#5fbb82' : ''}
                onClick={() => cartHandler()}
              >
                
                {isInCart ? (
                  <>
                    <FaCheck />
                    Remove
                  </>
                ) : (
                  <>
                    <FaCartPlus />
                    Add to cart
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export const  getServerSideProps: GetServerSideProps  = async (context) => {
  const {id} = context.query
  
  const res = await fetch(`${process.env.API_BASE_URL}/products/${id}`)
  const data = await res.json()

  return {
    props: {data}
  }
}

export default ProductPage;