const nav = document.querySelector(".header__mobilenav");
const navBtn = document.querySelector(".header__navbar-menu--icon");
const navBtnClose = document.querySelector(".header__mobilenav-icon")

const handlenav = () => {
	nav.classList.toggle("header__mobilenav--active");
};

navBtn.addEventListener("click", handlenav);
navBtnClose.addEventListener("click", handlenav);


const features = document.querySelector(".header__mobilenav-dropdown");
const featuresBtn = document.querySelector(".header__mobilenav-item");
const company = document.querySelector(".header__mobilenav-dropdown2")
const companyBtn = document.querySelector(".header__mobilenav-item2");

const dropdown = () =>{
	features.classList.toggle("header__mobilenav-dropdown--open");
	
};

const dropdown2 = () =>{
	company.classList.toggle("header__mobilenav-dropdown2--open");
	
};

featuresBtn.addEventListener("click", dropdown);
companyBtn.addEventListener("click", dropdown2);

const featuresDp = document.querySelector(".header__desktopnav-item--dropdown1");
const dpBtn1 = document.querySelector(".header__desktopnav-item1");
const companyDp = document.querySelector(".header__desktopnav-item--dropdown2");
const dpBtn2 = document.querySelector(".header__desktopnav-item2");
const arrow1 = document.querySelector(".arrow1");
const arrow2 = document.querySelector(".arrow2");

let currentImageIndex = 0;
const dropdownDesktop1 = () =>{
	featuresDp.classList.toggle("header__desktopnav-item--dropdown1-open");
	arrow1.classList.toggle("arrow1-rotate");
	
};

const dropdownDesktop2 = () =>{
	companyDp.classList.toggle("header__desktopnav-item--dropdown2-open");
	arrow2.classList.toggle("arrow2-rotate");
};


dpBtn1.addEventListener("click", dropdownDesktop1);
dpBtn2.addEventListener("click", dropdownDesktop2);