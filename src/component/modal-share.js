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
                            <i data-eva="twitter" class="w-full h-full fill-current"></i>
                        </a>
                    </li>
                    <li>
                        <a class="flex w-10 h-10 p-2 rounded-full bg-gray-300 text-teal-400 hover:bg-teal-400 hover:text-gray-300 duration-300" id="modal-share-wa" href="#" target="_blank">
                            <i data-eva="message-circle" class="w-full h-full fill-current"></i>
                        </a>
                    </li>
                </ul>
                <button class="absolute mt-2 mr-2 top-0 right-0 text-red-400 w-10 h-10 p-1 modal-close"><i data-eva="close" class="w-full h-full fill-current"></i></button>
            </div>
        </div>
    </div>`;

export default modal;