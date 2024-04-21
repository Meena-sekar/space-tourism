const tabLinks = document.querySelectorAll('.nav-tabs .nav-link');
const activeImg = document.querySelector('.active .planet-img').cloneNode();
var tabContents =  document.querySelectorAll('.tab-content .tab-pane');
const arrayElems = [...tabContents];
const swapper = document.querySelectorAll('.split-half')[0];
swapper.appendChild(activeImg);

tabLinks.forEach(tabLink => tabLink.addEventListener('click', (e) => {
    arrayElems.forEach(arrayElem => {
        if(arrayElem.classList.contains('active')) {
            cloneElem = arrayElem.querySelector('.planet-img').cloneNode();
            appendTag = arrayElem.parentElement.previousElementSibling.parentElement.previousElementSibling;
            appendTag.appendChild(cloneElem);
            swapperLast = swapper.querySelector('.planet-img');
            swapper.replaceChild(cloneElem, swapperLast);
        }
    })
}));