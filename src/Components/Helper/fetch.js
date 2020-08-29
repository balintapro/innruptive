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
    setter(data);
}
