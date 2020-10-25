const modal = `
    <div class="modal opacity-0 pointer-events-none fixed w-full h-full top-0 left-0 flex items-center justify-center">
        <div class="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div class="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div class="modal-content py-8 text-left px-10 relative">
                <header class="mb-4">
                    <h4 class="font-bold text-xl mb-4">Share Quote</h4>
                    <p class="mb-1" id="modal-quote">This quote is error, call admin for solve this problem</p>
                    <p class="font-medium" id="modal-author">Admin</p>
                    <p class="text-gray-600" id="modal-rate">Popularity : 0.0</p>
                </header>
                <ul class="flex items-center justify-center md:justify-end">
                    <li class="mr-6">
                        <a class="flex w-10 h-10 p-2 rounded-full bg-gray-300 text-teal-400 hover:bg-teal-400 hover:text-gray-300 duration-300" id="modal-share-twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Ffrompains.web.app&text=This quote is error, call admin for solve this problem.%0A%0AQuote%20by%20Admin%20%3APopularity:%20undefined%20%20&hashtags=%23humorofcode%2C%20%23codehumor%2C%20%23humorprogrammer%2C%20%23jokesofprogrammer%2C%20%23jokeofprogrammer%2C%20%23jokeofprogrammers%2C%20%23programmerjoke%2C%20%23programmersjoke%2C%20%23frompains" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-full fill-current"><g data-name="Layer 2"><g data-name="twitter"><polyline points="0 0 24 0 24 24 0 24" opacity="0"></polyline><path d="M8.08 20A11.07 11.07 0 0 0 19.52 9 8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51 1.88 1.88 0 0 1-2.16-.38 3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24 9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20"></path></g></g></svg>
                        </a>
                    </li>
                    <li>
                        <a class="flex w-10 h-10 p-2 rounded-full bg-gray-300 text-teal-400 hover:bg-teal-400 hover:text-gray-300 duration-300" id="modal-share-wa" href="#" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-full fill-current"><g data-name="Layer 2"><g data-name="message-circle"><rect width="24" height="24" opacity="0"></rect><path d="M19.07 4.93a10 10 0 0 0-16.28 11 1.06 1.06 0 0 1 .09.64L2 20.8a1 1 0 0 0 .27.91A1 1 0 0 0 3 22h.2l4.28-.86a1.26 1.26 0 0 1 .64.09 10 10 0 0 0 11-16.28zM8 13a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path></g></g></svg>
                        </a>
                    </li>
                </ul>
                <button class="absolute mt-2 mr-2 top-0 right-0 text-red-400 w-10 h-10 p-1 modal-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-full fill-current"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path></g></g></svg></button>
            </div>
        </div>
    </div>`;

export default modal;