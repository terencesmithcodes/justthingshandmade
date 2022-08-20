import "./product-card.styles.scss";

// import Button from "../button/button.component";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {/* <Button buttonType="inverted">Add to card</Button> */}

      <button
        className="buy-button snipcart-add-item"
        data-item-id={product.id}
        data-item-image={product.image}
        data-item-name={product.title}
        data-item-price={product.price}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
