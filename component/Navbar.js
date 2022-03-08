import Link from 'next/link';
import { Sling as Hamburger } from 'hamburger-react';
import FadeIn from 'react-fade-in';
import navStyles from '../styles/Navbar.module.scss';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [sidebar, setSidebar] = useState('false');

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <nav className={navStyles.nav}>
      <div>
        <span className={navStyles.logo}>
          <Link href='/'>
            <a>JR</a>
          </Link>
        </span>
        <div className={navStyles.links}>
          <ul className={sidebar ? navStyles.showSidebar : null}>
            <FadeIn className={navStyles.ulfade} transitionDuration={1500}>
              <li>
                <Link href='/#home'>
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href='/#about'>
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href='/#projects'>
                  <a>Projects</a>
                </Link>
              </li>
              <li>
                <Link href='/#contact'>
                  <a>Contact</a>
                </Link>
              </li>
            </FadeIn>
          </ul>
        </div>

        <span className={navStyles.hamburger} onClick={handleSidebar}>
          <FadeIn transitionDuration={1500}>
            <Hamburger
              size={25}
              toggled={isOpen}
              distance='lg'
              toggle={setOpen}
              color='#fff'
              duration={1.0}
            />
          </FadeIn>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
