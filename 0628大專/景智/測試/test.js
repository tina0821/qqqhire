document.addEventListener("DOMContentLoaded", function () {
    // const first = document.getElementsByClassName("photo1");

    // first[0].addEventListener('mouseout', function () {
    photo3.addEventListener('mouseout', function () {
        // console.log(first);
        this.style.zIndex = 1;
        setTimeout(() => {
            this.style.zIndex = "";
        }, 1800);
    });
    word3.addEventListener('mouseover', function () {
       
        this.style.opacity = 0;
        // setTimeout(() => {
        //     this.style.opacity = "1";
        // }, 1800);
    });



})