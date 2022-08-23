const menuBtn = document.querySelector('.menu-btn');
const hamburger  = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const header = document.querySelector('.header');

let showMenu                = false;
let currentPrimaryColor     = '#272727';
let currentSecondaryColor   = '#00d5ff';

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => item.classList.add('open'));
        
        showMenu = true;
    }
    else{
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => item.classList.remove('open'));
        
        showMenu = false;
    }
}


function onMyFrameLoad() {
    document.querySelectorAll('.Esexse').forEach(item => item.classList.add('hide'));
  };

function changeColor(color){
    var colorValue = document.getElementById(color).value;

    if(color == 'primaryColor'){
        colorReplace(currentPrimaryColor, colorValue);
        currentPrimaryColor = colorValue;
    }
    else{
        colorReplace(currentSecondaryColor, colorValue);
        currentSecondaryColor = colorValue;
    }    
}

function colorReplace(findHexColor, replaceWith) {
    // Convert rgb color strings to hex
    // REF: https://stackoverflow.com/a/3627747/1938889
    function rgb2hex(rgb) {
        if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

        function hex(x) {
            return ("0" + parseInt(x).toString(16)).slice(-2);
        }
        return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
    }

    // Select and run a map function on every tag
    $('*').map(function(i, el) {
        // Get the computed styles of each tag
        var styles = window.getComputedStyle(el);

        // Go through each computed style and search for "color"
        Object.keys(styles).reduce(function(acc, k) {
            var name = styles[k];
            var value = styles.getPropertyValue(name);
            if (value !== null && name.indexOf("color") >= 0) {
                // Convert the rgb color to hex and compare with the target color
                if (value.indexOf("rgb(") >= 0 && rgb2hex(value) === findHexColor) {
                    // Replace the color on this found color attribute
                    $(el).css(name, replaceWith);
                }
            }
        });
    });
}


window.onscroll = function() {
    console.log('kensley');
    // pageYOffset or scrollY
    /*if (window.pageYOffset > 100) {
      navbar.classList.add('scrolled')
    } else {
      navbar.classList.remove('scrolled')
    }*/
  }