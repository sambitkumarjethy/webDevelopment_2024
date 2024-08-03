// A mock function to mimic making an async request for data
export function fetchAllproducts() {
  return new Promise(async (resolve) => {
    // TODO: we will not hard code server URL
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}

export function fetchProductsByFilter(filter, sort) {
  // filter = {"category":"groceries"}
  // filter = {"category":["groceries","smart_phone"]}
  // sort = {_sort:"price",_order="desc"}
  // TODO : on server we will support multiple values
  let querystring = "";
  console.log({ filter });
  for (let key in filter) {
    // querystring += `${key}=${filter[key]}&`;
    const categoryValues = filter[key];

    console.log({ categoryValues });
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      console.log(lastCategoryValue);
      querystring += `${key}=${lastCategoryValue}&`;
    }
  }
  for (let key in sort) {
    querystring += `${key}=${sort[key]}&`;
  }
  console.log({ querystring });
  return new Promise(async (resolve) => {
    // TODO: we will not hard code server URL
    const response = await fetch(
      "http://localhost:8080/products?" + querystring
    );
    const data = await response.json();
    console.log(data);
    resolve({ data });
  });
}
