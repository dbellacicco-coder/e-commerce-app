import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ product , setProduct }) => {
  const { title, price, image, description,stock,id } = product;

  {/*setProduct(product) */}


  const formatPrice = (itemPrice) => {
    return itemPrice.toLocaleString("en-US",
    { 
        style:"currency",
        currency:"USD"
     }
     )
  }
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
            {formatPrice(price)}
        </Card.Text>
        <Card.Text>
            Stock : no definido
        </Card.Text>
        <Link className="btn btn-primary" onClick={() => setProduct(product)} to={`/item/${id}`}> View More </Link>
        { /* <Button  onClick={() => setProduct(product)} variant="primary">View More</Button> */}
      </Card.Body>
    </Card>
  );
};

export default Item;
