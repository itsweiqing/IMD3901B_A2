'use strict';

AFRAME.registerComponent('movechair', {
    schema: {
        isMove: {default: false},
        isIntersect: {default: false},
        intersectedEl: {default: null}
    },

    init: function(){
        let cursor = document.querySelector('#cursor');
        let camera = document.querySelector('#camera');
        let attachedDesk = document.querySelector('#hold-desk');

        //store first intersected element
        cursor.addEventListener('raycaster-intersection', (event) => {
            this.data.intersectedEl = event.detail.els[0];
            this.data.isIntersect = true;
        });

        //clear when cursor is not intersecting
        cursor.addEventListener('raycaster-intersection-cleared', () => {
            this.data.isIntersect = false;
        });

        //if cursor interact with desk cretaed, it will make the desk invisible and attach to camera
        window.addEventListener('mousedown', () => {
            if(!this.data.isMove && this.data.isIntersect && this.data.intersectedEl.id === 'desk'){
                this.data.intersectedEl.setAttribute('visible', 'false');
                attachedDesk.setAttribute('visible', 'true');
                this.data.isMove = true;
            }
        });

        //if cursor is released, the desk will be placed on the floor (original desk visible, attached box invisible)
        window.addEventListener("mouseup", () => {
            if(this.data.isMove){
                let cameraDirection = camera.object3D.getWorldDirection(new THREE.Vector3());
                let dropDesk = cameraDirection.multiplyScalar(-1).add(camera.object3D.position);
                dropDesk.y -= 1;
                this.data.intersectedEl.setAttribute('position', dropDesk);
                this.data.intersectedEl.setAttribute('visible', 'true');
                attachedDesk.setAttribute('visible', 'false');
                this.data.isMove = false;
            }
          });
    }
});


