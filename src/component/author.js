import photo from '../assets/images/author.jpg';

const author = `
    <img class="w-16 h-16 rounded-full mr-4" src=${photo} alt="Photo Author" loading="lazy">
    <div class="flex-1">
        <a href="https://instagram.com/iamgdev" target="_blank" class="text-base font-bold text-base md:text-xl leading-none">@iamgdev</a>
        <p class="text-gray-600 text-base md:text-sm">Submission for <a class="text-gray-800 hover:text-teal-500 no-underline border-b-2 border-teal-500" href="https://www.dicoding.com/academies/163" target="_blank">dicoding front end fundamental</a> and make own whatsapp status ;)</p>
    </div>
    <div class="justify-end w-full sm:w-auto mt-4 sm:mt-0 text-right">
        <a href="https://www.linkedin.com/in/grafis-nuresa" target="_blank" class="bg-transparent border border-gray-500 hover:border-teal-500 text-xs text-gray-500 hover:text-teal-500 py-2 px-4 rounded-full">More about me</a>
    </div>
`;

export default author;