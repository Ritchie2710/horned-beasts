import { useState } from "react";
export default function HornBeasts(props) {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <>
      <div key={`heresyourstupidkey${props.id}`}>
        <h2>{props.title}</h2>
        <img src={props.image_url} />
        <p>{props.description}</p>👍<p>0</p>
      </div>
    </>
  );
}
console.log;
