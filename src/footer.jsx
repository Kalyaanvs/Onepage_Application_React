import NavImg from "./images/NavImg.png";
import Insta from "./images/insta.png";
import Face from "./images/face.png";
import X from "./images/x.png";
import LinkedIn from "./images/linkedin.png";
export default function Footer() {
    return (
        <div style={{ backgroundColor: "#1E4C45", color: "white" }}>
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-4">
                    <div className="d-flex align-items-center gap-2 mb-3 mb-md-0">
                        <img src={NavImg} alt="logo" style={{ height: "40px" }} />
                        <h4 className="mb-0">JustHome</h4>
                    </div>
                    <div className="d-flex gap-3"> 
                        <img src={Insta} alt="Instagram" style={{ height: "24px", width: "24px" }} />
                        <img src={Face} alt="Facebook" style={{ height: "24px", width: "24px" }} />
                        <img src={X} alt="X" style={{ height: "24px", width: "24px" }} />
                        <img src={LinkedIn} alt="LinkedIn" style={{ height: "24px", width: "24px" }} />
                    </div>  

                </div>

                <div className="row text-center text-md-start gap-md-4  py-4">
                    
                   <div className="col-6 col-md-3 ">
                       <h6>Subscribe</h6>
                        <div className="input-group">
                            <p>Your e-mail</p>
                            <p>Send</p>
                        </div>
                        <p className="small">
                            Subscribe to our newsletter to receive our weekly feed.
                        </p>
                   </div>

                   <div className="col-6 col-md-2">
                     <h6>Discover</h6>
                     <ul className="list-unstyled small">
                        <li>Miami</li>
                        <li>New York</li>
                        <li>Chicago</li>
                        <li>Florida</li>
                        <li>Los Angeles</li>
                        <li>San Diego</li>
                     </ul>
                   </div>

                   <div className="col-6 col-md-3 ">
                     <h6>About</h6>
                     <ul className="list-unstyled small">
                        <li>About</li>
                        <li>Contact</li>
                        <li>FAQ's</li>
                        <li>Blog</li>
                        <li>Pricing Plans</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                     </ul>
                   </div>

                   <div className="col-6 col-md-3">
                        <h6>Contact Us</h6>
                       <ul className="list-unstyled small">
                         <li>hi justhome.com</li> 
                         <li>(123) 456-7890</li> 
                       </ul>
                   </div>

                    <div className="col-6 col-md-3">
                        <h6>Our Address</h6>
                        <ul className="list-unstyled small">
                            <li>99 Fifth Avenue, 3rd Floor</li>
                            <li>San Francisco, CA 1980</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};