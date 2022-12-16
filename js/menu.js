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
//info built
function createinfoBuilt(i) {
    openInfo();
    const info = document.getElementById('menu-info');
    info.innerHTML = "<h1>" + datacity[i].name + "</h1>" + "<p>" + datacity[i].description + "</p>";
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

