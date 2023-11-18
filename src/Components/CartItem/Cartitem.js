import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { updateQuantity, removeItem } from "../redux/slice/cartSlice";
import "./Cartitem.css";

export default function CartItem({ props }) {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(props?.quantity);
  const [totalPrice, setTotalPrice] = useState(+props?.price * +props?.quantity);

  const handleChange = (e) => {
    const value = parseInt(e.target.value) > 0 ? parseInt(e.target.value) : 1;
    setQuantity(value);
  };

  const handleRemove = () => {
    dispatch(removeItem({ id: props?.id }));
  };

  useEffect(() => {
    setTotalPrice(props?.price * quantity);
    dispatch(updateQuantity({ id: props?.id, quantity }));
  }, [quantity, props?.price, props?.id, dispatch]);

  return (
    <tr className="inside-cart-card">
      <td style={{ maxWidth: 450, textAlign: "left" }}>
        <div className="img-card d-flex align-items-center">
          <img src={props.img} alt="" className="item-img" />
          <p className="cart-item-name">{props.name}</p>
        </div>
      </td>
      <td className="item-price">{props.price}$</td>
      <td className="increase">
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="changeBtn"
            onClick={() => {
              if (quantity > 1) {
                setQuantity((pre) => pre - 1);
              }
            }}
          >
            -
          </button>
          <input
            type="number"
            value={quantity}
            className="input"
            onChange={handleChange}
          />
          <button
            className="changeBtn"
            onClick={() => setQuantity((pre) => pre + 1)}
          >
            +
          </button>
        </div>
      </td>
      <td className="price" style={{ fontWeight: "bold" }}>
        {totalPrice}$
      </td>
      <td className="del">
        <Button variant="danger" onClick={handleRemove}>
          <FaTrashAlt />
        </Button>
      </td>
    </tr>
  );
}
