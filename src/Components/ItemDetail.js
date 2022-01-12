import React from 'react';
import { Card,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemDetail = ({productDetail,setCountItem,countItem}) => {

    const { title, price, image, description} = productDetail;

    const itemCounter = () => {
        return setCountItem( countItem + 1)
    }

    return (
        <Card>
  <Card.Header as="h5"> Product Full Detail</Card.Header>
  <Card.Body>
    <Card.Title>{title}</Card.Title>
  <Card.Img variant="top" src={image} />
  <Card.Text>
      {description}
    </Card.Text>
    <Card.Text>
      price : {price}
    </Card.Text>
    <Button  onClick={() => { itemCounter()}} variant="primary">Add to cart</Button>
  </Card.Body>
</Card>
    )
}

export default ItemDetail
