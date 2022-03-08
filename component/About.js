import Image from 'next/image';
import profilePic from '../public/jesse.png';
import Fade from 'react-reveal/Fade';
import aboutStyle from '../styles/About.module.scss';
 
function About() {
  return (
    <section className={aboutStyle.about} id='about'>
      <div className={aboutStyle.aboutContent}>
        <Fade bottom duration={2500} delay={500}>
          <span className={aboutStyle.aboutTitle}>
            <h2>About Me</h2>
            <div className={aboutStyle.hr}></div>
          </span>
        </Fade>

        <div className={aboutStyle.aboutBox}>
          <Fade bottom duration={2000} delay={1000}>
            <div className={aboutStyle.aboutBox_text}>
              <p>
                Hello! My name is Jesse, I love building things that live
                on the internet. My interest in web development started back in
                2020 when I decided to start coding and i've been passion driven ever since.
              </p>
              <p className={aboutStyle.hide}>
                {/* Speed-up to today, I've had the privilege of working at a
                tech-charity community and as a{' '}
                <strong>Frontend Devloper</strong>. */} My main focus these days is
                building accessible, inclusive, web products for a variety of
                clients.
              </p>
              <p>
                Here are a few technologies I've been working with recently:
              </p>
              <ul>
                <li>
                  <div></div> JavaScript (ES6+)
                </li>
                <li>
                  <div></div> React
                </li>
                <li>
                  <div></div> NodeJS
                </li>
                <li>
                  <div></div> NextJS
                </li>
                <li>
                  <div></div> Html 5
                </li>
                <li>
                  <div></div> CSS/SCSS
                </li>
              </ul>
            </div>
          </Fade>

          <Fade bottom duration={3000} delay={1000}>
            <div className={aboutStyle.image} style={{marginBottom: '10%'}}>
              <Image src={profilePic} alt='Picture of the author' />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;
