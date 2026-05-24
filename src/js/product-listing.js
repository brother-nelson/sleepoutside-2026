import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter, getParam } from "./utils.mjs";

loadHeaderFooter();

const category = getParam("category");

document.getElementById("product-category").innerHTML = category.replace(
  "-",
  " ",
);

const dataSource = new ProductData();
const productList = new ProductList(
  category,
  dataSource,
  document.querySelector(".product-list"),
);
productList.init();
