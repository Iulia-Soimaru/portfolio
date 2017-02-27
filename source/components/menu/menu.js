import "./menu.scss";

export default function (array) {
  var menu = document.createElement("ul");
  menu.className = "menu";
  var listItems = "";
  array.forEach(function(item) {
    listItems += "<li class='menu__item'>" + item + "</li>";
  });
  menu.innerHTML = listItems;
  return menu;
}