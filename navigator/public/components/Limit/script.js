
class Limit {
    constructor() {
      // get inputs
      let input = document.querySelectorAll('[maxlength]');
      let that = this;
      // constructor
      for (let i = 0; i < input.length; i++) {
          // loading:
          input[i].addEventListener('keydown', this.limit, false);
          input[i].addEventListener('keyup', this.limit, false);
          input[i].addEventListener('keypress', this.limit, false);

      }
    }
    limit(e){
      var t = e.target || e.srcElement;

        // Variables
        var text = t.value.length;
        var max = t.maxLength;
        var counter = t.parentNode.querySelectorAll('em'); 
        var count = (max - text);
        
        // Output Number
        counter[0].innerHTML= Math.abs(count);
        
        
    }
    
  }

// Run
    window.onload = function() { new Limit(); };