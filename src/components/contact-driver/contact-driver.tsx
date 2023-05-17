import "./contact-driver.scss";

import shield from "../../../public/shield-icon.svg";
import phone from "../../../public/phone-icon.svg";

export default function ContactDriver() {
  return (
    <div className="container contact">
      <input className="input-send-message" type="text" name="sendMessage" id="sendMessage" placeholder="Enviar mensagem para Boris..." />
      <div className="emergency-icons">
        <img className="phone" src={phone} alt="icon of a phone" width={48} height={48} />
        <img className="shield" src={shield} alt="icon of a shield" width={46} height={48} />
      </div>
    </div>
  );
}
