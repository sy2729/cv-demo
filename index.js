//loading animation
window.onload = function () {
    var loading = document.querySelector('.loadingWrapper');
    loading.classList.add('loaded');
    checkHeight();
}

//navbar sticking to the top
window.onscroll = function(e) {
    checkHeight();
}

var navs = document.querySelectorAll('.nav-sub li');


//hiding and showing submenu
for(let i = 0; i < navs.length; i++) {
    navs[i].onmouseenter = function (x) {
            var li = x.currentTarget;
            // while (subMenu.nodeType !== 1) {
            //     subMenu = subMenu.nextSibling
            li.classList.add('active')
        }
      
    navs[i].onmouseout = function (x) {
        navs[i].onmouseleave = function (x) {
            var li = x.currentTarget;
            li.classList.remove('active')
        }
    }
}
    

//in-page auto scrolling with js
var siteHrefs = document.querySelectorAll('.nav-sub li a');

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

for(let i = 0; i < siteHrefs.length; i++) {
    siteHrefs[i].onclick = function(e) {
        var href = e.currentTarget.getAttribute('href');
        var targetedEl = document.querySelector(href);
        let elementTop = targetedEl.offsetTop - 100;
        var distance = Math.abs(window.scrollY - elementTop);
        var time = Math.abs((distance / 100) * 200);
        if(time > 2000) {time = 2000};
        var coords = {y: window.scrollY }; // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ y: elementTop }, time) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onUpdate(function () {
                window.scrollTo(coords.x, coords.y)
            })
            .start(); 
//----------------------previous code ----------------------------creat animated scrolling with vallina js-----------
        // var elDistance = targetedEl.offsetTop
        // let n = 25;        //move times in total
        // let duration = 500/n         //the duration between each move
        // let currentTop = window.scrollY;
        // let elementTop = targetedEl.offsetTop - 100;
        // let distance = (elementTop - currentTop) / n;
        // let i = 0;
        // var id = setInterval(function () {
        //     console.log(distance)
        //     if (i < n) {
        //         i++;
        //         window.scrollTo(0, currentTop + distance * i)
        //     } else {
        //         window.clearInterval(id)
        //         return
        //     }
        // }, duration)
        // window.scrollTo(0, elDistance - 100);
//----------------------previous code ----------------------------creat animated scrolling with vallina js-----------
        e.preventDefault();
    }
}
















// common self-used API
var checkHeight = function () {
    var nav = document.querySelector('.top-nav');
    if (window.scrollY > 80) {
        nav.classList.add('navChange')
    } else {
        nav.classList.remove('navChange')
    }
}