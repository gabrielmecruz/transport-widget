import "./App.scss";
import ContactDriver from "./components/contact-driver/contact-driver";
import DriverInformation from "./components/driver-information/driver-information";
import TitleDriver from "./components/title-driver/title-driver";

function App() {
  return (
    <main className="main">
      <div className="bar-slide"></div>
      <TitleDriver />
      <DriverInformation />
      <ContactDriver />
    </main>
  );
}

export default App;
