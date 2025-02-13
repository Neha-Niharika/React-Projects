interface Product {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
}

interface ProductCard {
  product: Product;
}

function ProductCard({ product }: ProductCard) {
  return (
    <div className="card p-3" style={{ width: "18rem" }}>
      <img
        className="card-img-top"
        src={product.imageUrl}
        alt={product.name}
        height="200"
        width="100"
      />
      <div className="card-body">
        <h2 className="card-title">Product : {product.name}</h2>
        <p>Cost of product : $ {product.cost}</p>
      </div>
    </div>
  );
}

export default ProductCard;
