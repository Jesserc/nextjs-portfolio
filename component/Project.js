import Link from 'next/link';
import Image from 'next/image';
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import projectStyle from '../styles/Project.module.scss';
// import netflix from '../public/netflix.png';
import techcreek from '../public/tech-creek-build.png';
import Fade from 'react-reveal/Fade';

function Project() {
  return (
    <section className={projectStyle.project} id='projects'>
      <div className={projectStyle.project__content}>
        <Fade bottom duration={2000}>
          <span className={projectStyle.projectTitle}>
            <h2>My Projects </h2>
            <div className={projectStyle.hr}></div>
          </span>
        </Fade>

        <Fade bottom delay={500} duration={2500}>
          <div className={projectStyle.projects__container}>
            <div className={projectStyle.project__card}>
              <div className={projectStyle.project__thumbnail}>
                <Link href='https://techcreek-ng.vercel.app/'>
                  <a className={projectStyle.thumb} target="_blank" rel="noopener noreferrer">
                    <Image
                      src={techcreek}
                      layout='fill'
                      className={projectStyle.image}
                    />
                    <div></div>
                  </a>
                </Link>
              </div>
              <div className={projectStyle.project__description}>
                <h4>Techcreek Build</h4>
                <div className={projectStyle.textSummary}>
                  <span>
                  Rivers State ICT Department, Techcreek website UI clobne built based on reactJs, SASS and Nodejs
                    integrated with TMDB API for demo.<br />(responsive: NO)
                  </span>
                </div>
                <div className={projectStyle.technologies}>
                  <span>ReactJs Nodejs </span>
                </div>
                <div className={projectStyle.links}>
                  <Link href='https://techcreek-ng.vercel.app/' >
                    <a target="_blank" rel="noopener noreferrer">
                      <LaunchIcon />
                    </a>
                  </Link>
                  <Link href='https://github.com/Jesserc/techcreek-ng'>
                    <a target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default Project;
