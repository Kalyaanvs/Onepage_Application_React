import { FaHouse, FaHouseUser, FaUsers } from "react-icons/fa6";
export default function WorkWithUs(){
    const works = [{
        image:<FaHouse />,
        Title: "Wide Range of Properties",
        Content: "We offer expert legal help for all related property items in Dubai."
        },
        {
         image:<FaHouseUser />,
         Title: "Buy Or Rent Homes",
         Content: "We sell your home at the best market price and very quickly as well."
        },
        { 
         image:<FaUsers />,
         Title: "Trusted by Thousands",
         Content: "We offer you free consultancy to get a loan for your new home." 
        }
    ]
    return(
        <>
           <style>
    {`
    
        .heading-container {
            margin-top: 40px;
            text-align: center;
            margin-bottom: 30px;
        }

        .heading-container h1 {
            font-size: 26px;
            margin-bottom: 10px;
            color: #212529;
            font-weight:500;
        }

        .heading-container h3 {
            font-size: 18px;
            font-weight: normal;
            color:gray;
        }
        
        .workwithus{
          display: flex;
          justify-content: space-around;
          gap:20px;
          text-align:center;
          
        }
          .workcontent{
            padding:20px;
            flex: 1;
          }
          .work-title{
             font-size:23px;
             color: #212529;
             font-weight:450;
             

             
          }
         .work-content{
            font-size: 18px;
            font-weight: normal;
            padding-top:15px;
            color:gray;        
         }
        .iconofwork{
           
            height: 64px;
            margin-bottom: 16px;
            font-size: 56px;
             line-height: 1;
        }
    `}
</style>
       <div className ="container">
       
           <div className="heading-container">
                <h1>Why You Should Work With Us</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
           </div>
           <div className="workwithus">
            {works.map((works, index) => (
                <div className="workcontent" key={index}>
                    <div className="icon-content">
                       <div  className="iconofwork">{works.image}</div>
                        <h2 className="work-title">{works.Title}</h2>
                        <h3 className="work-content">{works.Content}</h3>
                    </div>
                </div>
            ))}
             
           </div>
       </div>
       </>
    );

}