import { useState } from "react";

interface Link {
  id: number;
  url: string;
  text: string;
}

const navLinks: Link[] = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "somehow url",
    text: "some two text",
  },
  {
    id: 3,
    url: "somewhere url",
    text: "some three text",
  },
];

function Component() {
  const [text, setText] = useState<string>("ShakeAndBake");
  const [number, setNumber] = useState<number>(1);
  const [list, setList] = useState<string[]>([]);
  const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className=" mb-1">React & Typescript</h2>
      <button
        className=" btn btn-center"
        onClick={() => {
          // setList(["Hello ", "world"]);
          setLinks([...links, { id: 4, url: "hello", text: "World" }]);
        }}
      >
        click me
      </button>
    </div>
  );
}
export default Component;
