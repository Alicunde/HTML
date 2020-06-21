function Menu(){
    
    let Menu = document.querySelectorAll(".Menu ul");
    Menu.active = 0;
    for (let s = 0; s < Menu.length; s++) {
       
        
        let li = Menu[s].querySelectorAll("li")[0];
        li.addEventListener('click', function() {
            Menu[s].classList.toggle("active");

        });
        let a = li.querySelectorAll("li a")[0];
        a.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
        });
    }
}
// Run
window.onload = function() { new Menu(); };