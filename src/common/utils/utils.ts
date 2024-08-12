const merger = (...args: string[]) => {
  if (!args) return "";
  return args.join(" ").trim();
};

const imgExtracter = (imgUrl: string | undefined) => {
  const dummyImg = "https://i.imgur.com/YaSqa06.jpeg";
  if (!imgUrl) return dummyImg;

  const regex = /"(https?:\/\/[^\"]+)"/;
  const match = imgUrl.match(regex);

  return match ? match[1] : imgUrl;
};

export { merger, imgExtracter };
