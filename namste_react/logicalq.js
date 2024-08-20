const array = [1, 4, 5, 6, 2, 88, 5];

function double(el) {
  return el * 2;
}
const double_array = array.map((el) => {
  console.log(el);
  return double(el);
});
console.log(double_array);

const sum_array = array.reduce((sum, el) => sum + el, 0);

const even_num = array.filter((el) => el % 2 === 0);
console.log(even_num);

const heighiestnumber = array.reduce((prev, el) => (prev > el ? prev : el));
console.log(heighiestnumber);

const lowestnumber = array.reduce((prev, el) => (prev < el ? prev : el));
console.log(heighiestnumber);
