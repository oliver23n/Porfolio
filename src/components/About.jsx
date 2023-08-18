
import Figure from 'react-bootstrap/Figure';
import profilePic from './images/pic.png'
function About (){
   return(
    
    <div className='m-5 p-20'>

    <section id ='about' className='d-flex flex-lg-row flex-column justify-content-between'>
           <Figure className=''>
               <Figure.Image
                    className='img-fluid'
                       roundedCircle
                       thumbnail
                   alt="profile Pic"
                   src={profilePic}
                   />
               <Figure.Caption>
                   <h1>Oliver Nasevski</h1>
               </Figure.Caption>
           </Figure>
               <div className='p-2 m-2'>
            <h2>About.</h2>
            <p >
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, unde facere odio necessitatibus ea corrupti, sapiente cupiditate id quisquam natus, officia laudantium reiciendis eum beatae quas molestias magni nesciunt officiis.
               Tenetur ab sapiente quos inventore assumenda, reprehenderit nesciunt eos odio dolorem quidem, quae corrupti id vitae illum, quam autem? Omnis minima possimus fuga? Voluptate, reiciendis! Illo quidem ipsa tenetur veniam.
               Itaque consequuntur quaerat sit eligendi tempore ea. Molestiae porro dolore dignissimos deleniti beatae aliquid, rem nisi doloribus sint maiores nobis voluptatum fugiat quis veritatis vel, doloremque nam ipsa repellat eius.
            </p>
           </div>
    </section>
    </div>
   )
};

export default About;