import Image from 'next/image';
import Link from 'next/link';
import { FaCartPlus, FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { addToCart, removeFromCart } from '../redux/slices/cart.slice';
import styles from '../styles/components/ProductCard.module.css'
import { IProduct } from "../types";
import Button from '../ui/Button';
import Rating from './Rating';

type ProductCardProps = {
  data: IProduct,
}

const ProductCard = ({data}: ProductCardProps) => {
  const dispatch = useDispatch()
  const {cart} = useTypedSelector(state => state)

  const {id, title, price, description, category, image, rating} = data
  const productLink = `/products/${id}`

  const isInCart = cart.some(p => p.id === id)

  const cartHandler = () => {
    if (isInCart) {
      dispatch(removeFromCart({id}))
    } else {
      dispatch(addToCart(data))
    }
  }

  return (
    <article className={styles.card}>
      <Link href={productLink}>
        <a className={styles.wrap}>
          <span className={styles.category}>{category}</span>
          <Image 
            className={styles.img}
            src={image} 
            alt={title}
            objectFit='contain'
            width={'200'}
            height={'350'}
            />
        </a>
      </Link>
      <div className={styles.inner}>
        <Rating rating={rating} />
        <Link href={productLink}>
          <a className={styles.title}>{title}</a>
        </Link>
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
    </article>
  );
}

export default ProductCard;