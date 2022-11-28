'use strict'

// Передача родительского элемента в модуль через замыкания в JavaScript
/* Пусть у нас есть следующие элементы:

<div id="div1">1</div>
<div id="div2">2</div>
<div id="div3">3</div>
<div id="res"></div>

<button id="btn">click me</button>
Пусть с этими элементами работает следующий модуль:

;(function(selector1, selector2, selector3, selector4, selector5) {
	let div1 = document.querySelector(selector1);
	let div2 = document.querySelector(selector2);
	let div3 = document.querySelector(selector3);
	let res  = document.querySelector(selector4);
	let btn  = document.querySelector(selector5);
	
	btn.addEventListener('click', function() {
		let num1 = Number(div1.textContent);
		let num2 = Number(div2.textContent);
		let num3 = Number(div3.textContent);
		
		res.textContent = num1 + num2 + num3;
	});
})('#div1', '#div2', '#div3', '#res', '#btn');
Как вы видите, количество передаваемых в модуль параметров несколько великовато и создает неудобства. Обычно в этом случае поступают следующим образом: передают в модуль общего родителя всех элементов, с которыми работает наш модуль, а уже внутри модуля получают из этого родителя различные элементы.

Давайте сделаем нашим тегам общего родителя:

<div id="parent">
	<div id="div1">1</div>
	<div id="div2">2</div>
	<div id="div3">3</div>
	<div id="res"></div>
	
	<button id="btn">click me</button>
</div>
Переделаем теперь код модуля:

;(function(root) {
	let parent = document.querySelector(root);
	
	let div1 = parent.querySelector('#div1');
	let div2 = parent.querySelector('#div2');
	let div3 = parent.querySelector('#div3');
	
	let res  = parent.querySelector('#res');
	let btn  = parent.querySelector('#btn');
	
	btn.addEventListener('click', function() {
		let num1 = Number(div1.textContent);
		let num2 = Number(div2.textContent);
		let num3 = Number(div3.textContent);
		
		res.textContent = num1 + num2 + num3;
	});
})('#parent');
Таким образом получится, что родительский элемент мы передаем в модуль снаружи и легко можем его поменять. А дочерние элементы являются внутренним делом модуля. */