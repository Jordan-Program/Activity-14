import { useEffect  } from 'react'
import { Link } from 'react-router-dom';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import "../assets/styles.css";


function NotFound() {

  useEffect(() => {
    document.title = `Page Not Found - Activity 14`;
  });

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100" style={{background: "#222222"}}>
         <div className="d-flex flex-column align-items-center justify-content-center gap-5 py-5">
            <div class="glitch-wrapper">
               <div class="glitch" data-glitch="404 - Page Not Found">404 - Page Not Found</div>
            </div>
            <Link to="/"><AwesomeButton type="secondary">Home</AwesomeButton></Link>
            
         </div>
      </div>
      
    </>
  )
}

export default NotFound;