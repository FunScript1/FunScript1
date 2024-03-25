// let text = document.getElementById('text');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value)
    if (value<400){
    text.style.marginTop = value * 2.5 + 'px';
    }
});
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value>=0){
    more.style.opacity = 1-value*0.001*3.7313432835820895522388059701493;
    arrow.style.opacity = 1-value*0.001*3.7313432835820895522388059701493;
    }
});
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value>=700){
    more.style.display = 'none';
    arrow.style.display = 'none';
    } else {
    more.style.display = 'inline';
    arrow.style.display = 'inline';
    }
});
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    if (value>=740){
    more1.style.display = 'inline';
    space1.style.display = 'inline';
    } else {
     more1.style.display = 'none';
     space1.style.display = 'none';
    }
});
window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(1+((1100-value)*(0.01)));
    if (value>=1000){
    more1.style.opacity = 1+((1000-value)*(0.01));
    space1.style.opacity = 1+((1000-value)*(0.01));
    } else {
    more1.style.opacity = 1
    space1.style.opacity = 1
    }
});

// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     var element = document.getElementById("arrow")
//     var element1 = document.getElementById("more")
//     console.log(value)
//     if (value>=75){
//         element.classList.add("fade");
//         element1.classList.add("fade")
//     } else {
//         element.classList.remove("fade");
//         element1.classList.remove("fade")
//     }
// });
function toggleNavigation() {
    var navigation = document.getElementById('navigate');
    var toggleButton = document.getElementById('toggleButton');

    navigation.classList.toggle('hide');
    toggleButton.classList.toggle('active');
    // toggleButton.classList.toggle('hide')

}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};



// var parentElement = document.getElementById('navigation');

// parentElement.addEventListener('click', function(event) {

//     console.log('Button clicked:', event.target);
    
// });
// setActive(section){
//     document.getElementById('navigation').children.forEach(e => {
//         e.classList.remove('active')
//     });
// }




// document.addEventListener('DOMContentLoaded', function () {
//     var links = document.querySelectorAll('a[href^="#"]');

//     links.forEach(function (link) {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();

//             var targetId = this.getAttribute('href').substring(1);
//             var targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 var offsetTop = targetElement.offsetTop;

//                 window.scrollTo({
//                     top: offsetTop+1,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });
// });
