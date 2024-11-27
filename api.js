// url="https://catfact.ninja/fact"
// fetch(url)
//     .then((res) => {
//         if (!res.ok) {
//             throw new Error(`HTTP error! Status: ${res.status}`);
//         }
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.fact);
//     })
//     .catch((err) => {
//         console.error("Error encountered:", err.message);
//     });

const url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        console.log(data.fact); // Corrected from `data.fasct` to `data.fact`
        // Optionally make another fetch, or handle it differently:
        return fetch(url);
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error on second fetch! Status: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => {
        console.log("Second fetch fact:", data.fact);
    })
    .catch((err) => {
        console.error("Error Encountered:", err.message);
    });

   