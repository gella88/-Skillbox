// BURGER-MENU
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
        document.querySelector('#header_nav').classList.add('header_nav_active')
    })
});
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger_active').addEventListener('click', function() {
        document.querySelector('#header_nav').classList.remove('header_nav_active')
    })
});

// SEARCH - FORM

document.querySelector(".btn_search").addEventListener("click", function() {
    document.querySelector(".nav_form").classList.add('nav_form_active');
    this.classList.add("active");
})

document.querySelector(".search_x").addEventListener("click", function() {
    document.querySelector(".nav_form").classList.remove('nav_form_active');
    this.classList.remove("active");
})

window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search_x').addEventListener('click', function() {
        document.querySelector(".btn_search").classList.remove("active")
    })
});


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
        document.querySelector('#nav_form').classList.add('nav_form_active')
    })
});
window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search_x').addEventListener('click', function() {
        document.querySelector('#nav_form').classList.remove('nav_form_active')
    })
});



// DROPDOWN MENU - SECOND NAVIGATION
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".list--item__btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".container--dropdown");

            document.querySelectorAll(".list--item__btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".container--dropdown").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-list--item");
                }
            })
            dropdown.classList.toggle("active-list--item");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".list")) {
            document.querySelectorAll(".container--dropdown").forEach(el => {
                el.classList.remove("active-list--item");
            })
            document.querySelectorAll(".list--item__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    })
})


new SimpleBar(document.querySelector(".simplebar"), {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 28,
});


// Swiper HERO-BLOCK
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        speed: 1500,
        loop: true,
        effect: 'fade',
        autoplay: {
            delay: 2000
        },
    });
});

// Swiper GALLERY 
document.addEventListener("DOMContentLoaded", function() {

    let gallerySlider = new Swiper(".swiper-right--content", {
        speed: 2000,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
            rows: 1
        },
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination--right",
            type: "fraction"
        },
        navigation: {
            nextEl: ".swiper-btn--next",
            prevEl: ".swiper-btn--prev"
        },

        breakpoints: {
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1
                },
                spaceBetween: 0
            },
            576: {
                slidesPerView: 2,
                grid: {
                    rows: 1
                },
                spaceBetween: 30
            },

            1200: {
                slidesPerView: 3,
                grid: {
                    rows: 1
                },
                spaceBetween: 50
            }
        },

        a11y: {
            prevSlideMessage: 'Предыдущий',
            nextSlideMessage: 'Следующий',
        }

        // on: {
        //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
        //   beforeResize: function () {
        //     this.slides.forEach((el) => {
        //       el.style.marginTop = "";
        //     });
        //   }
        // }
    });



    const selector = document.querySelector(".select")

    const choices = new Choices(selector, {
        searchEnabled: false,
        classNames: {
            containerOuter: 'choices',
        },

    });
    let arr = [];
    selector.addEventListener("change", function(event) {
        // document.querySelectorAll(`.swiper-slide[data-tab=${event.detail.value}]`).forEach(item => {
        //   arr.push(item);
        // });
        // console.log(arr);
        document.querySelectorAll(".swiper-slide").forEach((item, index) => {
                console.log(index)
                gallerySlider.removeSlide(index)
            })
            // arr.forEach((el, index) => {
            //   gallerySlider.addSlide(index, el)
            // })
    });

});

// ACCODION 

$(function() {
    $("#accordion").accordion({
        icons: false,
        heightStyle: "content",
        collapsible: true,
        active: false
    });
});

$(function() {
    $(".ac--list").accordion({
        icons: false,
        heightStyle: "content",
    });
    document.querySelectorAll(".heading-item--btn").forEach(item => {
        item.addEventListener("click", function(e) {
            $(".ac--list").accordion({
                icons: false,
                heightStyle: "content",
                collapsible: true,
                active: false
            });
            let path = e.currentTarget.dataset.path;
            document.querySelectorAll(".tab-content").forEach(el => {
                el.classList.remove("tab-active");
            });
            document.querySelectorAll(".heading-item--btn").forEach(el => {
                el.classList.remove("btn-active");
            });
            document.querySelector(`[data-target='${path}']`).classList.add("tab-active")
            this.classList.add("btn-active");
        })
    })

    $(function() {
        $(".ac--list").accordion({
            icons: false,
            heightStyle: "content",
        });
        document.querySelectorAll(".heading-item--btn").forEach(item => {
            item.addEventListener("click", function(e) {
                $(".ac--list").accordion({
                    icons: false,
                    heightStyle: "content",
                    collapsible: true,
                    active: false
                });
                let path = e.currentTarget.dataset.path;
                document.querySelectorAll(".tab-content").forEach(el => {
                    el.classList.remove("tab-active");
                });
                document.querySelectorAll(".heading-item--btn").forEach(el => {
                    el.classList.remove("btn-active");
                });
                document.querySelector(`[data-target='${path}']`).classList.add("tab-active")
                this.classList.add("btn-active");
            })
        })

        document.querySelectorAll(".tab-content").forEach(item => {
            // let btns = item.find(".ac--list__iten-tab");
            let btns = item.querySelectorAll(".ac--list__iten-tab");
            let articles = item.querySelectorAll(".article-content");
            btns.forEach(el => {
                el.addEventListener("click", function(e) {
                    let path = e.currentTarget.dataset.path;
                    let tabCont = item.querySelector(`[data-target='${path}']`);
                    console.log(tabCont)
                    articles.forEach(el => {
                        el.classList.remove("article-tabActive")
                    })
                    btns.forEach(el => {
                        el.classList.remove("article-btn-active")
                    })
                    tabCont.classList.add("article-tabActive")
                    this.classList.add("article-btn-active");
                })
            })

        })
    });


});

// EVENT CARDS SWIPER

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-event-container', {
        speed: 500,
        loop: true,
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-event-next",
            prevEl: ".swiper-button-prev"
        },
    });
});

// tooltips

tippy('#tool-one', {
    content: 'Пример современных тенденций - современная методология разработки',
    theme: 'blanch'
});

tippy('#tool-two', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
    theme: 'blanch'
});

tippy('#tool-three', {
    content: 'В стремлении повысить качество',
    theme: 'blanch'
});

// PROJECTS SWIPER
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-projects', {
        speed: 500,
        loop: true,
        slidesPerView: 3,


        spaceBetween: 50,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2"
        },
    });
});