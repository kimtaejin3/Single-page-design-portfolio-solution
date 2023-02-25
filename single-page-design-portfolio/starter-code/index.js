const slide = document.querySelector('.slide');
const prevSlideBtn = document.querySelector('.navigation__btn.type_prev');
const nextSlideBtn = document.querySelector('.navigation__btn.type_next');
let slideX;

slide.style.transition = 'all .3s';


function changeSlidePositionX(){
    if(window.innerWidth < 698){
        console.log(slideX);
        if(slideX > 60){
            slideX -= 100;
            return;
        }
        else if(slideX<-1140){
            slideX += 100;
            return;
        }
    }
    else if(window.innerWidth < 850){
        console.log(slideX);
        if(slideX > 60){
            slideX -= 100;
            return;
        }
        else if(slideX<-2340){
            slideX += 100;
            return;
        }
    }
    else{
        console.log(slideX);
        if(slideX > 0){
            slideX -= 100;
            return;
        }
        else if(slideX<-1540){
            slideX += 100;
            return;
        }
    }
    
    slide.style.marginLeft = `${slideX}px`;
}

prevSlideBtn.addEventListener('click',()=>{
    slideX += 100;
    changeSlidePositionX();
});

nextSlideBtn.addEventListener('click',()=>{
    slideX -= 100;
    changeSlidePositionX();
});

visualViewport.addEventListener('resize', () => {
    if(window.innerWidth < 698){
        slideX = -450;
    }
    else if(window.innerWidth < 850){
        slideX = -1070;
    }
    else{
        slideX = -840;
    }
    slide.style.marginLeft = `${slideX}px`;
});

window.onload=()=>{
    if(window.innerWidth < 698){
        slideX = -450;
    }
    else if(window.innerWidth < 850){
        slideX = -1070;

    }
    else{
        slideX = -840;
    }
    slide.style.marginLeft = `${slideX}px`;
};