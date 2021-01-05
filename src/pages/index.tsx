import { GetServerSideProps } from "next";
import { Title } from "../styles/pages/Home";

interface IProduct {
  id:string;
  title:string;
}

interface IHomeProducts {
  recommendedProducts: IProduct[];
}

export const JSON_SERVER = 'http://localhost:3333'

export default function Home({ recommendedProducts }:IHomeProducts) {
  
  return (
    <>
      <Title>Products</Title>
      <ul>
        {recommendedProducts.map(recommendedProduct => {
          return (<li key={recommendedProduct.id}>
            {recommendedProduct.title}
          </li>)
        })}
      </ul>    
    </>
  )
}


export const getServerSideProps : GetServerSideProps<IHomeProducts> = async () => {
  const response = await fetch(`${JSON_SERVER}/recommended`);
  const recommendedProducts = await response.json();
  return {
    props:{
      recommendedProducts
    }
  }
}