import { useState } from "react";
import { Category } from "../types/category.type";

const CategoriesTemplate = ({ data }: { data: Category[] }) => {
  const [showCategories, setShowCategories] = useState(false);
  const onClick = () => setShowCategories((prevState) => !prevState);

  const list = data.map((category) => (
    <li className="categories__list-item" key={category.id}>
      <button onClick={() => console.log(category)}>{category.name}</button>
    </li>
  ));
  return (
    <nav className="categories">
      <button className="categories__button" onClick={onClick}>
        Categories
      </button>
      <ul className={`categories__list ${showCategories ? "open" : "close"}`}>
        {list}
      </ul>
    </nav>
  );
};

export default CategoriesTemplate;
