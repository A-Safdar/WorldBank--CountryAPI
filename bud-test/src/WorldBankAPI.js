const api = "http://api.worldbank.org/v2/country";

const header = {
   Accept: "application/json"
}

// data[0] = page/result count information in response
// data[1] = country information
// if data[1] does not exist, that means an error occured, so return the whole response
// otherwise, return data[1] since that contains the relevant information
export const get = (countryCode) =>
   fetch(`${api}/${countryCode}?format=json`, { header })
      .then((res) => res.json())
      .then((data) => data[1] ? data[1] : data);

