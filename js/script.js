
function eventFunction() { 

    document.getElementById("Anum").innerText = 36 ;
    document.getElementById("Lnum").innerText = 1400;
    document.getElementById("Cpark").innerText = 560;
    document.getElementById("Hcus").innerText = 2100;



}

//document.getElementById("appril").innerText = 17 + " April";


$(document).ready(function () {
    

    $("#navIcon").click(function(){
        
        
        $("#navBar").slideToggle();

    
    
    })

    $("#cancel").click(function () {
        $("#navBar").addClass('.navClose');
    
    })
/*========Aos Intallation===========*/
    AOS.init();
    
    
})
    