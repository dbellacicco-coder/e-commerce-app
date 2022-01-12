import React, { useState, useEffect } from "react";
import Loading from "./Assets/Loading";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({setProduct}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    setLoading(true);

    const API_URL = id ? `https://fakestoreapi.com/products/category/${id}` : "https://fakestoreapi.com/products";
    const Data = fetch(API_URL);

    Data.then((res) => res.json())
      .then((res) => {
        setProducts(res);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>

        {loading ? <Loading /> : <ItemList setProduct={setProduct} products={products} />}
    </>
      
  );
};

export default ItemListContainer;
