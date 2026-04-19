import { Button, Card } from "react-bootstrap";
import type { Product } from "../types/Product";
import { Link } from "react-router-dom";
import Rating from "./Rating";

export default function ProductItem({product}: {product: Product}) {
  return (
    <Card>
        <div className="image_container">

        <Link to={`/products/${product.slug}`}>
          <img src={product.image} className="card-img-top" alt={product.name} />
        </Link>
        </div>
        <Card.Body>
          <Link to={`/products/${product.slug}`}>
            <Card.Title>{product.name}</Card.Title>
          </Link>
          <Rating rating={product.rating} numberReviews={product.numReviews}></Rating>
          <Card.Text>${product.price}</Card.Text>
          {product.countInStock === 0 ? (
            <Button className="btn btn-danger" disabled>
              Out of Stock
            </Button>
          ) : (
            <Button className="btn btn-primary">Add to Cart</Button>
          )}
        </Card.Body>
    </Card>
  )
}
