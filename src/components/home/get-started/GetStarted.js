import { started } from "../../../shared/get-started/getStarted";
import { BsArrowRight } from "react-icons/bs";
import "./getStarted.scss";
import { Link } from "react-router-dom";
const pageScroll  = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function GetStarted() {
  return (
    <>
      <div className="row g-0 getStarted-container">
        {started?.map((item, index) => (
          <div className="col-md-4 mb-5 new" key={index}>
            <div
              className={`card pt-4 pb-5 px-4 text-white ${
                index == 0 || index == 2
                  ? "get-StartedBgColor-odd"
                  : "get-StartedBgColor-even"
              }`}
            >
              <div className="card-body">
                <p className="getStarted-Icon text-white mb-3 text-white">
                  <item.getIcon fontSize="5em" />
                </p>
                <h2 className="getStartedTitle text-white mb-3">
                  {item.title}
                </h2>
                <p className="getStrtedText mb-4">{item.text}</p>
                <Link className="link-style" to={`${item.link}`} onClick={pageScroll}>
                <button className="border-0 py-2">{item.linkName} <BsArrowRight /></button>
                          </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
