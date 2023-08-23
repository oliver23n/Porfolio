import { FaGithub, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import { IconContext } from "react-icons";
// import './styles/Footer.css';

function Footer(){
    return(
        <footer className='d-flex justify-content-center flex-wrap  border-top border-danger p-2  w-100 position-fixed bottom-0'>
            <a href='#'>
                <FaGithub className='icons mx-3 '></FaGithub>
            </a>
            <a href='#'>
                <FaLinkedin className='icons mx-3 '></FaLinkedin>
            </a>
            <a href='#'>
               <FaTwitter className='icons mx-3 '></FaTwitter>
             </a>
            <div className='d-flex flex-direction-column mx-2'>
                <FaRegCopyright className='my-auto mx-2' />
                <h5 className='my-auto'>Oliver Nasevski 2023</h5>
            </div>
        </footer>
    )
};

export default Footer;


