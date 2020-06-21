function Progress(){
    let progress = document.querySelectorAll(".Progress");
    progress.active = 0;
    for (let i = 0; i < progress.length; i++) {
        console.log(2);
        let bar = progress[i].querySelectorAll("progress");
        let n = Math.floor(Math.random() * 100); 
        bar[0].value = n;
    }
}


// Run
window.onload = function() { setInterval(() => {
    Progress();
}, 1000);};
