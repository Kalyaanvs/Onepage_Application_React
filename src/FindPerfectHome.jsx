import Img from './images/img.png';
import Emoji1 from './images/emoji.png';
import Emoji2 from './images/emoji2.png';
import Emoji3 from './images/emoji3.png'; 
export default function FindPerfectHome()
{

    return(
    <div className="container my-5 py-5">
        <div className="row  align-items-center g-4">
            <div className="col-12 col-md-6 text-center"><img src={Img} alt="Home" className="img-fluid"/></div>
            <div className="col-12 col-md-6 text-md-end text-center">
                <div className="mb-4 pb-2 border-bottom">
                     <h3 className="mb-4 pb-2">How It Works?</h3>
                     <h4 className="">Find your perfect home</h4>
                     <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                     <p>Donec vel libero nec nisi tincidunt tincidunt.</p>
                </div>
                {[
                    {img:Emoji1, title:"Find A Real Estate"},
                    {img:Emoji2, title:"Meet Realtor"},
                    {img:Emoji3, title:"Take The Keys"}

                ].map((item, index)=>(
                    <div key={index} className="d-flex align-items-start justify-content-md-end justify-content-center gap-3 mb-3">
                        <img src={item.img} alt="emoji" style={{width:"40px", height:"40px"}}/>
                        <div className="text-start">
                            <strong>{item.title}</strong>
                            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur</p>
                            <p className="mb-0">adipiscing elit. Donec</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    </div>
)
}