import photo from '../assets/images/author.jpg';

const author = `
    <img class="w-16 h-16 rounded-full mr-4" src=${photo} alt="Photo Author">
    <div class="flex-1">
        <a href="#" class="text-base font-bold text-base md:text-xl leading-none">@iamgdev</a>
        <p class="text-gray-600 text-base md:text-sm">Submission for <a class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500" href="#">dicoding front end fundamental</a> and make own whatsapp status ;)</p>
    </div>
    <div class="justify-end w-full sm:w-auto mt-4 sm:mt-0 text-right">
        <button class="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 py-2 px-4 rounded-full">More about me</button>
    </div>
`;

export default author;