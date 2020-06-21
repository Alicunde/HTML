function Slide(){
    let slide = document.querySelectorAll(".Slide");
    slide.active = 0;
    for (let s = 0; s < slide.length; s++) {
        let div = slide[s].querySelectorAll(".Slide ul li");
        let ol = slide[s].querySelectorAll(".Slide code b");
        for (let b = 0; b < ol.length; b++) {
            let bx = b;
            ol[b].addEventListener('click', function() {
                for (let d = 0; d < div.length; d++)div[d].classList.remove("active");
                for (let d = 0; d < ol.length; d++)ol[d].classList.remove("active");
                div[b].classList.add("active");
                this.classList.add("active");
            });
        }

        let button = slide[s].querySelectorAll(".Slide code i");
        for (let b = 0; b < button.length; b++) {
            

            button[b].addEventListener('click', function() {
                for (let d = 0; d < ol.length; d++)ol[d].classList.remove("active");

                for (let d = 0; d < div.length; d++)div[d].classList.remove("active");
                let active = slide.active;
                if(b === 1){
                    active++;
                    if(active>=div.length)active = 0;
                    
                    div[active].classList.add("active");
                    
                }
                else{
                    active--;
                    if(active < 0)active = div.length-1;
                    div[active].classList.add("active");
                }
                ol[active].classList.add("active");

                slide.active = active;
            });
        }
    }
}
console.log('iframe slide');
Slide();