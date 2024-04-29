$(document).ready(function(){
    $('.accordion-tab input[type="checkbox"]').change(function(){
        if($(this).is(":checked")) {
            $('.accordion-tab input[type="checkbox"]').not(this).prop('checked', false);
        }
    });
});

function toggleAccordion(index) {
    var buttons = document.querySelectorAll('.accordion-btn');
    buttons.forEach(function(button, i) {
      if (i === index) {
        button.classList.add('selected');
      } else {
        button.classList.remove('selected');
      }
    });
  
    var contents = document.querySelectorAll('.accordion-content1');
    contents.forEach(function(content, i) {
      if (i === index) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    });
  }
  
  