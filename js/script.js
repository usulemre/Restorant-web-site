

window.addEventListener('load',function(){
    AOS.init();
})

/*--toogle-nav---*/

const navToogler = document.querySelector(".nav-toogler");
navToogler.addEventListener('click',toggleNav);

function toggleNav(){
    navToogler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

document.addEventListener('click',function(e){
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

window.addEventListener('scroll',function(){
  if(this.pageYOffset >60){
      document.querySelector(".header").classList.add("sticky");
  }else{
    document.querySelector(".header").classList.remove("sticky");
  }
});

const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener('click',function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute('data-target');
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        console.log(menuSection)
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
    }
})