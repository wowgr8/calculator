// Business logic:

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}


// Everything below this line is user interface logic:

$(document).ready(function() {
  $("button#add-button").click(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = add(number1, number2);
      $("#output").text(result);
    });
  });

  $("button#subtract-button").click(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = subtract(number1, number2);
      $("#output").text(result);
    });
  });  
  
  $("button#multiply-button").click(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = multiply(number1, number2);
      $("#output").text(result);
    });
  });

  $("button#divide-button").click(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
      const number1 = parseInt($("#add1").val());
      const number2 = parseInt($("#add2").val());
      const result = divide(number1, number2);
      $("#output").text(result);
    });
  })
});