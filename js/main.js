let topBtn = document.querySelector('.top-btn');


topBtn.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    }
    )
})
window.onscroll = ()=>{
    scroll()
}
function scroll(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop >20){
        topBtn.style.opacity = "1"
    }
    else{
        topBtn.style.opacity = "0"
    }
}