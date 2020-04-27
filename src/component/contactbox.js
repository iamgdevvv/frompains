const contactbox = `
    <h2 class="font-bold break-normal text-2xl md:text-4xl text-center text-teal-700">Contacts & Source From Pains</h2>
        <h3 class="break-normal font-light text-gray-500 text-base md:text-lg text-center">Heyyo frompains here for you to give some humor base on your pain.</h3>
        <div class="w-full mt-10 flex flex-wrap sm:flex-wrap-reverse items-center">
            <div class="w-full sm:w-5/12 pr-0 sm:pr-5 text-gray-700 mb-10 sm:mb-20">
                <p class="break-normal font-normal text-base md:text-xl mb-4">Here's the source data</p>
                <ul class="grid grid-cols-1 gap-4 text-sm">
                    <li>
                        <a href="" class="flex items-center hover:text-teal-500 duration-300">
                            <i data-eva="globe" class="w-12 h-12 fill-current"></i>
                            <span class="w-10/12 break-words pl-4">https://programming-quotes-api.herokuapp.com/</span>
                        </a>
                    </li>
                    <li>
                        <a href="" class="flex items-center hover:text-teal-500 duration-300">
                            <i data-eva="github" class="w-12 h-12 fill-current"></i>
                            <span class="w-10/12 break-words pl-4">https://github.com/skolakoda/programming-quotes-api</span>
                        </a>
                    </li>
                    <li>
                        <a href="" class="flex items-center hover:text-teal-500 duration-300">
                            <i data-eva="github" class="w-12 h-12 fill-current"></i>
                            <span class="w-10/12 break-words pl-4">https://github.com/hellogerafis/frompains</span>
                        </a>
                    </li>
                </ul>
            </div>
            <form class="bg-white shadow-md rounded p-6 sm:p-10 w-full sm:w-7/12" action="https://formspree.io/xwknqwey" method="POST">
                <label class="block">
                <span class="text-gray-600">Name</span>
                <input class="form-input mt-1 block w-full" placeholder="your name" type="text" name="name" required>
                </label>

                <label class="block mt-4">
                <span class="text-gray-600">Email</span>
                <input class="form-input mt-1 block w-full" placeholder="your@email.com" type="email" name="email" required>
                </label>
                
                <label class="block mt-4">
                <span class="text-gray-600">Interest</span>
                <select class="form-select mt-1 block w-full" name="interest" required>
                    <option>Suggestion</option>
                    <option>Donation</option>
                    <option>Found Bug</option>
                </select>
                </label>

                <label class="block mt-4">
                    <span class="text-gray-600">Message</span>
                    <textarea class="form-textarea mt-1 block w-full" rows="3" placeholder="Enter some message or feedback" name="message" required></textarea>
                    </label>
                
                <div class="flex mt-6">
                <label class="flex">
                    <input type="checkbox" class="form-checkbox mt-1" required>
                    <span class="ml-2 text-gray-600">I agree to the <span class="underline">privacy policy</span></span>
                </label>
                </div>

                <input type="submit" value="Send Contact" class="cursor-pointer bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-2 px-4 rounded text-base mt-6 duration-300 w-full sm:w-auto">
            </form>
        </div>
`;

export default contactbox;