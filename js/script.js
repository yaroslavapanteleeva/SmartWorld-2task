'use strict';

const form = document.querySelector('form'),
    inputFile = document.getElementById('inputFile');

console.log(inputFile);

inputFile.addEventListener('change', (e) => {
    let file = e.target.files[0];

    //console.log(file);
    //console.log(file.name);

    let reader = new FileReader();
    
    reader.onload = function(e) {
        const text = e.target.result;
        console.log('Содержимое файла: ' +text);
    };

    /* reader.onerror = function(e) {
        console.log(e.target.error);

    }; */

    //reader.readAsDataURL(file);
    reader.readAsText(file);
 
    
});





    



   

    

    

    
