import { useGetAllCategoriesQuery } from '../redux/category/category.api'
import styles from '../styles/components/CategoriesTabs.module.css'

type CategoriesTabs = {
  categories?: string[]
}

const CategoriesTabs = ({categories}: CategoriesTabs) => {

  const {data, isLoading, error} = useGetAllCategoriesQuery(1)

  return (
    <nav className={styles.categories}>
      <button 
        className={`${styles.tab} ${styles.active}`}
      >
        All
      </button>
      {
        data && 
        data.map((cat, idx) => (
          <button 
            key={`${cat}-${idx}`}
            className={styles.tab}
          >
            {cat}
          </button>
        ))
      }
    </nav>
  );
}

export default CategoriesTabs;