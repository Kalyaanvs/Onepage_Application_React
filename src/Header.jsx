import { IoIosSearch } from "react-icons/io";
import BGImage from "./images/Mainp.jpg";

export default function Header() {
    return (
        <div>
            <style>{`
                .container {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }

                .container-bg-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .img-body {
                    position: absolute;
                    top: 20%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 90%;
                    text-align: center;
                    color: black;
                }

                .container-button {
                    padding: 9px 20px;
                    border: 1px solid black;
                    border-radius: 40px;
                    font-size: 18px;
                    font-weight: bold;
                    cursor: pointer;
                    background-color: rgba(255, 255, 255, 0.5);
                }
                .buttons button
                { 
            
                    background-color: #B09A76;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 40px;
                    font-size: 13px;
                    cursor: pointer;
                    margin :5px;
                    
                }
                .search-box {
                    position: relative;
                    width: 400px;
                    margin: 35px auto 0;
                }

                .search-box input {
                    width: 100%;
                    font-size: 15px;
                    border-radius: 40px;
                    border: none;
                    padding: 18px 55px 18px 20px;
                    outline: none;
                    box-sizing: border-box;
                }

                .search-icon {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size:30px;
                    font-weight: bold;                    
                    color: black;
                    cursor: pointer;
                    background-color:	#fff1cc;
                    border-radius: 50px;
                    border: none;
                }
            `}</style>

            <div className="container">
                <img 
                    src={BGImage}
                    alt="Home background"
                    className="container-bg-image"
                />    

                <div className="img-body">
                    <button className="container-button">
                        LET US GUIDE YOUR HOME
                    </button>

                    <h1 style={{ paddingTop: "23px", fontSize: "38px",color:"#212529" }}>Believe In Finding It</h1>
                    <p style={{ fontSize: "16px", paddingTop: "13px", color: "GrayText" }}>Search properties for sale and to rent in the UK</p>
                   <div className="search-box">
                    <input
                        type="text"
                        placeholder="Enter Name, Keywords..."  
                        
                    /><IoIosSearch className="search-icon"/>
                 </div>     

                    <h3 style={{ paddingTop: "20px", color: "white", marginBottom:"5px" }}>What are you looking for </h3>
                    <div className="buttons">
                        <button>Modern Villa</button>
                        <button>Apartment</button>
                        <button>Town House</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
