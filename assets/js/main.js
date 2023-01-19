/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 25 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews= document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button')
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i)=>{
    mb.addEventListener('click', () =>{
        modal(i)
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click', ()=>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== SWIPER AWARDS ===============*/
let swiperAward = new Swiper(".award__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay:700})
sr.reveal(`.home__social, .home__scroll`, {delay:900, origin: 'bottom'})


/*=============== EMAIL JS ===============*/
function validate(){
    let name = document.querySelector(".name")
    let email = document.querySelector(".email")
    let message = document.querySelector(".messagae")
    let sendbtn = document.querySelector(".sendbtn")

sendbtn.addEventListener('click', (e) => {
    e.prventDefault();
    if (name.value=="" || email.value=="" || message.value=="") {
        emptyeror();
    } else{
        sendmail(name.value, email.value, message.value);
        success();
    }
}); 
}

validate();

function sendmail(name,email,message){
    emailjs.send("service_zt1x6ag","template_dhg3xsf",{
        from_name: email,
        to_name: name,
        message: message,
    });
}

function success() {
    swal({
        title: "Message Sent!",
        text: " You'll get a reply soon!!",
        icon: "success",
        button: "Back to Page!",
      });
}