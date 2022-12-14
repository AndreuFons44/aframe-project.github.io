let json = [
    {
        "id": "1",
        "name": "Built1",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "shop",
        "position": "0 0 -1",
        "rotation": "0 0 0",
        "scale": "1 1.5 1",
        "width":"3",
        "height":"2",
        "depth":"1",
        "color": "F21194"
    },
    {
        "id": "2",
        "name": "Built2",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "city",
        "position": "0 0 2",
        "rotation": "0 0 0",
        "scale": "1 0.8 1",
        "width":"3",
        "height":"3",
        "depth":"3",
        "color": "D204DB"
    },
    {
        "id": "3",
        "name": "Built3",
        "description": "Description Built2",
        "image": "img/built.png",
        "type": "city",
        "position": "0 0 5",
        "rotation": "0 0 0",
        "scale": "1 1.1 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "AC05F9"
    },
    {
        "id": "4",
        "name": "Built4",
        "description": "Description Built4",
        "image": "img/built.png",
        "type": "shop",
        "position": "0 0 8",
        "rotation": "0 0 0",
        "scale": "1 0.7 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "F92305"
    },
    {
        "id": "5",
        "name": "Built5",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "builts",
        "position": "0 0 11",
        "rotation": "0 0 0",
        "scale": "1 1 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "F9A705"
    },
    {   
        "id": "6",
        "name": "Built6",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "shop",
        "position": "0 0 13.5",
        "rotation": "0 0 0",
        "scale": "1 0.7 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "F9F205"
    },
    {   
        "id": "10",
        "name": "Built6",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "city",
        "position": "9 0 0",
        "rotation": "0 180 0",
        "scale": "1 1 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "F9F205"
    },
    {
        "id": "7",
        "name": "Built7",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "city",
        "position": "9 0 3",
        "rotation": "0 180 0",
        "scale": "1 1 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "F9F205"
    },
    {
        "id": "8",
        "name": "Built8",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "city",
        "position": "9 0 6",
        "rotation": "0 180 0",
        "scale": "1 1 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "F9F205"
    },
    {
        "id": "9",
        "name": "Built9",
        "description": "Description Built1",
        "image": "img/built.png",
        "type": "city",
        "position": "9 0 8",
        "rotation": "0 180 0",
        "scale": "1 1 1",
        "width":"1",
        "height":"1",
        "depth":"1",
        "color": "F9F205"
    }
]
let json2 = [
        {
            "idEvent": "1",
            "idLocation": "1",
            "typeEvent": "0",
            "nameEvent": "Event 1",
            "dateEventStart": "2019-01-01",
            "dateEventEnd": "2020-01-01",
            "eventTimeStart": "24:00:00",
            "eventTimeEnd": "24:00:00",
            "descriptionEvent": "Description 1",
            "imageEvent": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        },
        {
            "idEvent": "2",
            "idLocation": "2",
            "typeEvent": "1",
            "nameEvent": "Event 2",
            "dateEventStart": "2019-01-01",
            "dateEventEnd": "2020-01-01",
            "eventTimeStart": "24:00:00",
            "eventTimeEnd": "24:00:00",
            "descriptionEvent": "Description 2",
            "imageEvent": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        },
        {
            "idEvent": "3",
            "idLocation": "1",
            "typeEvent": "1",
            "nameEvent": "Event 1.2",
            "dateEventStart": "2019-01-01",
            "dateEventEnd": "2020-01-01",
            "eventTimeStart": "24:00:00",
            "eventTimeEnd": "24:00:00",
            "descriptionEvent": "Description 2",
            "imageEvent": "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        }
]

AFRAME.registerComponent('create', {
    schema: {

    },

    init: function () {
        for (var i = 0; i < json.length; i++) {
            var entity = document.createElement('a-entity');
            entity.setAttribute('class', 'click built '+ json[i].type);
            entity.setAttribute('mixin', 'builts');
            entity.setAttribute('infobuilt','id', json[i].id);
            entity.setAttribute('position', json[i].position);
            entity.setAttribute('rotation', json[i].rotation);
            entity.setAttribute('scale', json[i].scale);
            entity.setAttribute('material', 'color', '#' + json[i].color);
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
                openMenu();
                for(var i = 0; i < json2.length; i++){
                    if(json2[i].idLocation == id){
                        consoleLog(i);
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
    info.innerHTML = "<img src=" + json[i].image + " alt=''>";
    info.innerHTML = "<h1>" + json[i].name + "</h1>" + "<p>" + json[i].description + "</p>";
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

//console log for build
function consoleLog(i){
    console.log("Name Event= " + json2[i].nameEvent);
    console.log("Desciption Event= " + json2[i].descriptionEvent);
    console.log("Date Start Event= " + json2[i].dateEventStart);
    console.log("Time Start Event= " + json2[i].eventTimeStart);
    console.log("Date End Event= " + json2[i].dateEventEnd);
    console.log("Time End Event= " + json2[i].eventTimeEnd);
    console.log("Image Event= " + json2[i].imageEvent);
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
    event.innerHTML = "<a onclick='openinfoevemt(event_" + id +")'>Event " + json2[id].nameEvent + "<img src='icon/info.svg' alt=''></a>";   
    const container = document.getElementById('menu-event');
    container.appendChild(event);
    
    const event1 = document.createElement('div');
    event1.setAttribute('class', 'hidden');
    event.setAttribute('id', 'eventinfo_' + id);
    event1.innerHTML = "<h1>" + json2[id].nameEvent + "</h1>" + "<p>" + json2[id].descriptionEvent + "</p>" + "<p>" + json2[id].dateEventStart + "</p>" + "<p>" + json2[id].eventTimeStart + "</p>" + "<p>" + json2[id].dateEventEnd + "</p>" + "<p>" + json2[id].eventTimeEnd + "</p>" + "<img src=" + json2[id].imageEvent + " alt=''>";
    const container1 = document.getElementById('event_' + id);
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


function openinfoevemt(id) {
    if((document.getElementById("eventinfo_" + id).getAttribute('class') == "visible")){
        document.getElementById("eventinfo_" + id).setAttribute('class', 'hidden');
    }
    else
    {
        document.getElementById("eventinfo_" + id).setAttribute('class', 'visible');
    }
}



