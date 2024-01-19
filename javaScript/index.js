const elemento = {
    burger: document.getElementById('burger'),
    headerNav: document.getElementById('header-navId')
}




const abrirCerrar = () =>{
    elemento.burger.addEventListener('click', ()=>{
        elemento.headerNav.classList.toggle("header-nav-active");
        if(elemento.headerNav.classList.contains('header-nav-active')){
            elemento.burger.style.height = '20px';
            elemento.burger.style.width = '20px';
            elemento.burger.style.marginTop = '2px'
            elemento.burger.src = "./images/icon-close.svg";
            document.querySelector('body').style.overflow ="hidden" 
        }
        else{
            elemento.burger.src = "./images/icon-hamburger.svg";
            document.querySelector('body').style.overflow ='' 
        }
    })

}
abrirCerrar();
