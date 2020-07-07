function Navigator(){
    let position = 0;
    let components = [
        'Accordion',
        'Alert',
        'Article',
        'Articles',
        'Background',
        'Blur',
        'Breadcrumb',
        'Button',
        'Carrousel',
        'Chat',
        'Checkbox',
        'Choice',
        'Circle',
        'Colored',
        'Comments',
        'Counter',
        'Dropdown',
        'Fileformats',
        'Gallery',
        'Grid',
        'Input',
        'Limit',
        'List',
        'Loader',
        'Menu',
        'Message',
        'Meter',
        'Number',
        'Pagination',
        'Password',
        'Prices',
        'Product',
        'Products',
        'Profile',
        'Profiles',
        'Progress',
        'Radio',
        'Range',
        'Rating',
        'Search',
        'Select',
        'Selector',
        'Shadows',
        'Slide',
        'Slogan',
        'Submit',
        'Switch',
        'Tabs',
        'Target',
        'Text',
        'Textarea',
        'Tooltip',
        'Track'
    ];

    let n = document.querySelectorAll("b");
    let iframe = document.querySelectorAll("iframe")[0];
    let h1 = document.querySelectorAll("h1")[0];
    for (let s = 0; s < n.length; s++) {
        
        n[s].addEventListener('click', function() {
            
            if(s === 0){
                position--;
                
            }
            else{
                position++;
            }
            h1.innerHTML=components[position];
            iframe.src='../'+components[position]+'/index.html';
        });
    }
  }
  window.onload = function() {  Navigator(); };