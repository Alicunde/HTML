function Selector(){

    let tabs = document.querySelectorAll(".Selector");
    tabs.active = 0;
    for (let s = 0; s < tabs.length; s++) {

        let li = tabs[s].querySelectorAll("li");
        let divs = tabs[s].querySelectorAll(".Selector > div");
        let input = tabs[s].querySelectorAll(".Selector > input");
        for (let b = 0; b < li.length; b++) {
            li[b].addEventListener('click', function() {
                for (let d = 0; d < divs.length; d++)divs[d].classList.remove("active");
                for (let d = 0; d < li.length; d++)li[d].classList.remove("active");
                li[b].classList.add("active");
                input[0].value=this.dataset.value;
            });
        }
    }
}
Selector();