import { createSlice } from "@reduxjs/toolkit"

const state = {
  items: [
    {
      id: 1,
      category: "books",
      name: "Psychology",
      price: 300,
      photo: "https://m.media-amazon.com/images/I/510nEVlK9jL._AC_SY780_.jpg",
    },
    {
      id: 2,
      category: "books",
      name: "Politics",
      price: 50,
      photo: "https://images.booksense.com/images/905/473/9781465473905.jpg",
    },
    {
      id: 3,
      category: "books",
      name: "Science",
      price: 250,
      photo: "https://images.booksense.com/images/651/419/9781465419651.jpg",
    },
    {
      id: 4,
      category: "books",
      name: "Biology",
      price: 400,
      photo: "https://images.booksense.com/images/389/027/9780744027389.jpg",
    },
    {
      id: 5,
      category: "books",
      name: "Black History",
      price: 600,
      photo: "https://images.booksense.com/images/146/042/9780744042146.jpg",
    },
    {
      id: 6,
      category: "books",
      name: "Classical Music",
      price: 150,
      photo: "https://images.booksense.com/images/424/473/9781465473424.jpg",
    },
    {
      id: 7,
      category: "books",
      name: "Philosophy",
      price: 80,
      photo: "https://images.booksense.com/images/617/668/9780756668617.jpg",
    },
    {
      id: 8,
      category: "books",
      name: "Literature",
      price: 60,
      photo: "https://images.booksense.com/images/015/491/9781465491015.jpg",
    },
    {
      id: 9,
      category: "books",
      name: "Math",
      price: 50,
      photo: "https://images.booksense.com/images/248/480/9781465480248.jpg",
    },
    {
      id: 10,
      category: "clothes",
      name: "Puma",
      price: 850,
      photo:
        "https://www.tradeinn.com/f/13701/137015570/puma-rs-x-reinvention-trainers.jpg",
    },
    {
      id: 11,
      category: "clothes",
      name: "Puma rs-x1",
      price: 360,
      photo: "https://m.media-amazon.com/images/I/81p+RazBT7L._AC_UY1000_.jpg",
    },
    {
      id: 12,
      category: "clothes",
      name: "Puma rs-x1",
      price: 150,
      photo: "https://m.media-amazon.com/images/I/81p+RazBT7L._AC_UY1000_.jpg",
    },
    {
      id: 13,
      category: "clothes",
      name: "Puma rs-x1",
      price: 625,
      photo: "https://m.media-amazon.com/images/I/71Vhhy6VmSL._AC_UY1000_.jpg",
    },
    {
      id: 14,
      category: "clothes",
      name: "Puma rs-x1",
      price: 400,
      photo:
        "https://images.stockx.com/images/Puma-RS-X-3-Mercedes-AMG-Petronas-Black.png?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1626898738&q=75",
    },
    {
      id: 15,
      category: "clothes",
      name: "Puma rs-x1",
      price: 520,
      photo:
        "https://cdn.runrepeat.com/i/puma/31533/puma-rs-x-reinvention-white-irish-green-369579-05-uomo-white-c276-main.jpg",
    },
    {
      id: 16,
      category: "clothes",
      name: "Mango Man",
      price: 860,
      photo:
        "https://i.pinimg.com/originals/cf/f8/ba/cff8ba555e336dbf7fcb2f2497a3340a.jpg",
    },
    {
      id: 17,
      category: "clothes",
      name: "Mango Man",
      price: 755,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxBHwbBC18OPzWRTfCLn01guAQ18_fU7Wmng&usqp=CAU",
    },
    {
      id: 18,
      category: "clothes",
      name: "Mango Man",
      price: 650,
      photo:
        "https://st.mngbcn.com/rcs/pics/static/T7/fotos/S20/77137658_01.jpg?ts=1603384588738&imwidth=412&imdensity=2",
    },
    {
      id: 19,
      category: "clothes",
      name: "Zara Man",
      price: 200,
      photo:
        "https://static.zara.net/photos///2022/I/0/2/p/6987/330/519/2/w/232/6987330519_2_1_1.jpg?ts=1658833492267",
    },
    {
      id: 20,
      category: "clothes",
      name: "Zara Man",
      price: 350,
      photo:
        "https://i.pinimg.com/736x/f6/7c/46/f67c46be3d8dba4b22ed426d668589d0--zara-united-kingdom-zara-united-states.jpg",
    },
    {
      id: 21,
      category: "clothes",
      name: "Zara Man",
      price: 500,
      photo:
        "https://i.pinimg.com/originals/f3/0b/e1/f30be15234ccfed93f74343e8338c4c3.jpg",
    },
    {
      id: 22,
      category: "tech",
      name: "Apple Macbook",
      price: 3650,
      photo:
        "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HA244?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1631831826000",
    },
    {
      id: 23,
      category: "tech",
      name: "Apple Macbook",
      price: 2500,
      photo:
        "https://media.croma.com/image/upload/v1664412955/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256605_0_elrzey.png",
    },
    {
      id: 24,
      category: "tech",
      name: "Apple Macbook",
      price: 2000,
      photo: "https://m.media-amazon.com/images/I/61NRYreJ2cL._AC_SL1500_.jpg",
    },
    {
      id: 25,
      category: "tech",
      name: "Apple Iphone",
      price: 1300,
      photo:
        "https://res.cloudinary.com/grover/image/upload/f_webp,q_auto/b_white,c_pad,dpr_2.0,h_500,w_520/f_auto,q_auto/v1649166329/c6ckx0oqsv4xbsaub5ex.png",
    },
    {
      id: 26,
      category: "tech",
      name: "Apple Iphone",
      price: 1200,
      photo: "https://m.media-amazon.com/images/I/61FZC+6hDFL.jpg",
    },
    {
      id: 27,
      category: "tech",
      name: "Sony headphones",
      price: 2000,
      photo: "https://m.media-amazon.com/images/I/41pJlddKb3L._AC_.jpg",
    },
    {
      id: 28,
      category: "tech",
      name: "Sony headphones",
      price: 2500,
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaEBzKNG4Nj0-OxAEGKO-c7Yp7jyL_WssOMA&usqp=CAU",
    },
    {
      id: 29,
      category: "tech",
      name: "Sony headphones",
      price: 3700,
      photo:
        "https://media.wired.com/photos/5f2b2e792f0075bf6e0a1de6/3:2/w_2400,h_1600,c_limit/Gear-Sony-WH-1000XM4-1-SOURCE-Sony.jpg",
    },
  ],
  limit: 4,
  currentFilter: "all",
  filters: ["all", "clothes", "tech", "books"],
}
const ProductsSlice = createSlice({
  name: "ProductsSlice",
  initialState: state,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload
    },
    setFilter: (state, action) => {
      state.currentFilter = action.payload
    },
  },
})
export const { setLimit, setFilter } = ProductsSlice.actions
export default ProductsSlice.reducer