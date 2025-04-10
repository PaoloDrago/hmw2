document.addEventListener("DOMContentLoaded",() => {
    const menuButton = document.getElementById("menuButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    menuButton.addEventListener("click", ()=>{
        dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", (e) =>{
        if(!e.target.matches('#menuButton')){
            dropdownMenu.style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded",() => {
    const areaPersonaleButton = document.getElementById("areaPersonaleButton");
    const areaPersonaleMenu = document.getElementById("areaPersonaleMenu");

    areaPersonaleButton.addEventListener("click", (e)=>{
        e.stopPropagation();
        areaPersonaleMenu.style.display = areaPersonaleMenu.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("click", (e) =>{
        if(!areaPersonaleButton.contains(e.target) && !areaPersonaleMenu.contains(e.target)){
            areaPersonaleMenu.style.display = "none";
        }
    });
});

document.querySelectorAll('.cta').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault(); 
        alert('Bottone "Scopri di più" cliccato!');
    });
});


