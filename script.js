// Fonctionnalité 1 :    
// lorsque l'utilisateur va cliquer sur le footer, afficher le mot "clique" en console

let footer = document.getElementsByTagName("footer")[0];
 footer.addEventListener("click", 
 function(){
 console.log("clique")
});

//Fonctionnalité 1-bis :
//Now on va upgrader : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x"
let count = 1
document.getElementsByTagName("footer")[0].addEventListener("click",
    function () {
        console.log("clic numero ", count++) // x commence à 1 et s'incrémente de +1 à chaque clic.    
})

//Fonctionnalité 2 :
//Faire fonctionner le Hamburger Menu
document.getElementsByClassName("navbar-toggler")[0].addEventListener("click",
    function () {
 document.getElementById("navbarHeader").classList.toggle("collapse")
    })

//Fonctionnalité 3 :
//clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible 
document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0].addEventListener("click", 
function() {
    document.getElementsByClassName('card-text')[0].classList.add("text-danger")
})

//Fonctionnalité 4 :
//clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert
document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1].addEventListener("click", 
function() {
    document.getElementsByClassName("card-text")[1].classList.toggle("text-success")
})

//Fonctionnalité 5 :
//si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS
document.getElementsByTagName("header")[0].addEventListener("dblclick", 
function() {
    document.styleSheets[0].disabled = !document.styleSheets[0].disabled;
})
