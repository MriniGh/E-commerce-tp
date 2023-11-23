  document.getElementById('select').addEventListener('click', function () {
    var selectedCategory = this.value;
    var boxes = document.querySelectorAll('.box-div');

    boxes.forEach(function (box) {
      var boxCategory = box.getAttribute('data-category');
      if (selectedCategory === 'Choose...' || selectedCategory === boxCategory) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  });


  
  document.addEventListener("DOMContentLoaded", function() {
    var number = document.getElementById('number');
  
    if (number.innerHTML.trim() === "") {
      number.style.display = 'none';
    }
  });



  function addToCart(buttonElement) {
    var boxElement = buttonElement.closest('.box-div');

    var productName = boxElement.querySelector('.detail-box h6:first-child').innerText.trim();
    var price = boxElement.querySelector('.detail-box h6:last-child span').innerText.trim().substring(1);
    var ImgSrc = boxElement.querySelector('.img-box img').getAttribute('src') ;
  

    var cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.push({ productName: productName, price: price ,img :ImgSrc});

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    alert('Product added to cart!');
}