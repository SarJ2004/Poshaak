export const ApiLoader = async () => {
  let url = "https://fakestoreapiserver.reactbd.com/products/";
  let res = await fetch(url);
  return await res.json();
};
