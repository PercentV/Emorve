const products = document.getElementById("products");
const services = document.getElementById("services");

function ShowProducts() {
    const sub_menu_list = document.querySelector(".product-menu");
    sub_menu_list.classList.toggle("show");
}

function ShowServices() {
    const sub_menu_service = document.querySelector(".service-menu");
    sub_menu_service.classList.toggle("show");
}

products.addEventListener("click", ShowProducts);
services.addEventListener("click", ShowServices);

function MouseOverF() {
    products.addEventListener("mouseover", function() {
        const sub_menu = document.querySelector(".product-menu");
        if (!sub_menu.classList.contains("show")) {
            sub_menu.classList.add("show");
            document.querySelector(".service-menu").classList.remove("show");
        }
    });
    
    services.addEventListener("mouseover", function() {
        const sub_menu = document.querySelector(".service-menu");
        if (!sub_menu.classList.contains("show")) {
            sub_menu.classList.add("show");
            document.querySelector(".product-menu").classList.remove("show");
        }
    });
}

MouseOverF();

document.querySelector(".overlay").addEventListener("click", () => {
    document.querySelector(".nav-list_container").style.left = "-1000px";
    document.querySelector(".overlay").classList.add("hidden");
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        document.querySelector(".nav-list_container").style.left = "-1000px";
        document.querySelector(".overlay").classList.add("hidden");
    }
});

const navbarMenu = document.getElementById("menu-bar");
const navbarOverlay = document.querySelector(".overlay");

function Menus() {
    const menu_list = document.querySelector(".nav-list_container");
    menu_list.style.left = "0";
    navbarOverlay.classList.remove("hidden");
}
navbarMenu.addEventListener("click", Menus);

const close_menus = document.querySelector(".close-menu");

function CloseMenus() {
    const menu = document.querySelector(".nav-list_container");
    menu.style.left = "-1000px";
    navbarOverlay.classList.add("hidden");
}

close_menus.addEventListener("click", CloseMenus);
