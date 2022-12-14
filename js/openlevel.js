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
    schema: {

    },

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


AFRAME.registerComponent('infobuilt', {
    schema: {
        id: {type: 'int'},
    },

    init: function () {
        let id = this.data.id;
        let el = this.el;
        this.el.addEventListener('click', function (evt){
            if(el.classList.contains('click')){ 
                clearEvent();
                //clearInfo();
                createinfoBuilt(id)
                consoleinfoBuilt(id)
                openMenu();
                for(var i = 0; i < dataevent.length; i++){
                    if(dataevent[i].idLocation == id){
                        //consoleLog(i);
                        createEvent(i);
                    }
                }
            }
        }, false);
    },

});

//info built
function createinfoBuilt(i) {
    openInfo();
    const info = document.getElementById('menu-info');
    info.innerHTML = "<h1>" + datacity[i].name + "</h1>" + "<p>" + datacity[i].description + "</p>";
}

function createEvent(i){
    openInfoEvent();
    const event = document.createElement('div');
    event.setAttribute('class', 'event_' + i);
    event.innerHTML = "<h1>Event" + i + "</h1>";
    const container = document.getElementById('menu-event');
    container.appendChild(event);
}

//clear info built and event
function clearEvent(){
    const eventBuilt = document.getElementById('menu-event');
    while (eventBuilt.firstChild) {
        eventBuilt.removeChild(eventBuilt.firstChild);
    }
}
function clearInfo(){
    const infoBuilt = document.getElementById('menu-info');
    while (infoBuilt.firstChild) {
        infoBuilt.removeChild(infoBuilt.firstChild);
    }
}

function consoleinfoBuilt(i){
    console.log("Name= " + datacity[i].name);
    console.log("Description= " + datacity[i].description);
    console.log("Position= " + datacity[i].position);
    console.log("Rotation= " + datacity[i].rotation);
    console.log("Scale= " + datacity[i].scale);
    console.log("Color= " + datacity[i].color);
    console.log("Type= " + datacity[i].type);
}
//console log for build
function consoleLog(i){
    console.log("Name Event= " + dataevent[i].nameEvent);
    console.log("Desciption Event= " + dataevent[i].descriptionEvent);
    console.log("Date Start Event= " + dataevent[i].dateEventStart);
    console.log("Time Start Event= " + dataevent[i].eventTimeStart);
    console.log("Date End Event= " + dataevent[i].dateEventEnd);
    console.log("Time End Event= " + dataevent[i].eventTimeEnd);
    console.log("Image Event= " + dataevent[i].imageEvent);
}


// button for change view
function allbuilds() {
    console.log("All builds");
    const builts = document.getElementsByClassName('built');
    for (var i = 0; i < builts.length; i++) {
        builts[i].object3D.visible = true;            
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


function shops() {
    console.log("shops");
    const builts = document.getElementsByClassName('built');
    for (var i = 0; i < builts.length; i++) {
        if (builts[i].getAttribute('class') == 'click built builts') {  
            builts[i].object3D.visible = true;
        } else {
            builts[i].object3D.visible = false;
        }
    }

}

// MENU Functions
function openMenu() {
    document.getElementById("overlay").setAttribute('class', 'visible');
    document.getElementById("menu").setAttribute('class', 'hidden');
    openInfo();
    openInfoEvent();
}
function closeMenu() {
    document.getElementById("overlay").setAttribute('class', 'hidden');
    document.getElementById("menu").setAttribute('class', 'visible');
    closeInfo();
    closeInfoEvent();
}

function createEvent(id) {
    const event = document.createElement('div');
    event.setAttribute('id', 'event_' + id);
    event.setAttribute('class', 'event');
    event.innerHTML = "<a onclick='openinfoevent("+ id +")'>Event " + dataevent[id].nameEvent +  "</a>";   
    const container = document.getElementById('menu-event');
    container.appendChild(event);

    const event1 = document.createElement('div');
    event1.setAttribute('id', 'eventinfo_' + id );
    event1.setAttribute('class', 'hidden');
    event1.innerHTML = "<h1>" + dataevent[id].nameEvent +
     "</h1>" + "<p>" + dataevent[id].descriptionEvent 
     + "</p>"
     + "<p>" + dataevent[id].dateEventStart 
     + "</p>"
     + "<p>" + dataevent[id].dateEventEnd 
     + "</p>"+
     "<img src='" + dataevent[id].imageEvent + "'/>";
    const container1 = document.getElementById('event_' + id );
    container1.appendChild(event1);
    

}

//clear event info
function clearEvent(){
    const eventBuilt = document.getElementById('menu-event');
    while (eventBuilt.firstChild) {
        eventBuilt.removeChild(eventBuilt.firstChild);
    }
}

function openInfo() {
    document.getElementById("menu-info").setAttribute('class', 'visible');
}
function closeInfo() {
    document.getElementById("menu-info").setAttribute('class', 'hidden');
}
function openInfoEvent() {
    document.getElementById("menu-event").setAttribute('class', 'visible');
}
function closeInfoEvent() {
    document.getElementById("menu-event").setAttribute('class', 'hidden');
}


function openinfoevent(id) {
    console.log(id);
    if((document.getElementById("eventinfo_" + id).getAttribute('class') == "hidden")){
        document.getElementById("eventinfo_" + id).setAttribute('class', 'visible');
    }
    else
    {
        document.getElementById("eventinfo_" + id).setAttribute('class', 'hidden');
    }
}



