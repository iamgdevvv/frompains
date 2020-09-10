import logo from "../assets/images/logo-white.svg";

const header = `
    <div class="container max-w-4xl mx-auto pb-16 md:pb-32 text-center break-normal">
    <!--Title-->
        <p class="text-white font-extrabold text-5xl md:text-6xl flex items-center justify-center mb-6 font-serif">
            <img src=${logo} alt="" class="mr-6 bg-transparent w-16 h-16 sm:w-24 sm:h-24" alt="Logo From Pains" loading="lazy">
            Frompains
        </p>
        <p class="text-xl md:text-2xl text-gray-500">Funny quotes for programmers base on their work.</p>
    </div>
`;

export default header;