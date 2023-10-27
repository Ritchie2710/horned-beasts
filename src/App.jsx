import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Gallery from "./Gallery";
import { useState } from "react";
import SelectedBeasts from "./selectedBeasts";
import data from "./data.json";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showBeasts, setshowBeasts] = useState({});
  const [horns, setHorns] = useState("");

  function handleShowModal(event) {
    setShowModal(!showModal);
    setshowBeasts(event.target.src);
    console.log(event.target.src);
  }

  function handlefilter(event) {
    setHorns(event.target.value);
  }
  return (
    <div>
      <select onChange={handlefilter}>
        <option value="">All</option>
        <option value="2">2</option>
        <option value="100">100</option>
      </select>
      <Header />
      <Gallery data={data} handleShowModal={handleShowModal} horns={horns} />
      {showModal && <SelectedBeasts showBeasts={showBeasts} />}
      <Footer />
    </div>
  );
}
export default App;
