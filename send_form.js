const forms = document.querySelectorAll("form");

function requestHandler(e){
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const request = new XMLHttpRequest();

  request.open("post", "../send.php");

  request.send(formData);
  
  $('input').val('');
  $('.modal_window').addClass('modal_window_active');
  // $("form#id_form").trigger('reset');
}

for(let i=0; i<forms.length; i++){
  forms[i].addEventListener("submit", requestHandler);
}