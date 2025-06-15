import { type PropsWithChildren } from "react";
// interface Props {
//   name: string;
//   id: number;
//   children: React.ReactNode;
// }

type Props = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: Props) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
      {children}
    </div>
  );
}
export default Component;
