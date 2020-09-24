
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

