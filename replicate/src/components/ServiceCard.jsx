function ServiceCard({ title, price }) {
  return (
    <div className="card">
      <div className="card-image">450 × 300</div>

      <div className="card-body">
        <h4>{title}</h4>
        <p>{price}</p>
        <button className="card-btn">Add to cart</button>
      </div>
    </div>
  );
}

export default ServiceCard;
