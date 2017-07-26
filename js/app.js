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


//////////////////////////////////////////
// VanilaJS

const btnContact = document.getElementById("navContact");
const btnContactClose = document.querySelector(".closeBtn");
const contactForm = document.querySelector(".contactForm");

btnContact.addEventListener("click", function(){
    document.body.classList.add("modalShowed");
},false);

btnContactClose.addEventListener("click", function(){
    document.body.classList.remove("modalShowed");
},false);

document.addEventListener('keyup', function( event ){
    if ( event.keyCode === 27){
        document.body.classList.remove("modalShowed");
    }
},false);


contactForm.addEventListener("submit", function( event ){

    const name = document.querySelector("#name");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const userQuestion = document.querySelector("#userQuestion");
    const btnsDiv = document.querySelector(".btnsDiv");

    const btnClose = document.querySelector(".closeBtn");

    let info = document.createElement('p');

    // btnClose.addEventListener("click", function (){
    //     name.value = "";
    //     lastname.value = "";
    //     email.value = "";
    //     userQuestion.value = "";
    //     contactForm.removeChild(info);
    // },false)

    contactForm.insertBefore(info, btnsDiv);

    if ( name.value.length < 3 ){
        event.preventDefault();
        info.classList.add('errorMessage');
        info.innerText = "Podane imię jest za krótkie";
        return;
    } else if ( lastname.value.length < 2 ){
        event.preventDefault();
        info.classList.add('errorMessage');
        info.innerText = "Podane Nazwisko jest za krótkie";
        return;
    } else if ( email.value.indexOf("@") === -1  && email.value.length < 3){
        event.preventDefault();
        info.classList.add('errorMessage');
        info.innerText = "Błędny adres emial";
        return;
    } else if ( userQuestion.value.length < 1 ){
        event.preventDefault();
        info.classList.add('errorMessage');
        info.innerText = "Podaj treść wiadomości";
        return;
    } else {
        event.preventDefault();
        //
        info.classList.add('correctMessage');
        info.innerText = "Wiadomość wysłana";
        setTimeout(function(){
            document.body.classList.remove("modalShowed");
        },1000);
        return;
    }

},false);
