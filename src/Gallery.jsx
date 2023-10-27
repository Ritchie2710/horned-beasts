import HornBeasts from "./HornBeasts";
import Data from "./data.json";

export default function Gallery({ handleShowModal, horns }) {
  const filterHorns = Data.filter((beast) => beast.horns === horns);
}
return (
  <div className="pics">
    {filterHorns.map((data) => {
      return (
        <HornBeasts
          id={data._id}
          title={data.title}
          image_url={data.image_url}
          alt={"image not shown"}
          description={data.description}
          handleShowModal={handleShowModal}
        />
      );
    })}
  </div>
);
