import "./driver-information.scss";

import personPhoto from "../../../public/person-photo.svg";
import star from "../../../public/star.svg";
import car from "../../../public/car.svg";

export default function DriverInformation() {
  return (
    <div className="container">
      <div className="icons-driver-car">
        <div className="driver-icon">
          <img className="person-photo" src={personPhoto} alt="a icon of person photo" width={137} height={137} />
          <div className="driver-photo-and-score">
            <div className="driver-score">
              <img src={star} alt="star icon" width={16} height={16} />
              5.0
            </div>
          </div>
          <p className="driver-name">Boris C.</p>
        </div>
        <img className="car" src={car} alt="icon of a car" width={286} height={111} />
      </div>
      <div className="car-informations">
        <h1 className="car-id">BCD0D19</h1>
        <h5 className="car-type">Honda Civic Roxo</h5>
      </div>
    </div>
  );
}
