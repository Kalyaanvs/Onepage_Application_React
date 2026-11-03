import img1 from "./images/room1.png";
import img2 from "./images/room2.png";
import img3 from "./images/room3.png";
import img4 from "./images/room4.png";
import img5 from "./images/room5.png";
import img6 from "./images/room6.png";

export default function Products() {
    const button="See All Listing >"
    const img = [img1,img2,img3,img4,img5,img6]
   const properties = [{
    title: "Luxury Family Home",
    address: '1800-1818 79th St',
    price: '$395  ,000'
  },
  {
    title: 'Skyper Pool Apartment',
    address: "1020 Bloomingdale Ave",
    price: "$280,000"
  },
  {
    title: 'North Dillard Street',
    address: "4330 Bell Shoals Rd",
    price: "$250"
  },
  {
    title: 'Eaton Garth Penthouse',
    address: "7722 18th Ave, Brooklyn",
    price: "$180,000"
  },
  {
    title: 'New Apartment Nice Wiew',
    address: "42 Avenue O, Brooklyn",
    price: "$850"
  },
  {
    title: 'Diamond Manor Apartment',
    address: "7802 20th Ave, Brooklyn",
    price: "$259,000"
  }
  ]   
   return (
        <>
            <style>{`
            .container-properties{
              margin-top:40px;
            }
            .properties-des h2{
               
                text-align:center;
                margin:10px;
                font-size:30px;
                color: #212529;
                font-weight:450;
                
            }
            .properties-des h3{
               
                font-weight: normal;
                text-align:center;
                margin:15px
                
            }
            .details-btn{
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  gap: 10px;
                  margin:50px;
            }
            .details-btn button
            {
                display:absolute;
                padding: 5px 15px;
                border: 1px solid black;
                border-radius: 40px;
                font-size: 17px;
                cursor: pointer;
                margin :5px;
                background-color:white;
            }
            .details-btn button:hover{
               background-color: black;
               color: white;
            }
            .large-container {
                display: grid;
                grid-template-columns: repeat(3, minmax(0, 1fr));
                gap: 10px;
                width: 95%;
                margin-left:30px;
            }

            .small-container {
                min-width: 0;
                display: flex;
                flex-direction: column;
                position:relative;
            }

            .img-property {
                width: 100%;
                height: 350px;
                object-fit: cover;
                border-radius: 10px;
            }        
            .property-img-deteils{
               position: absolute;
                bottom: 15px;
                left: 5%;
                width: 80%;
                background: white;
                padding: 20px;
                border-radius: 15px;
                z-index: 1;

            }
                .small-container span
                {
                  color:gray;
                  padding-left:7px;
    
                }
                  .seealllisting{
                    border: 1px solid black;
                    border-radius:40px;
                    font-size:15px;
                    background-color:white;
                    padding:5px 10px ;
                   
                 }
                  .seealllisting:hover{
                        cursor:pointer;
                        background-color:black;
                        color:white
                  }

    
    `}</style>
            <div className="container-properties">
                <div className="properties-des">
                    <h2>Featured Properties</h2>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                </div>
                <div className="details-btn">
                    <button>All Properties</button>
                    <button>For Sale</button>
                    <button>For Rent</button>
                </div>
                <div className='large-container'>
                    {
                        properties.map((data,index)=> 
                        <div key={index} className="small-container">
                            <img src={img[index]} alt="img" className="img-property"/>
                            <div className="property-img-deteils">
                                <p style={{fontSize:"20px",}}>{data.title}</p>
                                <p style={{color:"gray"}}>{data.address}</p>
                                <p style={{color:"red",display:"inline"}}>{data.price}                                </p>

                                       <span>🛏 4</span>
                                        <span>🛁 1</span>
                                        <span>📐 400 sqft</span>
                            </div>
                           
                            
                        </div>
                        )}
                         

                </div>
                <div style={{display:"flex", justifyContent:"center", paddingTop:"40px"}}>
                                <button className="seealllisting">{button} </button>
                                
                </div>
            </div>
        </>
    )
}