let docTitle = document.title;
window.addEventListener("blur", ()=>{
  document.title = "I'm here!";
});
window.addEventListener("focus", ()=>{
  document.title = docTitle;
})

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

let times = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,1.9,2.0,2.1,2.2];

for (let i = 0; i < times.length; i++) {
  document.querySelector('.intro:nth-child(' + (i + 1) + 'n)').style.animation =
    'fade-in 0.8s ' + times[i] + 's forwards cubic-bezier(0.11, 0, 0.5, 0)';
}

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})
function SendMail(){
  event.preventDefault();
  var params ={
    from_name : document.getElementById("fullname").value,
    email_id : document.getElementById("email-id").value,
    message : document.getElementById("message").value
  }
  
  const serviceID = "service_uzy3k87";
  const templateID = "template_btcihm8";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("fullname").value = "";
        document.getElementById("email-id").value = "";
        document.getElementById("message").value = "";
        console.log(res);

    })
    .catch(err=>console.log(err));

    const button = document.getElementById("form-button");
    button.innerText = "Thanks!";
}

