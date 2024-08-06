import React from "react";
import "./SearchInput.scss";

interface SearchInputProps extends React.HTMLAttributes<HTMLInputElement> {}

const SearchInput = ({ ...props }: SearchInputProps) => {
  return <input placeholder="Search..." className="search-input" {...props} />;
};

export default SearchInput;
