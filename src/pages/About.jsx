import { useEffect  } from 'react'
import "../assets/styles.css";

function About() 
{
    useEffect(() => 
    {
      document.title = `About page - Activity 14`;
    });
  
    return (
      <>
      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div class="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              This is about page!
            </text>
          </svg>
        </div>
      </div>
   </>
    )
  }
  
    export default About;