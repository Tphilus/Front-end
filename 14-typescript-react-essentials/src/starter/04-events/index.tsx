import { useState } from "react";
import { string } from "zod/v4";

type Person = {
  name: string;
}

function Component() {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    // const fromData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    console.log(data);

    const text = formData.get('text') as string
    const person:Person = {name: data.text as string }
  };

  return (
    <section>
      <h2>events example</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          name="text"
          className=" form-input mb-1"
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="email"
          value={email}
          name="email"
          className=" form-input mb-1"
          onChange={handleChange}
        />

        <button type="submit" className=" btn btn-block">
          submit
        </button>
      </form>
    </section>
  );
}
export default Component;
