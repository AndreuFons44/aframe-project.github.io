var datacity;
var dataevent;

fetch('js/city.json')
  .then(res => res.json())
  .then(data => {
    datacity = data;
   })
  .then(() => {
    console.log(datacity);
   });

fetch('js/events.json')
   .then(res => res.json())
   .then(data => {
    dataevent = data;
    })
   .then(() => {
     console.log(dataevent);
    });


AFRAME.registerComponent('create', {
    init: function () {
        for (var i = 0; i < datacity.length; i++) {
            var entity = document.createElement('a-entity');
            if(datacity[i].clicked == true){
                entity.setAttribute('class', 'click built '+ datacity[i].type);
            } else {
                entity.setAttribute('class', 'built '+ datacity[i].type);
            }
            entity.setAttribute('mixin', 'builts');
            entity.setAttribute('infobuilt','id', datacity[i].id);
            entity.setAttribute('position', datacity[i].position);
            entity.setAttribute('rotation', datacity[i].rotation);
            entity.setAttribute('scale', datacity[i].scale);
            entity.setAttribute('material', 'color', '#' + datacity[i].color);
            this.el.appendChild(entity);
        }
    },

});



// button for change view
function allbuilds() {
    console.log("All builds");
    const builts = document.getElementsByClassName('built');
    for (var i = 0; i < builts.length; i++) {
        console.log(builts[i].object3D);
        const obj = builts[i].getObject3D('mesh')
        obj.material.transparent = true;
        obj.material.opacity = 0.5;          
    }
}

function builts() {
    const builts = document.getElementsByClassName('built');
    for (var i = 0; i < builts.length; i++) {
        if (builts[i].classList.contains('city')){  
            builts[i].object3D.visible = true;
        } else {
            builts[i].object3D.visible = false;
        }
    }
}
