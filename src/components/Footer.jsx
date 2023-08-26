import { FaGithub, FaLinkedin, FaRegCopyright, FaTwitter } from 'react-icons/fa';

function Footer(){
    return(
        <footer className='d-flex justify-content-center flex-wrap  border-top border-danger p-2 '>
            <a href='https://github.com/oliver23n'>
                <FaGithub className='icons mx-3 '></FaGithub>
            </a>
            <a href='https://www.linkedin.com/in/oliver-nasevski/'>
                <FaLinkedin className='icons mx-3 '></FaLinkedin>
            </a>
            <a href='https://twitter.com/oliverrr23#'>
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


