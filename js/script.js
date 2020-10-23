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
        const clone = JSON.parse(text);
        
        parser(clone);
        btnCreate();


        

    };

    /* reader.onerror = function(e) {
        console.log(e.target.error);

    }; */

    //reader.readAsDataURL(file);
    reader.readAsText(file);   
});

function parser (clone) {
    let wrapper = document.querySelector('.container-form');
    let form = document.createElement('form');
    let fields = clone.fields;
    let references = clone.references;
    let buttons = clone.buttons;

    if (fields) {
        for (let i = 0; i < fields.length; i++) {

            if (fields[i].label) {
                let label = document.createElement('label');
                label.innerText = fields[i].label;
                form.append(label);
            }
    
            if (fields[i].input) {
                let input = document.createElement('input');
                input.type = fields[i].input.type;
                    if (fields[i].input.required === 'true' || fields[i].input.required === true) {
                        input.required = fields[i].input.required;
                    }
                    if (fields[i].input.checked === 'true' || fields[i].input.checked === true) {
                        input.checked = fields[i].input.checked;
                    }
                    if (fields[i].input.placeholder) {
                        input.placeholder = fields[i].input.placeholder;
                    }
                    if (fields[i].input.multiple) {
                        input.multiple = fields[i].input.multiple;
                    }
                    if (fields[i].input.file && fields[i].input.filetype) {
                        input.filetype = fields[i].input.filetype;
                    }
                    if (fields[i].input.type == 'color') {
                        let colors = fields[i].input.colors
                        let datalist = document.createElement('datalist');
                        datalist.id = 'colors';
                        input.setAttribute('list', datalist.id);
                     
                            for (let i = 0; i < colors.length; i++) {
                                let option = document.createElement('option');
                                option.value = colors[i];
                                
                                datalist.append(option);
                            }
                        input.value = colors[0];
                        form.append(datalist);   
                    }
    
                    if (fields[i].input.type == 'technology') {
                        input.type = 'text';
                        let technologies = fields[i].input.technologies;
                        let datalist = document.createElement('datalist');
                        datalist.id = 'technologies'
                        input.setAttribute('list', datalist.id);
                        
                     
                            for (let i = 0; i < technologies.length; i++) {
                                let option = document.createElement('option');
                                option.value = technologies[i];
                                datalist.append(option);
                            }
                        form.append(datalist);
                  
                    }
    
                    if (fields[i].input.filetype) {
                        let filetype = fields[i].input.filetype;
                       
                        input.accept = `image/${filetype[0]}, image/${filetype[1]}, image/${filetype[2]}`;
                  
                        
                    }
                    if (fields[i].input.mask) {
                        input.classList.add('input-mask');
                        let mask = fields[i].input.mask;
                        input.type = 'text';
    
                        $(document).ready(function() {
                            $('.input-mask').mask(mask); 
    
                        });
    
                       
                        
                            
                        
                       
    
                        
                    }
                    
                form.append(input);
            }
          
        }
    }

    if (references) {
        for (let i = 0; i < references.length; i++) {
            if(references[i].input) {
                let input = document.createElement('input');
                input.type = references[i].input.type;
                    if (references[i].input.required === 'true' || references[i].input.required === true) {
                        input.required = references[i].input.required;
                    }
                    if (references[i].input.checked === 'true' || references[i].input.checked === true) {
                        input.checked = references[i].input.checked;
                    }
                form.append(input);
            }
           
            let div = document.createElement('div');
            if (references[i]['text without ref']) {
                let p = document.createElement('p');
                p.innerText = references[i]['text without ref'];
                /* link.innerText = references[i].text;
                link.href = references[i].ref;
                div.append(link); */
                div.append(p);
            }

            if (references[i].text) {
                let link = document.createElement('a');
                link.innerText = references[i].text;
                link.href = references[i].ref;
                div.append(link)
                
            }
           form.append(div);
           
          
            
        }
    }

    if(buttons) {
        for (let i = 0; i < buttons.length; i++) {
            let button = document.createElement('button');
            button.innerText = buttons[i].text;
            form.append(button);
        } 
    }
    
    
    wrapper.append(form);

    
      
}

function btnCreate() {
    const wrapFormSubmit = document.querySelector('.container-submit'),
        formDelete = document.querySelectorAll('form')[1],
        inputFile = document.querySelector('.form-submit__input');
    let btn = document.createElement('button');
    let btnText = document.createTextNode('Очистить/Удалить');
    btn.classList.add('btn');
    btn.append(btnText);
    wrapFormSubmit.append(btn);
    

    btn.addEventListener('click', () => {
        formDelete.parentNode.removeChild(formDelete);
        inputFile.value = '';
        btn.parentNode.removeChild(btn);
    });
}





    



   

    

    

    
