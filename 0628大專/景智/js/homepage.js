// 抓取HTML裡面所有元素
document.addEventListener("DOMContentLoaded", function () {

    // ============== header JS效果 =============== 
    //JS
    // 宣告並設定目標為整個header
    const nav = document.querySelector(".header");

    // 宣告並設定要變化的目標
    // 抓取.header-button 中所有 a標籤
    // navword   css顏色變化
    // navword2  hover時顏色變化
    const navword = document.querySelectorAll(".header a");
    const navword2 = document.querySelectorAll(".header a");


    // 測試有沒有抓到監聽
    // console.log('.header>a');

    // 監聽scroll事件
    document.addEventListener('scroll', function () {

        if (window.scrollY > 0) {
            nav.setAttribute("style", "background-color:white;transition: 0.8s")
            // nav.setAttribute("style","background-color:white")

            navword.forEach(value => value.classList.add('changeColor-hover'))
            navword2.forEach(value => value.classList.add('changeColor'))


            // 修改按鈕文字顏色
            // navbutton.style.color = "black";

        } else {
            nav.setAttribute("style", "background-color:transparent;transition: 0.8s")
            // nav.setAttribute("style","background-color:transparent")

            navword.forEach(value => value.classList.remove('changeColor-hover'))
            navword2.forEach(value => value.classList.remove('changeColor'))


            // 修改按鈕文字顏色
            // navbutton.style.color = "white";

        }

    });

    // ================== 輪撥JS ==================
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 6000);
    }

    // =================== 主頁2 熱門活動 ===================
    const outdoor2box1 = document.getElementsByClassName("outdoor2box1");
    // const more1 = document.getElementsByClassName("second");
    outdoor2box1[0].addEventListener('mouseout', function () {
        // console.log(outdoor2box1);
        this.style.zIndex = 1;
        setTimeout(() => {
            this.style.zIndex = "";
        }, 1800);
    });
   
});



