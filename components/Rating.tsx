import styles from '../styles/components/Rating.module.css'
import { FaRegStar } from "react-icons/fa";
import { IRating } from '../types';

type RatingProps = {
  rating: IRating,
}

const Rating = ({rating}: RatingProps) => {
  const {rate, count} = rating
  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
      <div className={styles.rate}>{rate}/5</div>
        {
          [...Array(5)].map((star, idx) => {
            idx++
            const decimal = Number((rate % 1).toFixed(1)) * 100
            const randomId = Math.floor(Math.random()*100000)
            const getOffset = () => {
              let result = 0
              if (idx <= rate) {
                result = 100
              } else if ( idx == (rate - (rate % 1) + 1) ) {
                result = decimal
              } else {
                result = 0
              }
              return result
            }
            return (
              <svg 
                key={randomId}
                className={styles.star}
                stroke="#fff" 
                fill="#fff" 
                strokeWidth="0" 
                viewBox="0 0 576 512" 
                height="20px" 
                width="20px" 
                xmlns="http://www.w3.org/2000/svg" 
                >
                 <defs>
                  <linearGradient id={`grad-${randomId}`}>
                    <stop offset={`${getOffset()}%`} stopColor="#5fbb82"/>
                    <stop offset={`${getOffset()}%`} stopColor="grey"/>
                  </linearGradient>
                </defs>
                <path fill={`url(#grad-${randomId})`} d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
              </svg>
            )
          })
        }
        <div className={styles.count}>{count} ratings</div>
      </div>
      
    </div>
  );
}

export default Rating;