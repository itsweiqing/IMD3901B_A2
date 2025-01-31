'use strict';

AFRAME.registerComponent('createdesk', {
    multiple:false,

    init:function(){
        const CONTEXT_AF     = this;
        CONTEXT_AF.button    = document.querySelector('#create-desk-button');
    
        //listens for click and and creates a new desk
        CONTEXT_AF.button.addEventListener('click', function(){
            let desk = document.createElement('a-entity');
        desk.setAttribute('gltf-model', 'url(assets/school_desk/scene.gltf)');
        desk.setAttribute('movechair', '');

        desk.classList.add('created-desk');
        desk.classList.add('interactive');
        desk.setAttribute('id','desk');

        //to generate random position in the classroom
        let x = Math.random() * 6 - 2;
        let y = 0; //Desks are not places below the floor
        let z = Math.random() * 9 - 5;

        //Set position of desk to random coordinates, fixed scale and rotation
        desk.setAttribute('position', `${x} 0 ${z}`);
        desk.setAttribute('scale', '0.01 0.01 0.01');
        desk.setAttribute('rotation', '0 -45 0');

        document.querySelector('a-scene').appendChild(desk);

        //Play sound effect when button is clicked
        const dropSound = document.querySelector('#drop');
        dropSound.play();
        });
    },
});

