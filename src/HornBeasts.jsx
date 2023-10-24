export default function HornBeasts(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <img src={props.imageUrl} />
      <p>{props.description}</p>
    </>
  );
}
