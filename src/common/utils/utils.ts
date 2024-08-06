const merger = (...args: string[]) => {
  if (!args) return "";
  return args.join(" ").trim();
};

export { merger };
