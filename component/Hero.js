import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import Link from 'next/link';
import heroStyle from '../styles/Hero.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Hero = () => {
  return (
    <>
      <section className={heroStyle.hero} id='home'>
        <div className={heroStyle.hero_container}>
          <Fade bottom duration={2000} delay={300}>
            <p>Hello, my name is </p>
            <h1>Jesse Raymond.</h1>
            <h2>I'm a frontend developer</h2>
            <p className={heroStyle.aboutText}>
              I am a frontend developer specializing in building user friendly
              web applications. Currently, I am focused on building
              accessible, human-centered products.
            </p>
            <Link href='/#contact'>
              <a>
                <button>Get In Touch</button>
              </a>
            </Link>
          </Fade>

          {/* social media icons */}
          <Pulse delay={1000} duration={2000} forever={true}>
            <div className={heroStyle.socialIcons}>
              <div></div>

              <Link href='https://mobile.twitter.com/jesserc_'>
                <a target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
              </Link>

              <Link href='https://www.instagram.com/jesserc_/'>
                <a target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
              </Link>
              <Link href='https://www.linkedin.com/in/jesse-raymond4/'>
                <a target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
              </Link>
              <Link href='https://github.com/Jesserc'>
                <a target="_blank" rel="noopener noreferrer">
                  <GitHubIcon />
                </a>
              </Link>
            </div>
          </Pulse>
        </div>
      </section>
    </>
  );
};

export default Hero;
