$(document).ready(function(){
    slider();
});

function slider(){
    let picture = $(".sliderPic");
    let button = $(".sliderButton");

    picture.first().addClass("active");
    button.first().addClass("active");

    button.click(function(){
        let $this = $(this);
        let $pic = $this.parent().children();
        let position = $pic.index($this);

        button.removeClass("active").eq(position).addClass("active");
        picture.removeClass("active").eq(position).addClass("active");
    })
};
