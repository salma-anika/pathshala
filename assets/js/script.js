//copy menu for mobile
function copyMenu(){
    //copy inside .dpt-cat to departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments ');
    dptPlace.innerHTML = dptCategory.innerHTML;

//copy inside nav to nav
var mainNav = document.querySelector('.header-nav nav');
var navPlace = document.querySelector('.off-canvas nav')
navPlace.innerHTML = mainNav.innerHTML;

//copy inside .header-top .wrapper to .thetop-nav
var topNav = document.querySelector('.header-top .wrapper');
var topPlace = document.querySelector('.off-canvas .thetop-nav')
topPlace.innerHTML = topNav.innerHTML;
}  
copyMenu(); 
//show mobile menu
const menuButton = document.querySelector('.trigger'),
 closeButton = document.querySelector('.t-close'),
 addclass = document.querySelector('.site');
 menuButton.addEventListener('click',function(){
    addclass.classList.toggle('showmenu')
 })
 closeButton.addEventListener('click',function(){
    addclass.classList.remove('showmenu')
 })
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu. forEach((menu) => menu.addEventListener('click',toggle));
function toggle(e){
    e.preventDefault();
    submenu.forEach((item) => (item != this ? item.closest('.has-child').classList.remove('expand') : null));
if (this.closest('.has-child').classList != 'expand') {
    this.closest('.has-child').classList.toggle('expand');
}

}
//slide
const swiper = new Swiper('.swiper', {
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },
  
  });
  //trending slider
  const initSlider = ()=>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".trending-container .slider-scrollbar");
   
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    slideButtons.forEach(button =>{
        button.addEventListener("click", () =>{
            const direction = button.id === "prev-slide"?-1:1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        });
    });
    const handleSlideButtons = () =>{
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }
 imageList.addEventListener("scroll", ()=>{
    handleSlideButtons();
 })
  }
  window.addEventListener("load", initSlider);