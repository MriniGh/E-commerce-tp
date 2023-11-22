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