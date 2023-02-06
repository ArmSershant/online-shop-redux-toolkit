import styles from "./style.module.css"
import { useDispatch, useSelector } from "react-redux"
import { setLimit, setFilter } from "./Products.slice"
import { moveToCart } from "../Cart/Cart.slice"

const Products = () => {
  const currentFilter = useSelector((state) => state.products.currentFilter)
  const filters = useSelector((state) => state.products.filters)
  const items = useSelector((state) => {
    switch (currentFilter) {
      case "all":
        return state.products.items
      default:
        return state.products.items.filter(
          (elm) => elm.category === currentFilter
        )
    }
  })
  const limit = useSelector((state) => state.products.limit)
  const dispatch = useDispatch()
  return (
    <div className="col-md-7">
      <h1>Products</h1>
      <div className={styles.buttonDiv}>
        <button
          onClick={() => dispatch(setLimit(6))}
          className={styles.limitBtn}
        >
          2x
        </button>
        <button
          onClick={() => dispatch(setLimit(4))}
          className={styles.limitBtn}
        >
          3x
        </button>
        <button
          onClick={() => dispatch(setLimit(3))}
          className={styles.limitBtn}
        >
          4x
        </button>
      </div>
      <div className={styles.buttonDiv}>
        {filters.map((elm, i) => {
          return (
            <button
              onClick={() => dispatch(setFilter(elm))}
              key={i}
              className={styles.filterBtn}
            >
              {elm}
            </button>
          )
        })}
      </div>
      <div className="row">
        {items.map((elm) => {
          return (
            <div key={elm.id} className={"col-md-" + limit}>
              <div className={styles.prodDiv}>
                <p className={styles.name}>{elm.name}</p>
                <img src={elm.photo} alt="" className={styles.img} />
                <p className={styles.price}>${elm.price}</p>
                <button
                  onClick={() => dispatch(moveToCart(elm))}
                  className="btn btn-sm btn-primary"
                >
                  Add to cart
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Products
