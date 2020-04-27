import '../assets/js/nav-links';

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
            <a class="inline-block text-gray-500 hover:text-white text-center p-4 avatar w-10 h-10 sm:w-16 sm:h-16" href="https://instagram.com/frompains">
                <i data-eva="image-2" class="w-full h-full fill-current"></i>
            </a>
            <a class="inline-block text-gray-500 hover:text-white text-center p-4 avatar w-10 h-10 sm:w-16 sm:h-16" href="https://github.com/hellogerafis/frompains">
                <i data-eva="github" class="w-full h-full fill-current"></i>
            </a>
        </div>
    </div>
`;

export default nav;