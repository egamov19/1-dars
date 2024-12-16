function searchProducts() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const products = document.querySelectorAll(".wrapper__product");
  console.log(products);

  products.forEach((product) => {
    const productName = product
      .querySelector(".product-name")
      .textContent.toLowerCase();
    console.log(productName);

    console.log(searchInput);

    if (productName.includes(searchInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

searchProducts();
