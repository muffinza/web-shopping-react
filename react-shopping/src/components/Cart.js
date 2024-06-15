import Item from "./Item";
import { useCart } from "../context/CartConText";
export default function Cart() {
  const { products ,total,formatMoney } = useCart();
  return (
    <div>
        <h1 style={{textAlign:"center"}}>ยอดรวม {formatMoney(total)}</h1>
      {products.map((e) => (
        <Item key={e.id} {...e} />
      ))}
    </div>
  );
}
