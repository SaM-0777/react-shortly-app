import { BitlyClient } from "bitly";


export const fetchData = async (url) => {

    /*var data = {
        "domain": "bit.ly",
        "long_url": url,
        "group_guid": process.env.REACT_APP_BITLY_GUID
        /*"originalURL": url
    };
    fetch('https://api-ssl.bitly.com/v4/shorten', {
        method: 'post',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': process.env.REACT_APP_BITLY_TOKEN
        },
        body: JSON.stringify(data)
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        alert(data.shortURL)
        console.log(data);
    })*/

    const bitly = new BitlyClient(process.env.REACT_APP_BITLY_TOKEN, {})
    try {
        const response = await bitly.shorten(url)
        return response
    } catch (error) {
        return { error: {message: error} }
    }

}