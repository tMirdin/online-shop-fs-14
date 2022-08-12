import React, { useContext, useEffect } from "react";
import { cartContext } from "../../context/CartContextProvider";
import "./Cart.css";

const Cart = () => {
  const { cart, getCarts, changeProductCount, deleteCartProduct } =
    useContext(cartContext);

  useEffect(() => {
    getCarts();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Фото</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма продукта</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((elem) => (
                <tr key={elem.item.id}>
                  <td>
                    <img src={elem.item.image} alt={elem.item.title} />
                  </td>
                  <td>{elem.item.title}</td>
                  <td>{elem.item.price}</td>
                  <td>
                    <input
                      min={1}
                      type="number"
                      value={elem.count}
                      onChange={(e) =>
                        changeProductCount(elem.item.id, e.target.value)
                      }
                    />
                  </td>
                  <td>{elem.subPrice}</td>
                  <td>
                    <button onClick={() => deleteCartProduct(elem.item.id)}>
                      Удалить
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Общая сумма: {cart.totalPrice}</h4>
          <button>Оформить заказ</button>
        </>
      ) : (
        <h2>...loading</h2>
      )}
    </div>
  );
};

export default Cart;
