import React, { useState, useEffect } from "react";
import Loading from "./Assets/Loading";
import ItemDetail from './ItemDetail';
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({product,setCountItem ,countItem}) => {


    
    const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const {id} = useParams();

    useEffect(() => {
        setLoading(true);
        
        const API_URL = `https://fakestoreapi.com/products/${id}`;
        const Data = fetch(API_URL);
    
        Data.then((res) => res.json())
          .then((res) => {
            setProductDetail(res);
            setLoading(true);
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => setLoading(false));
      },[]);

    return (
        <>
        {loading ? <Loading /> : <ItemDetail countItem={countItem} setCountItem={setCountItem} productDetail={productDetail} />}
            
        </>
    )
}

export default ItemDetailContainer
