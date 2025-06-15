import { ThemeProvider, useTheme } from "./context";

function ParentComponent() {
  return (
    <ThemeProvider>
      <Component />
    </ThemeProvider>
  );
}

function Component() {
  const context = useTheme();
  console.log(context);

  const setTheme = () => {
    if (context.theme === "dark") {
      context.setTheme("system");
      return;
    }
    context.setTheme("dark");
  };

  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Context API</h2>
      <button onClick={setTheme} className=" btn btn-center">
        toggle theme
      </button>
    </div>
  );
}
export default ParentComponent;
