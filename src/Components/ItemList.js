import React from "react";
import Item from "./Item";
import { Container,Row } from "react-bootstrap";

const ItemList = ({
  products
  ,
  setProduct
}) => {


  return (


    <Container>
    <Row style={{ alignItems: "stretch", justifyContent: "space-evenly" }}>
    {products.map((product) => {
        return (
          <Item
          setProduct={setProduct}
            key={product.id}
            product={product}
          />
        );
      })}
    </Row>
  </Container>

    
  );
};

export default ItemList;
