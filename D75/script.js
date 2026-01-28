// Javascript async, await and fetch API example
async function getData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let obj = {
                name: "Ankit Singh",
                age: 24,
                stdId: "MCA2024041",
                course: "MCA",
                batch: "2024-26",
                college: "Invertis Univarsity, Bareilly, UP",
                pinCode: 243123
            }
            res(obj);
        }, 3000);
    })
}

async function fetchData(param) {
    let fData = await getData();
    console.log(fData);
    // return fData;
}
fetchData();

console.log("Fetching Data...");
const loadData = getData();
console.log(loadData);
console.log("Data Fetched");

loadData.then((v) => {
    console.log(v);
    console.log("Data Processed");
    let sfd = JSON.stringify(v);
    console.log(sfd);
    document.querySelector(".fetch-data").innerText = sfd;
}).catch((err) => {
    console.log(err);
})

// Fetch API Example
async function getApiData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await res.json();
    // let data = await res.text();
    // console.log(data);
    return data;
}

async function fetchApiData() {
    let apiData = await getApiData();
    console.log(apiData);
}
fetchApiData();

// Post Data Using Fetch API
async function postApiData() {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Sigma Web Development Course-2024',
            body: 'Learn Full Stack Development With MERN Stack',
            userId: 4274,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });

    let data = await res.json();
    // let data = await res.text();
    return data;
}

async function fetchPostApiData() {
    let apiData = await postApiData();
    console.log(apiData);
    document.querySelector(".post-api").innerText = JSON.stringify(apiData);
}
fetchPostApiData();