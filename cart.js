function addToCart(name, price, image) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    image: image
  });

  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " added to cart");
}
