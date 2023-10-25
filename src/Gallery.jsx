import HornBeasts from "./HornBeasts";
import Data from "./data.json";
export default function Gallery() {
  return (
    <>
      <div className="pics">
        {Data.map((data) => {
          return (
            <HornBeasts
              id={data._id}
              image_url={data.image_url}
              alt={"image not shown"}
              description={data.description}
              title={data.title}
            />
          );
        })}
      </div>
    </>
  );
}
