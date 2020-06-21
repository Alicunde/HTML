function Numbers(){

  let n = document.querySelectorAll(".Number");
  for (let s = 0; s < n.length; s++) {

      let c = n[s].querySelectorAll("button");
      for (let b = 0; b < c.length; b++) {
      
          c[b].addEventListener('click', function() {
            
              if(b === 0){
                this.parentNode.querySelector('input').stepDown()
              }
              else{
                this.parentNode.querySelector('input').stepUp()
              }
          });
      }
  }
}

window.onload = function() {  Numbers(); };