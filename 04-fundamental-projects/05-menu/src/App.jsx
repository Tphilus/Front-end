import { useState } from "react";
import Title from "./components/Title";
import menu from "./data";
import Menu from "./components/Menu";
import Categories from "./components/Categories";

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories);
// const tempItems = ['all', ...tempSet]
// console.log(tempItems);
const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
const App = () => {
  const [menuItem, setMenuItem] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log(category);
    if( category === "all") {
      setMenuItem(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category)
    setMenuItem(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItem} />
      </section>
    </main>
  );
};
export default App;
