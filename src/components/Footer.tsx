import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import '../sass/_components/footer.scss';


const Footer = () => {
  return (
    <div className='footer'>
      <a target='_blank' href="https://www.instagram.com/leoantezana23/">
        <AiFillInstagram size={30} className='icon'/>
      </a>
      <a target='_blank' href="https://www.linkedin.com/in/leonardo-antezana-bba233197/">
        <AiFillLinkedin size={30} className='icon'/>
      </a>
      <a target='_blank' href="https://github.com/LeonardoAntezana">
        <AiFillGithub size={30} className='icon'/>
      </a>
    </div>
  )
}

export default Footer;