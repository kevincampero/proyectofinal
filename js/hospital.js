//menu lateral boton
const btn=document.querySelector('#menu-btn')
const menu= document.querySelector('#sidemenu');
if(screen.width>600)
{
    
btn.addEventListener('click', e =>{
menu.classList.toggle("menu-expanded");
menu.classList.toggle("menu-collapsed");
document.querySelector('body').classList.toggle("body-expanded");

});
}
else
{
    btn.addEventListener('click', e =>{
    alert("se abre solo en dispositivos con resolucion mayor a 600px")
    });
}



function mostrar(numapa)
{
    
    let element = document.getElementById(numapa);
    let elementStyle = window.getComputedStyle(element);
    let elementDisplay = elementStyle.getPropertyValue('display');
    if(elementDisplay=='none')
    {
        document.getElementById(numapa).style.display="block";
        
        
    }
    else
    {
        document.getElementById(numapa).style.display="none";
        
    }

}

