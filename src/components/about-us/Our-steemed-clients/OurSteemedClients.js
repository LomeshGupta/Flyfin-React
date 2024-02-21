import OurEsteemed from "../../../json/abut-us/OurEsteemed.json"
import "./ourEsteemed.scss"
export default function OurSteemedClients() {
  return (
    
    <>
    <section className="ourEsteemed">
        <div className="container pb-4 pt-5">
            <div className="row mt-3 pb-5">
                <h3 className="mb-3 text-center">Our Esteemed Clients</h3>
                <p className='text-center mb-5'>We believe in quality standards ‘not below the level of excellence’ for each of our clients. Through our constant zeal to always deliver the best, we have been able to achieve long term partnerships with leaders in their respective industries, including:</p>
               {
                OurEsteemed?.map((item, index)=>(
                    <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="card h-100 card-body">
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))
               }
            </div>
        </div>
    </section>
    </>
  )
}
