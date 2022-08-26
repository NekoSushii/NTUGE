import React from 'react'
import 'animate.css';

function Home(){

  function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
  window.addEventListener("scroll", reveal);
  
return(
    <div>
      <div>
        <div className='bodytext-left'>
        <header className='header'>NTU Guitar Ensemble</header>
        <h1>About</h1>
        <p>The NTU Guitar Ensemble was founded in 1985, adopting the Niibori guitar system soon after and has established itself as one of the first guitar orchestras in Singapore. From the light and clear 
          notes of the Alto guitar to the rich deep sonority of the unique Guitarron, these guitars possess a full range of pitches and tones to achieve versatility in artistic expression across genres. 
          The ensemble is currently under the baton of our and instructor conductor Mr. Kevin Yeo.
          The NTU Guitar Ensemble participates in various performances within and outside NTU, where members gain exposure and performance experience. Aside from our annual concert, Nocturne, which showcases 
          an eclectic mix of genres and guitar styles, the ensemble regularly performs in campus as well as at public events, be it providing musical entertainment at official ceremonies, or taking part in 
          volunteer projects.</p>
        </div>
        <div className='imgcontainer-picture'>
            <div className='animate__zoomInRight'>
            <img src='img1.jpg' className='mainpageimg-right1'/>
            </div>
        </div>
      </div >
      <div>
        <p style={{opacity:'0%'}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
        qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
        <div className='container reveal'>
          <div className='bodytext-right'>
              <header className='header'> Why join NTUGE?</header>
              <p>The NTU Guitar Ensemble welcomes anyone interested in advancing their guitar skills with a group of likeminded individuals who have a passion in music and the guitar.
                At the end of each year, all members will perform together as an ensemble for the annual concert. Furthermore, guitars are provided so you don’t need to bring your own!</p>
            <h1>Training Schedules</h1>
            <h2>Monday and Wednesdays</h2>
            <p>1900 - 2200 hrs</p>
          </div>
          <div className='imgcontainer-picture'>
            <img src='test.png' className='mainpageimg-left1'/>
        </div>
        </div>
    </div>
)
}

export default Home