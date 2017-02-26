import createMenu from "../../components/menu/menu";
import "./index.scss";
import "normalize.css";

var menu = createMenu(["Main", "Blog"], "menu");
document.body.appendChild(menu);
console.log("in index.js");

console.log($);
console.log(jQuery);
