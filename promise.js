// let pro = new Promise((res, rej) => {
//     const num = Math.floor(Math.random() * 10); // Fixed Math.random() function call
//     if (num > 4) { // Fixed condition (greater than 4, not less than 5)
//         res(`Your random number greater than 4 is ${num}`);
//     } else {
//         rej("Rejected");
//     }
// });

// pro.then((val) => {
//     console.log(val);
// }).catch((val) => {
//     console.log(val);
// });


function pro(time) {
    return new Promise((resolve, reject) => {
        if (typeof time !== "number" || time < 0) {
            reject("Invalid time value");
        } else {
            setTimeout(() => {
                console.log(time);
                resolve();
            }, time * 1000);
        }
    });
}

async function set(arr) {
    for (const ele of arr) {
        await pro(ele); // Wait for each promise to resolve
    }
}

let arr = [1, 2, 3, 4, NaN, 5, 6];

set(arr)
    .then(() => {
        console.log("All tasks completed successfully.");
    })
    .catch((err) => {
        console.log("An error occurred:", err);
    });
