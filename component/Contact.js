import contactStyles from '../styles/Contact.module.scss';
import Fade from 'react-reveal/Fade';
const Contact = () => {
  return (
    <section className={contactStyles.contact} id='contact'>
      <div className={contactStyles.contact__container}>
        <div className={contactStyles.contact__heading}>
          <Fade bottom duration={2000}>
            <h4>Oh! Please Say Hi</h4>
          </Fade>
          <Fade bottom delay={500} duration={2000}>
            <p>
              I am looking for new opportunities, my inbox is always open.
              Whether you have a question or just want to say hi, I'll surely
              get back to you!
            </p>
          </Fade>
        </div>

        <Fade bottom delay={1000} duration={2000}>
          <form>
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email Address' />
            <textarea name='' id='' placeholder='Type in message'></textarea>
            <button>Send Message</button>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
