let slideNumber = 1;
displaySlides(slideNumber);


function addSlides(n){
    displaySlides(slideNumber +=n)

}


function mainSlide(n){
    displaySlides(slideNumber=n)
}

function displaySlides(n){
    let i;
    let
    slide = document.getElementsByClassName('image')
    let thumb = document.getElementsByClassName('dot')

    if (n> slide.length){
        slideNumber=1
    }
    if (n<1){
        slideNumber=slide.length
    }

    for (i=0; i<slide.length; i++){
        slide[i].style.display='none'
    }
    
    for (i=0; i<thumb.length; i++){
        thumb[i].className= thumb[i].className.replace('active','')
    }

    slide[slideNumber-1].style.display='block';
    
}


function openModal(){
    document.getElementById('myModal').style.display='block'
    
}

function closeModal(){
    document.getElementById('myModal').style.display='none'
}

var slideIndex =1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n)
}

function currentSlide(n){
    showSlides(slideIndex =n)
}
var i;
function showSlides(n){
    
    let slides = document.getElementsByClassName('mySlides')
    
    let dots = document.getElementsByClassName('demo')

    if (n>slides.length){slideIndex=1}
    if (n<1){slideIndex=slides.length}

    for (i=0;  i<slides.length; i++){
        slides[i].style.display='none'
    }
    for (i=0;  i<dots.length; i++){
        dots[i].className.replace('active', '')

    }
    slides[slideIndex-1].style.display='block'

}
function add(){
    var value = parseInt(document.querySelector('.counter').innerHTML,10)
    value = isNaN(value) ? 0 : value
    value++
    document.querySelector('.counter').innerHTML = value
}

function minus(){
    var value = parseInt(document.querySelector('.counter').innerHTML,10)
    value = isNaN(value<10) ? value : value
    --value
    document.querySelector('.counter').innerHTML = value
}

function addCart(){
    var element = document.querySelector('.counter').innerHTML
    var x = document.getElementById('empty-card')
    var y = document.getElementById('filled-card')

    total = 125 * element
    
    if  ( element <1 && x.style.display === 'none' ){
        x.style.display = 'block'
    }else{
        x.style.display = 'none'
    }

    
    if  ( element >0 && y.style.display === 'none' ){
        y.style.display = 'block'
    }else{
        y.style.display = 'none'
    }
    document.querySelector('.number').innerHTML = element
    document.querySelector('.init').innerHTML = '$' + total

   if(element>0){
    document.querySelector('.colour-dot').innerHTML=element
    document.querySelector('.colour-dot').style.display = 'block'
   }else{
    document.querySelector('.colour-dot').style.display = 'none'
   }

}

function deleteCart(){
    document.getElementById('filled-card').style.display = 'none'
    document.querySelector('.counter').innerHTML = 0
    document.querySelector('.colour-dot').style.display = 'none'
}

function checkout(){
    deleteCart();
    console.log('a')
}

function openCard(){
    a=document.querySelector('.counter').innerHTML
    r=document.getElementById('filled-card')
    t=document.getElementById('empty-card')
    if  ( a > 0 && r.style.display === 'none' ){
        r.style.display = 'block'
    }else{
        r.style.display = 'none'
    }

    if  ( a <1 && t.style.display === 'none' ){
        t.style.display = 'block'
    }else{
        t.style.display = 'none'
    }
    
}

function popIn(x){
    x.style.display = 'block'
}

function popOut(x){
    x.style.display = 'none'
}

function menu(){
    document.querySelector('.navigation').style.display = 'block'
}

function remove(){
    document.querySelector('.navigation').style.display = 'none'
}

