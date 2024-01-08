let categories = document.getElementById("categories");
console.log(categories.children.length);

let items = categories.querySelectorAll(".item");
items.forEach((item) => {
  let subtitle = item.querySelector("h2");
  let subtitleContent = item.querySelector("ul");
  console.log(subtitle.texContent);
  console.log(subtitleContent.children.length);
});
