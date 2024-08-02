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

export function fetchProductsByFilter(filter) {
  // filter = {"category":"groceries"}
  // filter = {"category":["groceries","smart_phone"]}
  // sort = {_sort:"price",_order="desc"}
  // TODO : on server we will support multiple values
  let querystring = "";

  for (let key in filter) {
    querystring += `${key}=${filter[key]}&`;
    // const categoryValues = filter[key];
    // if (categoryValues.length > 1) {
    //   const lastCategoryValue = categoryValues[categoryValues.length - 1];
    //   querystring += `${key}=${filter[lastCategoryValue]}&`;
    // }
  }
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
