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
  // TODO : on server we will support multiple values
  let querystring = "";
  for (let key in filter) {
    querystring += `${key}=${filter[key]}&`;
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
