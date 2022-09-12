import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaSpinner } from "react-icons/fa";
import styles from '../styles/components/Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <FaSpinner />
    </div>
  );
}

export default Loader;