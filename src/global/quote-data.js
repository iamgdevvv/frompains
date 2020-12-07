import dataQuote from './quote.json';

class DataQuote {
    static chooseQuote(url) {
        // return fetch(url)
        //     .then(response => {
        //         return response.json();
        //     })

        return dataQuote;
    }
}

export default DataQuote;