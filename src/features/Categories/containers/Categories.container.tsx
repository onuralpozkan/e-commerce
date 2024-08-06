import { useCategoriesQuery } from "../queries/categories.query";
import CategoriesTemplate from "./Categories.template";
import "./Categories.scss";
import { Category } from "../types/category.type";

const CategoriesContainer = () => {
  const { isLoading, data } = useCategoriesQuery(false);

  const items: Category[] = [
    { image: "test", name: "Elektronik", id: 1 },
    { image: "test", name: "Dijital", id: 2 },
    { image: "test", name: "Mutfak", id: 3 },
    { image: "test", name: "kitap", id: 4 },
    { image: "test", name: "Giyim", id: 5 },
    { image: "test", name: "Elektronik", id: 11 },
    { image: "test", name: "Dijital", id: 21 },
    { image: "test", name: "Mutfak", id: 31 },
    { image: "test", name: "kitap", id: 41 },
    { image: "test", name: "Giyim", id: 51 },
  ];

  if (isLoading) return "Loading...";

  if (!items) return <>No data retrieved</>;

  return (
    <div className="categories__container">
      <CategoriesTemplate data={data || items} />
    </div>
  );
};

export default CategoriesContainer;
