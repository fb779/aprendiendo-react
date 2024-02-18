export function CartItem({
  id,
  thumbnail,
  title,
  quantity,
  price,
  addToCart,
  removeToCart,
}) {
  const totalProduct = price * quantity;
  return (
    <li key={id}>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> <span>{price}</span>
      </div>
      <footer>
        <small>Qty: {quantity}</small>
        <button onClick={() => addToCart()}>+</button>
        <button onClick={() => removeToCart()}>-</button>
        <section>Total: {totalProduct}</section>
      </footer>
    </li>
  );
}
