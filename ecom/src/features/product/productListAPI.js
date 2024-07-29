// A mock function to mimic making an async request for data
// export function fetchCount(amount = 1) {
//   return new Promise((resolve) =>{
//     // setTimeout(() => resolve({ data: amount }), 500)
//    const response =  await fetch ('http://localhost:8080')
//    const result = await response.json()
//    resolve({data})
//   }

//   );
// }

export async function fetchCount(amount = 1) {
  return new Promise(async (resolve) => {
    // Mocking a delay for async behavior
    // setTimeout(() => resolve({ data: amount }), 500);

    try {
      const response = await fetch("http://localhost:8080");
      const result = await response.json();
      resolve({ data: result });
    } catch (error) {
      resolve({ data: null, error });
    }
  });
}
