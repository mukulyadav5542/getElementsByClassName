//  QUERYSELECTOR //

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

// QUERYSELECTORALL //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i=0; i<odd.length; i++) {
    odd[i].style.backgroundColor = 'green';
    even[i].style.backgroundColor = '#ccc';
}

var item = document.querySelectorAll('.list-group-item:[1]');
item.style.color = 'green';
