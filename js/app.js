$(document).ready(function(){
    slider();
});

function slider(){
    let picture = $(".sliderPic");
    let button  = $(".sliderButton");

    picture.first().addClass("active");
    button.first().addClass("active");

    button.click(function(){
        let $this    = $(this);
        let $pic     = $this.parent().children();
        let position = $pic.index($this);

        button.removeClass("active").eq(position).addClass("active");
        picture.removeClass("active").eq(position).addClass("active");
    })
};

let intervalId = setInterval(function(){

        let picture = $(".sliderPic");
        let button  = $(".sliderButton");

        let nextItem = $(".sliderPic.active").fadeOut().removeClass("active").next(picture);
        nextItem.fadeIn().addClass("active");

        const index = picture.index(nextItem);
        button.removeClass("active").eq(index).addClass("active");

        if ( nextItem.length === 0 ) {
            nextItem = picture.first();
            button.removeClass("active").eq(0).addClass("active");
        }
        nextItem.fadeIn().addClass('active');

}, 5000);
