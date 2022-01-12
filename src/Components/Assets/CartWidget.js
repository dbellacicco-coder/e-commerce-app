import React from "react";
import { Button,Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartWidget = ({countItem}) => {
  return (
     
             <Link to="/cart" variant="primary">
      Cart <Badge bg="black">{countItem}</Badge>
      <span className="visually-hidden">unread messages</span>
    </Link>
      
   
  );
};

export default CartWidget;
