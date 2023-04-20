
let altura=window.pageYOffset
window.onscroll=function(){
    let deslocamento=window.pageYOffset
    if(altura>=deslocamento){
        document.getElementById("nav1").style.top="0"
        
    }else{
        document.getElementById("nav1").style.top="-100px"
        document.getElementById("menu-dropdown").classList.remove('clicado')
    }
    altura=deslocamento
}

function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup=document.getElementById('popup');
    popup.classList.toggle('active');
}

function menuShow(){
    let menu_icone=document.getElementById("menu-dropdown")
    if(menu_icone.classList.contains('clicado')){
        menu_icone.classList.remove('clicado')
    }else{
        menu_icone.classList.add('clicado')
    }
}