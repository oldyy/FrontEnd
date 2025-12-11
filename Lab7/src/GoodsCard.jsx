function GoodsCard({ img, name, price }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: 10,
        margin: 10,
        width: 180,
        boxSizing: "border-box",
      }}
    >
      <img src={img} alt={name} width={160} />
      <h4>{name}</h4>
      <p>Ціна: {price} ₴</p>
      <button>Купити</button>
    </div>
  );
}

export default GoodsCard;
