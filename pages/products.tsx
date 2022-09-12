import { GetServerSideProps, NextPage } from "next";
import styles from '../styles/pages/Products.module.css'
import Container from "../components/Container";
import Layout from "../components/Layout";
import { IProduct } from "../types";
import ProductCard from "../components/ProductCard";
import CategoriesTabs from "../components/CategoriesTabs";
import { useGetAllProductsQuery } from "../redux/product/product.api";
import Loader from "../components/Loader";

type CatalogProps = {

}

const Catalog: NextPage<CatalogProps> = () => {

  const {data, isLoading, error} = useGetAllProductsQuery(1)

  return (
    <Layout title="Catalog">
      <div className={styles.catalog}>
        <Container>
          <CategoriesTabs/>
          <div className={styles.grid}>
          {
            isLoading ? 
            (
              <Loader />
            ) : 
            data && 
            data.map((product) => {
              return (
                <ProductCard 
                  key={product.id}
                  data={product}
                />
                )
              })
            }
          </div>
        </Container>
      </div>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps  = async (context) => {
  return { 
    props: { } 
  }
}

export default Catalog;