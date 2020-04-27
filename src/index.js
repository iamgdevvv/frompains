import compHeader from './component/header';
import compNav from './component/nav';
import compContactBox from './component/contactbox';
import compAuthor from './component/author';
import compFooter from './component/footer';

import compListingQuote from './component/listing-quote';
import compPaginationQuote from './component/pagination-quote';
import compModalShare from './component/modal-share';

import './assets/css/style.css';
import './assets/css/app.css';
import * as eva from 'eva-icons';

const header = document.getElementById("header");
header.classList.add("w-full", "m-0", "p-0", "bg-cover", "bg-bottom", "bg-gray-900", "flex", "items-center", "banner-site");
header.innerHTML = compHeader;



const nav = document.getElementById("navigation");
nav.classList.add("mt-0", "w-full");
nav.innerHTML = compNav;



const content = document.getElementById("content");
content.classList.add("bg-white", "w-full", "text-xl", "md:text-2xl", "text-gray-800", "leading-normal", "rounded-t", "p-8", "sm:p-16");

const listingQuote = document.createElement("listing-quote");
listingQuote.classList.add("block", "mb-16");

const paginationQuote = document.createElement("pagination-quote");
paginationQuote.classList.add("block");

content.appendChild(listingQuote);
content.appendChild(paginationQuote);
customElements.define("listing-quote", compListingQuote);
customElements.define("pagination-quote", compPaginationQuote);

window.onhashchange = () => {
    let hashReq = window.location.hash.substring(1);
    history.replaceState(null, null, ' ');

    listingQuote.setAttribute("type", hashReq);
    listingQuote.setAttribute("paged", 1);

    if(hashReq === "random") {
        paginationQuote.classList.add("hidden");
        listingQuote.classList.remove("mb-16");
    } else {
        paginationQuote.classList.remove("hidden");
        listingQuote.classList.add("mb-16");
    }
}


document.body.insertAdjacentHTML('beforeEnd', compModalShare);


const contactbox = document.getElementById("contactbox");
contactbox.classList.add("w-full", "font-sans", "bg-teal-100", "rounded", "mt-8", "px-8", "py-10", "md:p-24");
contactbox.innerHTML = compContactBox;



const author = document.getElementById("author");
author.classList.add("flex", "w-full", "items-start", "sm:items-center", "font-sans", "p-0", "sm:p-24", "flex-wrap", "my-10", "sm:my-0");
author.innerHTML = compAuthor;



const footer = document.getElementById("footer");
footer.classList.add("bg-gray-900");
footer.innerHTML = compFooter;


eva.replace();