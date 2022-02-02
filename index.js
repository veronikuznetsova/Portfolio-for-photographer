import i18Obj from "./translate.js";

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');
const logo = document.querySelector('.logo');
const header = document.querySelector('.common-header');

function toggleMenu() {
    menu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
    main.classList.toggle('openMain');
    footer.classList.toggle('openMain');
    logo.classList.toggle('openMain');
    header.classList.toggle('openMain');
}

hamburger.addEventListener('click', toggleMenu);

function closeMenu(event) {
    if (event.target.classList.contains('nav-link')) {
        menu.classList.remove('openMenu');
        hamburger.classList.remove('open');
        main.classList.remove('openMain');
        footer.classList.remove('openMain');
        logo.classList.remove('openMain');
        header.classList.remove('openMain');
    }
}

menu.addEventListener('click', closeMenu);




const portfolioBtn = document.querySelectorAll('.portfolio-button');
const portfolioImages = document.querySelectorAll('.portfolio-image');
const portfolioBtns = document.querySelector('.portfolio-buttons');

function changeImage(event) {
    if (event.target.classList.contains('portfolio-button')) {
        let weather = event.target.dataset.season;
        portfolioImages.forEach((img, index) => img.src = `./assets/img/${weather}/${index + 1}.jpg`);
    }
}

portfolioBtns.addEventListener('click', changeImage);

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadSummerImages() {
    seasons.forEach((element) => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${element}/${i}.jpg`;
        }
    })
}
preloadSummerImages();

function changeClassActive(event) {
    if (event.target.classList.contains('button-light-light')) {
        portfolioBtn.forEach((element) => element.classList.remove('button-hover-light'))
        event.target.classList.add('button-hover-light')
    } else {
        portfolioBtn.forEach((element) => element.classList.remove('button-hover'))
        event.target.classList.add('button-hover')
    }
}

portfolioBtns.addEventListener('click', changeClassActive);



const data = document.querySelectorAll('[data-i18]');
const span = document.querySelectorAll('.span');
const btnEn = document.querySelector('.en');
const btnRu = document.querySelector('.ru');

var lang; 

function getTranslate(lang) {
        data.forEach((element) => {
            let text = element.dataset.i18;
            element.textContent = i18Obj[lang][text]
        })
}

btnEn.addEventListener('click', () => getTranslate(lang ='en'));
btnRu.addEventListener('click', () => getTranslate(lang ='ru'));

const btnLang = document.querySelector('.switch');

function changeClassActiveLang(event) {
    if (event.target.classList.contains('light-theme')) {
        span.forEach((element) => element.classList.remove('switch_spanlg'))
        event.target.classList.add('switch_spanlg')
    } else {
        span.forEach((element) => element.classList.remove('switch_span'))
        event.target.classList.add('switch_span')
    }
}

btnLang.addEventListener('click', changeClassActiveLang);

const light = document.querySelectorAll('.nav-link, .section-text, h1, h2, .spanlg, .skill-title, .skill-text, .price-title, .section-price, .span-text, .github, .date, .rss ');
const container = document.querySelector('.container');
const switchlg = document.querySelector('.switch_span');
const btnlight = document.querySelectorAll('.button-light, .btn2');
const btnlg = document.querySelectorAll('.section-button, .btn1');
const footerIcon = document.querySelectorAll('.footer-icon');
const contactsInput = document.querySelectorAll('.contacts-input, .contacts-textarea');
const sectionContacts = document.querySelector('.section-contacts');
const buttonHover = document.querySelector('.button-hover');
const line = document.querySelectorAll('.line');
const nav = document.querySelector('.nav');
const lightTheme = document.querySelector('.light');
const darkTheme = document.querySelector('.dark');

let theme = 'dark';

function changeThemeLight() {
    theme = "light";
    lightTheme.style.display = 'block';
    darkTheme.style.display = 'none';
    light.forEach((element) => element.classList.add('light-theme'));
    container.classList.add('container-light');
    logo.classList.add('logo-light');
    switchlg.classList.add('switch_spanlg');
    btnlight.forEach((element) => element.classList.add('button-light-light'));
    btnlg.forEach((element) => element.classList.add('button-gold-light'));
    footer.classList.add('footer-light');
    footerIcon.forEach((element) => element.classList.add('footer-icon-light'));
    contactsInput.forEach((element) => element.classList.add('contacts-input-light'));
    contactsInput.forEach((element) => element.classList.add('contacts-input-light::placeholder'));
    sectionContacts.classList.add('section-contacts-light');
    buttonHover.classList.add('button-hover-light');
    line.forEach((element) => element.classList.add('line-light'));
    nav.classList.add('nav-light');
    navLinks.forEach((element) => element.classList.add('nav-link-light'));
}

function changeThemeDark() {
    theme = "dark";
    darkTheme.style.display = 'block';
    lightTheme.style.display = 'none';
    light.forEach((element) => element.classList.remove('light-theme'));
    container.classList.remove('container-light');
    logo.classList.remove('logo-light');
    switchlg.classList.remove('switch_spanlg');
    btnlight.forEach((element) => element.classList.remove('button-light-light'));
    btnlg.forEach((element) => element.classList.remove('button-gold-light'));
    footer.classList.remove('footer-light');
    footerIcon.forEach((element) => element.classList.remove('footer-icon-light'));
    contactsInput.forEach((element) => element.classList.remove('contacts-input-light'));
    contactsInput.forEach((element) => element.classList.remove('contacts-input-light::placeholder'));
    sectionContacts.classList.remove('section-contacts-light');
    buttonHover.classList.remove('button-hover-light');
    line.forEach((element) => element.classList.remove('line-light'));
    nav.classList.remove('nav-light');
    navLinks.forEach((element) => element.classList.remove('nav-link-light'));
}

darkTheme.addEventListener('click', changeThemeLight);
lightTheme.addEventListener('click',changeThemeDark);

function setLocalStorage() {
    localStorage.setItem('lang', lang);
    localStorage.setItem('theme', theme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        lang = localStorage.getItem('lang');
        if(lang == "en") {
            btnRu.classList.remove('switch_span');
            btnEn.classList.add('switch_span');
            getTranslate('en');
        } else if(lang == "ru") {
            btnEn.classList.remove('switch_span');
            btnRu.classList.add('switch_span');
            getTranslate('ru');
        }
    }
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
        if(theme == "dark") {
            changeThemeDark();
        } else if(theme == "light") {
            changeThemeLight();
        }
    }
}
window.addEventListener('load', getLocalStorage);

const vidWrapper = document.querySelector('.video-player');
const myVid = document.querySelector('.player__video');
const button = document.querySelector('.play-hover');
const active = document.querySelector('.activeplay');
const pause = document.querySelector('.pause');
const video = document.querySelector('video');
const length = document.querySelector('.length');
const volumeMute = document.querySelector('.volume');

const controlPlay = document.querySelector('.player__button');
const controlVol = document.querySelector('.player__slider[name="volume"]');
const controlRate = document.querySelector('.player__slider[name="playbackRate"]');
const controlSkip = document.querySelectorAll('.player__button[data-skip]');
const controlFullScreen = document.querySelector('.player__fullscreen');
const controlProgress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

var drag;
var grap;

myVid.addEventListener('click', toggleVideo);
button.addEventListener('click', toggleVideo);
controlPlay.addEventListener('click', toggleVideo);
controlVol.addEventListener('change', updateVol);
controlRate.addEventListener('change', updateRate);
controlFullScreen.addEventListener('click', goFullScreen);
controlSkip.forEach(control => control.addEventListener('click', forward));
controlProgress.addEventListener('mouseover', function(){drag = true});
controlProgress.addEventListener('mouseout', function(){drag = false; grap = false});
controlProgress.addEventListener('mousedown', function(){grap = drag});
controlProgress.addEventListener('mouseup', function(){grap = false});
controlProgress.addEventListener('click', updateCurrentPos);
controlProgress.addEventListener('mousemove', function(e){ if(drag && grap){updateCurrentPos(e)}});

var progression;

function toggleVideo() {
  if (myVid.paused) {
    myVid.play();
    active.classList.add('active');
    pause.classList.remove('active');
    updateProgress();
    progression = window.setInterval(updateProgress, 200);
    button.classList.add('active');
  } else {
    myVid.pause();
    active.classList.remove('active');
    pause.classList.add('active');
    clearInterval(progression);
    button.classList.remove('active');
  };
}
function updateVol(){
  var volume = this.value;
  myVid.volume = volume;
  if(volume<='0'){
    volumeMute.classList.toggle('volume-off');
    volumeMute.classList.toggle('volume');
  }
}
function updateRate(){
  var rate = this.value;
  myVid.playbackRate = rate;
}
function goFullScreen(){
  console.dir(myVid);
  if(myVid.webkitSupportsFullscreen) myVid.webkitEnterFullScreen();
}
function forward(){
  var value = Number(this.dataset.skip);
  myVid.currentTime = myVid.currentTime + value;
}
function updateProgress() {
  var progress = myVid.currentTime / myVid.duration;
  progressBar.style.flexBasis = Math.floor(progress * 1000) / 10 + '%';
}
function updateCurrentPos(e){
  var newProgress = (e.clientX - vidWrapper.offsetLeft) / vidWrapper.clientWidth;
  progressBar.style.flexBasis = Math.floor(newProgress * 1000) / 10 + '%';
  myVid.currentTime = newProgress * myVid.duration;
}

video.addEventListener('loadedmetadata', function() {
    length.innerText=getTimeCodeFromNum(video.duration);
});

function getTimeCodeFromNum(num) {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
    return `${String(hours).padStart(2, 0)}:${minutes}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
  }

setInterval(() => {
    const progressBar = document.querySelector(".progress");
    progressBar.style.width = video.currentTime / video.duration * 100 + "%";
    document.querySelector(".time .current").textContent = getTimeCodeFromNum(
      video.currentTime
    );
  }, 500);

function muteVol(){
            volumeMute.classList.toggle('volume-off');
            volumeMute.classList.toggle('volume');
        if(volumeMute.classList.contains('volume-off')){
            var volume = 0;
            myVid.volume = volume;
            controlVol.value = 0;
        } else{
            var volume = '1';
            myVid.volume = volume;
            controlVol.value = 1;
        }
}

volumeMute.addEventListener('click', muteVol);