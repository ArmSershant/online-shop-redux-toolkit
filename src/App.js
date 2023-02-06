import "./App.css"
import Products from "./features/Products/Products"
import Cart from "./features/Cart/Cart"

function App() {
  return (
    <div className="row">
      <Products />
      <Cart />
    </div>
  )
}
export default App