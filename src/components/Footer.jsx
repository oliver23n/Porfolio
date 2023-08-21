import { FaGithub, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';
import './styles/Footer.css';

function Footer(){
    return(
        <footer className='d-flex justify-content-center  border-top border-danger p-2  w-100 position-fixed bottom-0'>
            <a href='#'>
                <FaGithub className='icons mx-3'></FaGithub>
            </a>
            <a href='#'>
                <FaLinkedin className='icons mx-3'></FaLinkedin>
            </a>
            <a href='#'>
                <FaTwitter className='icons mx-3'></FaTwitter>
            </a>
                <FaRegCopyright className='my-auto   mx-3'/>
                <h5 className='my-auto'>Oliver Nasevski</h5>
        </footer>
    )
};

export default Footer;