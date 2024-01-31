const ENDPOINT_FIRST_API = `https://catfact.ninja/fact`;
const ENDPOINT_SECOND_API = `https://cataas.com/cat/says/`;

// export const getFact = async () => {
//   const resp = await fetch(ENDPOINT_FIRST_API);
//   const data = await resp.json();
//   return data.fact;
// };

// Clasic way
export const getFact = () => {
  return fetch(ENDPOINT_FIRST_API)
    .then((resp) => resp.json())
    .then((data) => data.fact);
};

export const getImageUrl = (firstThreeWords) => {
  return fetch(`${ENDPOINT_SECOND_API}${firstThreeWords}`).then(
    (resp) => resp.url
  );
};
