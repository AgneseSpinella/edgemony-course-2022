
import { API } from "./utils.js";
import { List } from "./list.js";
import { add } from "./add.js";


document.addEventListener("DOMContentLoaded", () => {
 fetch(API)
    .then((response) => response.json())
    .then((data) => List(data));
      
  const btn = document.querySelector("#add");
  btn.addEventListener("click", add);
});
  
/*  */


