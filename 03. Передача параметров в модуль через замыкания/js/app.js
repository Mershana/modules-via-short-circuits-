"use strict";

// Передача параметров в модуль через замыкания в JavaScript

/* №1⊗jsPmMClPP
Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля. */
/* ;(function (input, buttons) {
  let inputs = document.querySelectorAll(input);
  let btn = document.querySelector(buttons);

  function func(num) {
    return +num + +num + +num;
  }

  btn.addEventListener("click", function () {
    for (let elem of inputs) {
      console.log(func(elem.value));
    }
  });
})("input", "#btn");
 */

;(function (selector1, selector2, selector3, buttons) {
  let input1 = document.querySelector(selector1);
  let input2 = document.querySelector(selector2);
  let input3 = document.querySelector(selector3);
  let btn = document.querySelector(buttons);

  function func(num) {
    return +num + +num + +num;
  }

  btn.addEventListener("click", function () {
    console.log(func(input1.value, input2.value, input3.value));
  });
})("#input1", "#input2", "#input3", "#btn");
