const burger = document.querySelector ('.burger');
const popup = document.querySelector ('.popup-menu');

burger.onclick = function () {
    burger .classList.toggle('active')
    popup .classList.toggle('active')
}