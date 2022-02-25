var headerBtn = document?.querySelectorAll(".header__descr");
for (i = 0; i < headerBtn.length; i++) {
    headerBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


let footerBtn = document?.querySelectorAll(".footer__sub-title");
for (i = 0; i < footerBtn.length; i++) {
    footerBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}