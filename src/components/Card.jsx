export default function Card({ image, title, price, addToCart, product }) {
  return (
    <div className="h-60 w-50 bg-white p-2 rounded shadow-2xl m-4 flex flex-col hover:scale-105 cursor-pointer">
      <img className="h-[70%] w-full rounded" src={image} alt={title} />
      <h2 className="capitalize font-medium">{title}</h2>
      <p>Price {price}</p>
     
      <div className="flex justify-end">
        <button 
          className="bg-blue-950 text-white p-1 rounded hover:bg-black text-xs"
          onClick={() => addToCart(product)}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}
