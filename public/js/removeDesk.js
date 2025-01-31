'use strict';
AFRAME.registerComponent('removedesk', {
    multiple:false,
    init:function(){
        const CONTEXT_AF     = this;
        CONTEXT_AF.button    = document.querySelector('#remove-desk-button');
    
        //listens for click and and removes a desk
        CONTEXT_AF.button.addEventListener('click', function(){
            let desk = document.querySelectorAll('.created-desk');

            desk.forEach(desk => desk.parentNode.removeChild(desk));
            });
        },
    });
            