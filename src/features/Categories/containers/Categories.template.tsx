import { useState } from "react";
import { Category } from "../types/category.type";
import Button from "~/common/components/button/Button";

const CategoriesTemplate = ({ data }: { data: Category[] }) => {
  const CATEGORIES_PREVIEW_COUNT = 3;
  const [showCategories, setShowCategories] = useState(false);
  const onClick = () => {
    setCount((prevCount) =>
      prevCount === data.length ? CATEGORIES_PREVIEW_COUNT : data.length
    );
  };
  const [count, setCount] = useState(3);

  const hasMoreCategories = data.length > CATEGORIES_PREVIEW_COUNT;
  const dataPreview = hasMoreCategories ? data.slice(0, count) : data;

  const list = dataPreview.map((category) => (
    <li className="categories__list-item" key={category.id}>
      <Button
        onClick={() => {
          console.log(category);
          setShowCategories(false);
        }}
        variant="secondary"
      >
        {category.name}
      </Button>
    </li>
  ));

  return (
    <nav className="categories">
      <Button className="categories__button" variant="text">
        Categories
      </Button>
      <ul className="categories__list">{list}</ul>
      {hasMoreCategories && (
        <Button
          className="categories__show-more-button"
          variant="text"
          onClick={onClick}
        >
          Show more
        </Button>
      )}
    </nav>
  );
};

export default CategoriesTemplate;
