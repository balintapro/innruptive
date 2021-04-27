export async function fetchApi(endpoint, setter) {
    let response = await fetch(
        'https://innruptive.com/api/api/collections/get/' + endpoint,
        {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify,
        }
    );
    let data = await response.json();
    if (endpoint.includes("blog") && data) {
        console.log(data)
        let sortPosts = data.entries.sort((a, b) => {
            return b._created - a._created
        })
        setter(sortPosts)
    }
    else {
        setter(data);

    }
}
