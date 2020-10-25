import '../library/nav-links';

const nav = `
    <div class="w-full flex items-center justify-between">       
        <div class="flex pl-4 text-sm">
            <ul class="list-reset flex justify-between flex-1 md:flex-none text-lg items-center text-gray-600" id="menu">
                <li class="mr-2">
                    <a class="inline-block py-2 px-2 hover:text-gray-100 text-gray-100" href="#latest">Latest</a>
                </li>
                <li class="mr-2">
                    <a class="inline-block py-2 px-2 hover:text-gray-100" href="#popular">Popular</a>
                </li>
                <li class="mr-2">
                    <a class="inline-block py-2 px-2 hover:text-gray-100" href="#random">Random</a>
                </li>
            </ul>
        </div>
        <div class="items-center w-auto hidden sm:flex">		
            <a class="inline-block text-gray-500 hover:text-white text-center p-4 avatar w-10 h-10 sm:w-16 sm:h-16" href="https://instagram.com/iamgdev" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-full fill-current"><g data-name="Layer 2"><g data-name="image-2"><rect width="24" height="24" opacity="0"></rect><path d="M18 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM8 7a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 8 7zm11 10.83A1.09 1.09 0 0 1 18 19H6l7.57-6.82a.69.69 0 0 1 .93 0l4.5 4.48z"></path></g></g></svg>
            </a>
            <a class="inline-block text-gray-500 hover:text-white text-center p-4 avatar w-10 h-10 sm:w-16 sm:h-16" href="https://github.com/iamgdevvv/frompains" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-full fill-current"><g data-name="Layer 2"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect><path d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1" data-name="github"></path></g></svg>
            </a>
        </div>
    </div>
`;

export default nav;