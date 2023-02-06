import { useSelector, useDispatch } from "react-redux"
import { quantityUp, quantityDown, deleteItem } from "./Cart.slice"
import styles from "./style.module.css"

const Cart = () => {
  const dispatch = useDispatch()
  const addedItems = useSelector((state) => state.cart.items)
  const total = useSelector((state) =>
    state.cart.items.reduce((a, b) => a + b.price * b.quantity, 0)
  )
  return (
    <div className="col-md-5">
      <h1>Cart</h1>
      <div className="row">
        <p>Total: ${total}</p>
        <table className="table table-hover table-sm">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {addedItems.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                  <img className={styles.img} src={item.photo} alt="" />
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>{item.quantity}</td>
                  <td>${item.quantity * item.price}</td>
                  <td>
                    <button
                      onClick={() => dispatch(quantityUp(item))}
                      className="btn btn-sm btn-primary"
                    >
                      +
                    </button>
                    <button
                      onClick={() => dispatch(quantityDown(item))}
                      className="btn btn-sm btn-danger"
                    >
                      -
                    </button>
                    <button
                      onClick={() => dispatch(deleteItem(item))}
                      className="btn btn-sm btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Cart
