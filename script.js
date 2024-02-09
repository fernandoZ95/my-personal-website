// Any global scope variables will be added here //
const headerAnimation = document.querySelector('.headerAnimation');
const headerAnimation2 = document.querySelector('.header');
// Logo link is written in JS for quality purposes to ensure undisturbed positioning //
function clickLogo() {
    const logoLink = document.querySelector('#flatIronLink');
    
    logoLink.addEventListener('click', (e) => {
        const anchorTag = document.createElement('a');
        anchorTag.href = 'https://flatironschool.com'
        anchorTag.setAttribute('target', '_blank', "title=flatironschool.com")
        window.open(anchorTag)
    })
} 

clickLogo()

function setIntroAnimations() {
    const logoAnimation = document.querySelector('.logoAnimation');
    const logoAnimation2 = document.querySelector('.logoAnimationTwo');

     document.addEventListener('DOMContentLoaded', () => {
        headerAnimation.style.display = 'grid';
        headerAnimation.style.animation = 'loadingHeader 2s forwards';
     })

     headerAnimation.addEventListener('animationend', () => {
        logoAnimation.style.display = 'grid';
        logoAnimation.style.position = 'static'
        logoAnimation.style.animation = 'dropLogo 1s ease-out'
     }) 

     logoAnimation.addEventListener('animationend', () => {
      logoAnimation2.style.display = 'grid';
      logoAnimation2.style.animation = 'spinLogo 400ms forwards'
   }) 
} 

setIntroAnimations() 


  
  
  