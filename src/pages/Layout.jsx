import { Outlet, Link } from "react-router-dom";

function Layout() {
  
    return (
     <>
        <main className="d-flex flex-column min-vh-100">
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                            <Link to="/" className="nav-link text-white" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="about" className="nav-link text-white">About</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="contact" className="nav-link text-white">Contact</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="service" className="nav-link text-white">Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className=" container-fluid ">
                <Outlet />
            </div>

            <footer className="text-center text-white bg-black mt-auto"> 
                <div className="p-3 text-center">
                    <i>Copyright 2023 © <strong>Melchisideck Jordan U. Datuin</strong> All rights reserved.</i>
                </div>
            </footer>

        </main>
     </>
    )
  }
  
  export default Layout;