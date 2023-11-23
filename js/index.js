  document.getElementById('select').addEventListener('click', function () {
    var selectedCategory = this.value;
    var boxes = document.querySelectorAll('.box-div');

    boxes.forEach(function (box) {
      var boxCategory = box.querySelector('.productCategory').value;
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



function renderProducts(products) {
  var productSection = document.getElementById('ProductSection');

  for (product of products) {

    var productCard = document.createElement('div');
    productCard.className = 'col-sm-6 col-md-4 col-lg-3 box-div';
    productCard.innerHTML = `
      <div class="box">
        <div class="img-box">
          <img src="${product.images[0]}" alt="${product.title}">
        </div>
        <div class="detail-box">
          <h6>${product.title}</h6>
          <h6>Price <span>${product.price}</span></h6>
        </div>
        <div class="new">
          <span>New</span>
        </div>
        <div class="add-to-cart">
          <button type="button" class="btn btn-success" onclick="addToCart(this)">
            Add to Cart
          </button>
        </div>

        <input type="hidden" class="productCategory" value="${product.category}">

      </div>
    `;

    productSection.appendChild(productCard);
  };
}


function rendercategories(categories) {
  var SelectList = document.getElementById('select');


  for (categorie of categories) {
    SelectList.innerHTML += `
    <option value="${categorie}">${categorie}</option>
    `;
  };
}





// fetch products from api
document.addEventListener('DOMContentLoaded', function () {
      fetch('https://dummyjson.com/products' ,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response=>{
        if(!response.ok){
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data =>{
        renderProducts(data.products);
      })
      .catch(error =>console.error('Fetch error:',error));
});


//fetch categories from api
document.addEventListener('DOMContentLoaded', function () {
  fetch('https://dummyjson.com/products/categories' ,{
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response=>{
    if(!response.ok){
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data =>{
    rendercategories(data)
  })
  .catch(error =>console.error('Fetch error:',error));
});


