import HornBeasts from "./HornBeasts";

export default function Gallery({ data, handleShowModal, horns }) {
  const filterHorns = data.filter(
    (beast) => beast.horns == horns || horns === ""
  );
  console.log(data);
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
}
