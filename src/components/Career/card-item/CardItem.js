import { careerCardItem } from "../../../shared/Career/card";
import "./cardItem.scss"

export default function CardItem() {
  return (
    <>
      <section className="cardItem pt-5 pb-5">
        <div className="container mt-5">
            <div className="row">
          {careerCardItem?.map((item, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div className="card h-100 card-body">
                <p className="icon text-center">
                  <item.icon />
                </p>
                <h3 className="title text-center">{item.title}</h3>
                <p className="desc text-center">{item.desc}</p>
              </div>
            </div>
          ))}

            </div>
        </div>
      </section>
    </>
  );
}
