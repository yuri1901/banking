"use strict";
function burger(item, art) {
    item.addEventListener("click", function () {
        return art.classList.toggle("active");
    });
}
const burgerBtn = document.querySelector("button.burger");
const navBurger = document.querySelector(".nav-burger");
burger(burgerBtn, navBurger);

function activeBtn(items, active) {
    items.forEach((item) => {
        item.addEventListener("click", () => {
            items.forEach((item) => item.classList.remove(active));
            item.classList.add(active);
        });
    });
}
const productsBtns = document.querySelectorAll(".tabs button");
activeBtn(productsBtns, "is-active");

const featuresBtns = document.querySelectorAll(
    ".features-tabs > .block button",
);
activeBtn(featuresBtns, "is-active");

function changeTabs(btns, tabs) {
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            tabs.forEach((tab) => tab.classList.remove("active"));
            tabs[i].classList.add("active");
        });
    });
}
const productsTabs = document.querySelectorAll(".products-info__tab");
changeTabs(productsBtns, productsTabs);

const featuresTabs = document.querySelectorAll(".features-info__tab");
changeTabs(featuresBtns, featuresTabs);

function activeAsked(btn, articles) {
    btn.addEventListener("click", () => {
        console.log("hello");
        articles.forEach((item) => {
            item.classList.add("is-active");
        });
    });
}

const askedBtn = document.querySelector(".asked-inner button");
const askedArticle = document.querySelectorAll(".asked-wrapper article");
activeAsked(askedBtn, askedArticle);
