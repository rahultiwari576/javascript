console.log('ClassList in Javascript');

// Tasks to be done

/*
1. priority for new class when classList applied
without space selector 
2. flow of code when same code is type which get first priority
specific selector priority .header.sticky and .sticky
3. .header.sticky is in same class  that is why we did'nt use space in it make notes in css file in selectors
 */
window.addEventListener('click', click)

function click() {
    var header_navbar = document.querySelector(".header");
    // Here distance from top is "0" as we know offsettop caluculates the distance far from top
    var sticky = header_navbar.offsetTop;

    // So in condition we are saying that when the scrollbar position value becomes greater than the offsetTop add the sticky class list and if not remove the class list "active"
    console.log(window.pageYOffset + " PageYOffset");
    console.log(sticky + " offsetTop");
    if (window.pageYOffset > sticky) {
        header_navbar.classList.add("sticky");
    } else {
        header_navbar.classList.remove("sticky");
    }

};