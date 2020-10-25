class DataQuote {
    static chooseQuote(url) {
        return fetch(url)
            .then(response => {
                return response.json()
            })
    }
}

export default DataQuote;