// Any global scope variables will be added here //
const headerAnimation = document.querySelector('.headerAnimation')
const logoAnimation = document.querySelector('.logoAnimation')
const header = document.querySelector('.header')
const contentModalLayOut = document.querySelector('div.contentLayOutModal')
// Logo link is written in JS for quality purposes to ensure undisturbed positioning //
function clickLogo() {
    const logoLink = document.querySelector('#flatIronLink');
    
    logoLink.addEventListener('click', () => {
        const anchorTag = document.createElement('a');
        anchorTag.href = 'https://flatironschool.com'
        anchorTag.setAttribute('target', '_blank', "title=flatironschool.com")
        window.open(anchorTag)
    })
} 

clickLogo()

/* UPDATED ANIMATION LOGIC  &&

--- KeyframeEffect Constructors */

const spinLogoKeyFrames = new KeyframeEffect(null,
   [
   {transform: 'rotate(0deg)'}, // keyframes //
   {transform: 'rotate(360deg)'},
 ],
 {duration: 400, fill: 'forwards'}, // keyframe options //
);
const spinLogoAnimation = new Animation(spinLogoKeyFrames)
spinLogoAnimation.pause()


const slidingHeaderKeyFrames = new KeyframeEffect(header,
   [
   {transform: 'translateX(0)', opacity: .99}, // keyframes //
   {transform: 'translateX(100%)', opacity: 0},
],
   {duration: 400, fill: 'forwards', delay: 700}, // keyframe options //
);
const slidingHeaderAnimation = new Animation(slidingHeaderKeyFrames)
slidingHeaderAnimation.pause()

const contentModalKeyFrames = new KeyframeEffect(null, 
   [
   {opacity: 0},
   {display: 'grid', opacity: .99},
],
{duration: 1000, fill: 'forwards', delay: 300},
); 

const contentModalAnimation = new Animation(contentModalKeyFrames);
contentModalAnimation.pause()

// AnimationCycles object of animation functions // 

const animationCycles = {
   setAnimation1: () => {
      document.addEventListener('DOMContentLoaded', () => {
         headerAnimation.style.display = 'grid';
         headerAnimation.style.animation = 'loadingHeader 1s forwards'
      })
   }, 

   setAnimation2: () => {
      headerAnimation.addEventListener('animationend', () => {
         logoAnimation.style.display = 'grid';
         logoAnimation.style.animation = 'dropLogo 1s forwards'
       })
   },

   setAnimation3: () => {
     logoAnimation.addEventListener('animationend', () => {
      
      if(logoAnimation) {
         spinLogoKeyFrames.target = logoAnimation
         spinLogoAnimation.play()
         slidingHeaderAnimation.play()
      }
     })
   },
   setAnimation4: () => {
      // Removing display property from header after the animation cycle is finished //
      slidingHeaderAnimation.onfinish = () => {
         console.log(slidingHeaderKeyFrames.getKeyframes())
         console.log(slidingHeaderAnimation.currentTime)

         if(slidingHeaderAnimation.currentTime === 1100) {
            slidingHeaderKeyFrames.setKeyframes([
               {display: 'none'},
            ]);
            if(contentModalLayOut) {
               contentModalKeyFrames.target = contentModalLayOut
               contentModalAnimation.play()
               console.log(contentModalKeyFrames.getKeyframes())
            }
         }
      }
   }
}

const {setAnimation1, setAnimation2, setAnimation3, setAnimation4} = animationCycles

setAnimation1()
setAnimation2()
setAnimation3()
setAnimation4()