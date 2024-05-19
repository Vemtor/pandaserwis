const header = document.querySelector("header");
const btn = document.getElementById("toscroll");
const lokaliacja = document.getElementById('godziny-otwarcia-kontakt');
const body = document.getElementsByTagName('body')[0];
const hamburger = document.getElementById("checkbutton");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0 );
});

btn.addEventListener("click", function(){
    header.classList.toggle("sticky");
    lokaliacja.scrollIntoView({
        behavior: 'smooth'
    });
})


document.addEventListener("DOMContentLoaded", function () {
    const checkbtn = document.querySelector('.checkbtn');
    const mobileMenu = document.querySelector('.navbar-mobile');
    let open = 0;

    checkbtn.addEventListener('click', function () {

        if(open === 0){
        mobileMenu.classList.remove('hidden');
        body.classList.remove('hidden');
        hamburger.classList.remove('hidden');
        mobileMenu.classList.add('active');
        body.classList.add('active');
        hamburger.classList.add('active');

        

            open=1;
        } else{
            mobileMenu.classList.remove('active');
            mobileMenu.classList.add('hidden');
            open = 0;
            body.classList.remove('active');
            body.classList.add('hidden');
            hamburger.classList.remove('active');
            hamburger.classList.add('hidden');
            
        }

    });


    const navLinks = document.querySelectorAll('.navbar-mobile a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            mobileMenu.classList.add('hidden');
            body.classList.remove('active');
            body.classList.add('hidden');
            hamburger.classList.remove('active');
            hamburger.classList.add('hidden');

        });
    });
});

