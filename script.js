const burger = document.querySelector ('.burger');
const popup = document.querySelector ('.popup-menu');
const time = document.querySelector ('.form-time');
const calendar = document.querySelector ('.calendar');
const btnclose = document.querySelector ('.btn-off');
const nailsbox = document.querySelector ('.services-nails-box');
const makeupbox = document.querySelector ('.services-makeup-box');
const permanentbox = document.querySelector ('.services-permanent-box');
const browsbox = document.querySelector ('.services-brows-box');
const eyelashesbox = document.querySelector ('.services-eyelashes-box');
const nailsbtn = document.querySelector ('.services-niles');
const makeupbtn = document.querySelector ('.services-makeup');
const permanentbtn = document.querySelector ('.services-permanent');
const browsbtn = document.querySelector ('.services-brows');
const eyelashesbtn = document.querySelector ('.services-eyelashes');
const btncloseserv = document.querySelector ('.btn-off-serv');
const services = document.querySelector ('.services');
const formserv = document.querySelector ('.form-services');
const categories = document.querySelector ('.next-categories');
const poopup = document.querySelector ('.poopup-categories');
const servbtn = document.querySelector ('.services-choisbtn');
const list = document.querySelector ('.listUp');
const back = document.querySelector ('.window-navigation-prev');
const record = document.querySelector ('.record');
const btroffrec = document.querySelector ('.btn-off-record');
const btnend = document.querySelector ('.record-btn');
const finish = document.querySelector ('.finish');
const btnfinishoff = document.querySelector ('.btn-off-finish');

btnend.onclick = function () {
    finish.classList.add('show')
    record.classList.remove('show')
}

btnfinishoff.onclick = function () {
    finish.classList.remove('show')
}

btroffrec.onclick = function () {
    list.classList.add('show')
    record.classList.remove('show')
}

back.onclick = function () {
    services.classList.add('show')
    list.classList.remove('show')
}

// servbtn.onclick = function () {
//     services.classList.remove('show')
//     list.classList.add('show')
// }

categories.onclick = function () {
    categories.classList.toggle('rotate')
    poopup.classList.toggle('active')
}


document.addEventListener('click',e => {
    console.log(e.target)
    if (e.target.className == 'calender_btn') {
        e.target.classList.add('calender_btn__active')
    }
    else if (e.target.className == 'calender_btn calender_btn__active') {
        e.target.classList.remove('calender_btn__active')
    }
    else if (e.target.className == 'services-choisbtn') {
        list.classList.add('show')
        services.classList.remove('show')
    }
    else if (e.target.className == 'saloon-signup') {
        record.classList.add('show')
        list.classList.remove('show')
    }
})

burger.onclick = function () {
    burger .classList.toggle('active')
    popup .classList.toggle('active')
}
time.onclick = function () {
    calendar .classList.add('show')
}
btnclose.onclick = function () {
    calendar .classList.remove('show')
}

btncloseserv.onclick = function () {
    services .classList.remove('show')
}

formserv.onclick = function () {
    services .classList.add('show')
    nailsbtn .classList.add('active')
    makeupbtn.classList.remove('active')
    permanentbtn .classList.remove('active')
    eyelashesbtn .classList.remove('active')
    browsbtn .classList.remove('active')
    nailsbox .classList.add('active')
    makeupbox .classList.remove('active')
    permanentbox .classList.remove('active')
    browsbox .classList.remove('active')
    eyelashesbox .classList.remove('active')
}

nailsbtn.onclick = function () {
    nailsbtn .classList.add('active')
    makeupbtn.classList.remove('active')
    permanentbtn .classList.remove('active')
    eyelashesbtn .classList.remove('active')
    browsbtn .classList.remove('active')
    nailsbox .classList.add('active')
    makeupbox .classList.remove('active')
    permanentbox .classList.remove('active')
    browsbox .classList.remove('active')
    eyelashesbox .classList.remove('active')
    
}
makeupbtn.onclick = function () {
    makeupbtn.classList.add('active')
    permanentbtn .classList.remove('active')
    nailsbtn .classList.remove('active')
    eyelashesbtn .classList.remove('active')
    browsbtn .classList.remove('active')
    makeupbox .classList.add('active')
    nailsbox .classList.remove('active')
    permanentbox .classList.remove('active')
    browsbox .classList.remove('active')
    eyelashesbox .classList.remove('active')
}
permanentbtn.onclick = function () {
    permanentbtn .classList.add('active')
    makeupbtn .classList.remove('active')
    nailsbtn .classList.remove('active')
    eyelashesbtn .classList.remove('active')
    browsbtn .classList.remove('active')
    permanentbox .classList.add('active')
    makeupbox .classList.remove('active')
    nailsbox .classList.remove('active')
    browsbox .classList.remove('active')
    eyelashesbox .classList.remove('active')
}
browsbtn.onclick = function () {
    browsbtn .classList.add('active')
    eyelashesbtn .classList.remove('active')
    permanentbtn .classList.remove('active')
    makeupbtn .classList.remove('active')
    nailsbtn .classList.remove('active')
    browsbox .classList.add('active')
    makeupbox .classList.remove('active')
    permanentbox .classList.remove('active')
    nailsbox .classList.remove('active')
    eyelashesbox .classList.remove('active')
}
eyelashesbtn.onclick = function () {
    eyelashesbtn .classList.add('active')
    browsbtn .classList.remove('active')
    permanentbtn .classList.remove('active')
    makeupbtn .classList.remove('active')
    nailsbtn .classList.remove('active')
    eyelashesbox .classList.add('active')
    makeupbox .classList.remove('active')
    permanentbox .classList.remove('active')
    browsbox .classList.remove('active')
    nailsbox .classList.remove('active')
}










