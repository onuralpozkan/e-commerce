const base = {
  url: "https://api.escuelajs.co/api/v1",
  endpoints: {
    products: "/products",
    categories: "/categories",
  },
} as const;

export default base;
