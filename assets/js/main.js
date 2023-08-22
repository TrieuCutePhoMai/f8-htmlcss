const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const option = $$(".header__navbar-item")
const modal = $(".modal");
const form = $$(".auth-form");
const nextForm = $$(".auth-form__header-right");
const exitForm = $$(".auth-form__controls .btn.auth-form__control--back");
const textExit = exitForm[0].innerText;
const input = $(".header__search-input");
const historySearch = $(".header__seach-history");
document.addEventListener('click',function(e) {
    e.stopPropagation();
    if(e.target.closest(".header")) {
        if(e.target.innerText ===`Đăng kí`&& e.target.closest('.header')) {
            modal.classList.add("activeModal");
            form[0].classList.add("activeRes");
            
        } 
    
        if(e.target.innerText===`Đăng nhập`&& e.target.closest('.header')) {
            modal.classList.add("activeModal");
            form[1].classList.add("activeLogin");
           
        }

        if(e.target.closest(".header__form")) {
            if(e.target===input) {
                historySearch.style.display = `block`;
            }

            if(e.target.closest(".header__seach-history")) {
                historySearch.onmousedown = function(event) {
                    event.stopPropagation();
                }
            }
        } 
    }
    

    if(e.target.closest(".modal")) {
        if(e.target.innerText === textExit) {
            modal.classList.remove("activeModal");
            form[0].classList.remove("activeRes");
            form[1].classList.remove("activeLogin");
        }

        if(e.target === nextForm[0] ) {
            form[0].classList.remove("activeRes");
            form[1].classList.add("activeLogin");
        }

        if(e.target === nextForm[1] ) {
            form[0].classList.add("activeRes");
            form[1].classList.remove("activeLogin");
        }

        if(!e.target.closest(".madal__body")) {
            modal.classList.remove("activeModal");
            form[0].classList.remove("activeRes");
            form[1].classList.remove("activeLogin");
        }
    }

    if(!e.target.closest(".header__form")) {
        historySearch.style.display = `none`;
    }
    
})

function removeDOM(event) {
    event.stopPropagation();
}
