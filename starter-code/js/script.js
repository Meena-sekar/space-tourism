const toggleBtn = document.querySelector('.toggler');
const menuPanel = document.querySelector('.menu-holder');

var screenWidth = window.innerWidth
const parentElems = document.querySelectorAll('.crew .carousel-item');

if(screenWidth >= 768 && screenWidth <= 1024) {
  parentElems.forEach(parentElem => {
    let newElem = parentElem.querySelector('.carousel-caption');
    parentElem.insertAdjacentElement('afterbegin', newElem);
  });
}

if(screenWidth >= 1280) {
  
  const activeElem = document.querySelector('.carousel-item.active .carousel-caption').cloneNode(true);
  var swapElem = document.getElementById('swapper');
  swapElem.appendChild(activeElem);
  
  const indicatorBtns = document.querySelectorAll('.carousel-indicators button');
  let indicatorWrapper = document.querySelector('.carousel-indicators');
  swapElem.appendChild(indicatorWrapper);
  indicatorBtns.forEach(indicatorBtn => indicatorBtn.addEventListener('click', () => {
    document.querySelector('.carousel-indicators .active').classList.remove('active');

    indicatorBtn.classList.add('active');                   
    let targetElems = document.querySelectorAll('.carousel-item');
    targetElems.forEach(targetElem => {
      if(targetElem.matches('.carousel-item-next.carousel-item-start, .carousel-item-prev.carousel-item-end')) {
        let captionItem = targetElem.querySelector('.carousel-caption').cloneNode(true);
        let swapElem = document.getElementById('swapper');
        let oldElem = swapElem.querySelector('.carousel-caption');
            swapElem.replaceChild(captionItem, oldElem);
      }
    })
  }));
}

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    if(toggleBtn.classList.contains('active')) {
        menuPanel.style.display = "block";
    }
    else {
        menuPanel.style.display = 'none';
    }
});

