$(window).on("scroll", () =>{
     if ($(window).scrollTop() > 0) {
        $(".nav-bar").addClass("bottom-border");
    } else {
        $(".nav-bar").removeClass("bottom-border");
    }
})