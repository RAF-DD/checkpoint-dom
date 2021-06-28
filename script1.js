function somme1(){
var somme = 0; 
var listvaleurs=document.querySelectorAll('h2');
var listquant=document.querySelectorAll('input'); 
for (let i = 0; i < listvaleurs.length; i++){
  
    somme = somme + (listvaleurs[i].textContent*listquant[i].value);
    
    }
    document.getElementById("totalep").value = somme + '  dt'; 
    
    
}

    
function changecolor() {
var elem = document.getElementById('coeur');

// Appling styles on element
elem.classList.toggle("color");

}


var prievar = document.querySelector('#prix11');
var quanvar = document.querySelector('#quantity1');
function deletear(){
    var parentElem = document.getElementById('salonn');
    var childElem = document.getElementById('artii');
    x = confirm("Voulez vous vraiment supprimer l'article !");
    if(x==true)
    {
    parentElem.removeChild(childElem);
}  
}

function deletear1(){
    var parentElem = document.getElementById('salon1');
    var childElem = document.getElementById('arti1');
    x = confirm("Voulez vous vraiment supprimer l'article !");
    if(x==true)
    {
    parentElem.removeChild(childElem);
}
}

function deletear2(){
    var parentElem = document.getElementById('salon2');
    var childElem = document.getElementById('arti2');
    x = confirm("Voulez vous vraiment supprimer l'article !");
    if(x==true)
    {
    parentElem.removeChild(childElem);
}
}
function deletear3(){
    var parentElem = document.getElementById('salon3');
    var childElem = document.getElementById('arti3');
    x = confirm("Voulez vous vraiment supprimer l'article !");
    if(x==true)
    {
    parentElem.removeChild(childElem);
}
}
function deletear4(){
    var parentElem = document.getElementById('salon4');
    var childElem = document.getElementById('arti4');
    x = confirm("Voulez vous vraiment supprimer l'article !");
    if(x==true)
    {
    parentElem.removeChild(childElem);
}
}
function deletear5(){
    var parentElem = document.getElementById('salon5');
    var childElem = document.getElementById('arti5');
    x = confirm("Voulez vous vraiment supprimer l'article !");
    if(x==true)
    {
    parentElem.removeChild(childElem);
}
}
function deletear6(){
    var parentElem = document.getElementById('salon6');
    var childElem = document.getElementById('arti6');
    x = confirm("Voulez vous vraiment supprimer l'article !");
    if(x==true)
    {
    parentElem.removeChild(childElem);
}
}
function changecolor1() {
    var elem = document.getElementById('coeur1');
    
    // Appling styles on element
    elem.classList.toggle("color");
    
    }

    function changecolor2() {
        var elem = document.getElementById('coeur2');
        
        // Appling styles on element
        elem.classList.toggle("color");
        
        }

        function changecolor3() {
            var elem = document.getElementById('coeur3');
            
            // Appling styles on element
            elem.classList.toggle("color");
            
            }

            function changecolor4() {
                var elem = document.getElementById('coeur4');
                
                // Appling styles on element
                elem.classList.toggle("color");
                
                }

                function changecolor5() {
                    var elem = document.getElementById('coeur5');
                    
                    // Appling styles on element
                    elem.classList.toggle("color");
                    
                    }

                    function changecolor6() {
                        var elem = document.getElementById('coeur6');
                        
                        // Appling styles on element
                        elem.classList.toggle("color");
                        
                        }
                     
                        