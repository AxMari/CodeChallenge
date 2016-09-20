function navFunction() {
    var nav = document.getElementById("menu");
    if (nav.className === "nav__menu") {
        nav.className += " responsive";
    } else {
        nav.className = "nav__menu";
    }
}