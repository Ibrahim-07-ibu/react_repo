 const countries = [];
countries.await getData();

async function getData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const  countries = await response.json();
    // console.log(countries);
    return countries;
  } catch (error) {
    console.log( error);
  }
}
console.log(countries)
