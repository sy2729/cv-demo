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
for(let i = 0; i < siteHrefs.length; i++) {
    siteHrefs[i].onclick = function(e) {
        var href = e.currentTarget.getAttribute('href');
        var targetedEl = document.querySelector(href);
        var elDistance = targetedEl.offsetTop
        window.scrollTo(0, elDistance - 100);
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