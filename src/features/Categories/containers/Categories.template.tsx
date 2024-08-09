import { useState } from "react";
import { Category } from "../types/category.type";
import Button from "~/common/components/button/Button";

const CategoriesTemplate = ({ data }: { data: Category[] }) => {
  const CATEGORIES_PREVIEW_COUNT = 3;
  const [showCategories, setShowCategories] = useState(false);

  const onClick = () => {
    setShowCategories(!showCategories);
    setCount((prevCount) =>
      prevCount === data.length ? CATEGORIES_PREVIEW_COUNT : data.length
    );
  };
  const [count, setCount] = useState(CATEGORIES_PREVIEW_COUNT);

  const list = data.slice(0, count).map((category) => (
    <li className="categories__list-item" key={category.id}>
      <Button
        onClick={() => {
          console.log(category);
          setShowCategories(false);
        }}
        variant="text"
      >
        {category.name}
      </Button>
    </li>
  ));

  const text = `${
    data.length > CATEGORIES_PREVIEW_COUNT && showCategories ? "Hide" : "Show"
  } Categories`;

  return (
    <nav className="categories">
      <Button className="categories__button" variant="text" onClick={onClick}>
        {text}
      </Button>
      <ul className={`categories__list ${showCategories ? "open" : "close"}`}>
        {list}
      </ul>
    </nav>
  );
};

export default CategoriesTemplate;
