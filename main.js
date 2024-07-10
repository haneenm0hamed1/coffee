const swiper = new Swiper('.js-slider', {
    grabCursor:true,
    spaceBetween:30,
    pagination:{
        el:'.js-test-pagination',
        clickable:true
    },
    breakpoints:{
        767:{
          slidesPerView: 3
        }
    }
})  
// to top
const Totop= document.querySelector('.to-top');
window.addEventListener('scroll',function(){
    if(this.window.scrollY > 100){
        Totop.classList.add('active')
        window.scrollTo('smooth')
    } else{
        Totop.classList.remove('active')
        window.scrollTo('smooth')

    }
})
