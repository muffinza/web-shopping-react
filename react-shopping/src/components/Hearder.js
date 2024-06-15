import "./Header.css"
import { useCart } from "../context/CartConText"
export default function Header(){
    const {amount} = useCart()
    return(
        <header>
            <p>ช้อป ช้อป</p>
            <p>สินค้าในตระก้า {amount}</p>
        </header>
    )
}