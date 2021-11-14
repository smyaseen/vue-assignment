import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Users from "../views/Users.vue";
import Dashboard from "../views/Dashboard.vue";
import ProductPage from "../views/ProductPage.vue";
import Cart from "../views/Cart.vue";

export default [
  { path: "/", component: Login },
  { path: "/signup", component: Signup },
  { path: "/users", component: Users },
  { path: "/dashboard", component: Dashboard },
  {
    path: "/product/:id",
    name: "product",
    component: ProductPage,
    props: true,
  },
  {
    name: "cart",
    path: "/cart",
    component: Cart,
    props: true,
  },
];
