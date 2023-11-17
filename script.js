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
const popupMain = document.querySelector ('.popup');
const popupMain2 = document.querySelector ('.popup2');
const popupMain3 = document.querySelector ('.popup3');
const popupMain4 = document.querySelector ('.popup4');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');

btnend.onclick = function () {
    finish.classList.add('popup__active')
    record.classList.remove('popup__active')
    popupMain3.classList.add('popup__active')
    popupMain2.classList.remove('popup__active')
}

btnfinishoff.onclick = function () {
    finish.classList.remove('popup__active')
    popupMain3.classList.remove('popup__active')
}

btroffrec.onclick = function () {
    popupMain2.classList.remove('popup__active')
    record.classList.remove('popup__active')
}

back.onclick = function () {
    popupMain.classList.remove('popup__active')
    list.classList.remove('popup__active')
}



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
    else if (e.target.className == 'form-main__btn') {
        list.classList.add('popup__active')
        popupMain.classList.add('popup__active')
        services.classList.remove('popup__active')
    }
    else if (e.target.className == 'saloon-signup') {
        record.classList.add('popup__active')
        popupMain2.classList.add('popup__active')
        list.classList.remove('popup__active')
        popupMain.classList.remove('popup__active')
    }
    else if(e.target.className == 'services__select') {
        e.target.classList.add('services__select_add')
        btn1.classList.add('color');
        btn2.classList.add('color');
        btn3.classList.add('color');
        btn4.classList.add('color');
        btn5.classList.add('color');
    }
    else if(e.target.className == 'services__select services__select_add') {
        e.target.classList.remove('services__select_add')
    }
    else if(e.target.className == 'services-choisbtn') {
        services .classList.remove('popup__active')
        popupMain4.classList.remove('popup__active')
    }
    else if(e.target.className == 'services-choisbtn color') {
        services .classList.remove('popup__active')
        popupMain4.classList.remove('popup__active')
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
    services .classList.remove('popup__active')
    popupMain4.classList.remove('popup__active')
}

formserv.onclick = function () {
    services .classList.add('popup__active')
    popupMain4.classList.add('popup__active')
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










