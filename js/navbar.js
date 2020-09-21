(function () {
    //nav fixed top
    let nav = document.querySelector(".navbar");
    let navPosition = nav.offsetTop;
    console.log(navPosition);
    function scrollHandler() {
        if (window.scrollY >= navPosition) {
            //  fixed menu
            document.body.classList.add("fixedMenu");
            document.body.style.paddingTop = nav.offsetHeight + "px";
        } else {
            //  normal
            document.body.classList.remove("fixedMenu");
            document.body.style.paddingTop = "";
        }
    }
    window.addEventListener("scroll", scrollHandler);
    window.addEventListener("resize", () => {
        navPosition = nav.offsetTop;
    });
})();


//navbar hover
$('.dropdown-menu').mouseleave(function () {
    $(this).removeClass('show');
    $('.dropdown').removeClass('show');
})