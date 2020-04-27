import * as eva from 'eva-icons';
import DataQuote from './lib/quote-data';

import pagination from '../assets/js/pagination';
import modalShare from './modal-share';
import funcModal from '../assets/js/modal';

class listingQuote extends HTMLElement {

    constructor() {
		super();
    }

    connectedCallback() {
        this.paged = this.getAttribute("paged") || 1;
        this.type = this.getAttribute("type") || "latest";
        this.render();
    }

    async render() {
        let quoteEl = "";
        const pagingQuote = document.querySelector("pagination-quote");
        let results = await DataQuote.chooseQuote("https://programming-quotes-api.herokuapp.com/quotes/lang/en");

        if(this.type === "random") {
            results = await results[Math.floor((Math.random()*results.length))];
            quoteEl += `
                    <div class="border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal relative">
                        <div class="mb-8">
                            <h3 class="text-gray-900 font-bold text-base mb-2">Quote #1</h3>
                            <p class="text-gray-700 text-2xl font-serif w-full sm:w-5/6" id="quote-${results.id}">${results.en}</p>
                        </div>
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none" id="author-${results.id}">${results.author}</p>
                            <p class="text-gray-600" id="rate-${results.id}">Popularity: ${results.rating}</p>
                        </div>
                        <button data-id=${results.id} class="absolute w-10 h-10 rounded-full p-2 border-2 bg-gray-100 bottom-0 right-0 mb-6 mr-6 modal-open">
                            <i data-eva="share" class="w-full h-full fill-current"></i>
                        </button>
                    </div>`;
        } else {
            
            if(this.type === "popular") {
                results = await results.sort((a, b) => Number(b.rating) - Number(a.rating));
            }
            pagingQuote.setAttribute("data-maxpaged", (results.length / 10));

            results = await pagination(results, 10, this.paged);
            for (let i = 0; i < results.length; i++){ 
                quoteEl += `
                    <div class="border border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-6 flex flex-col justify-between leading-normal relative ${i > 0 ? 'mt-8' : ''}">
                        <div class="mb-8">
                            <h3 class="text-gray-900 font-bold text-base mb-2">Quote #${this.paged === 1 ? i + 1 : i + 1 + ((this.paged - 1) * 10)}</h3>
                            <p class="text-gray-700 text-2xl font-serif w-full sm:w-5/6" id="quote-${results[i].id}">${results[i].en}</p>
                        </div>
                        <div class="text-sm">
                            <p class="text-gray-900 leading-none" id="author-${results[i].id}">${results[i].author}</p>
                            <p class="text-gray-600" id="rate-${results[i].id}">Popularity: ${results[i].rating}</p>
                        </div>
                        <button data-id=${results[i].id} class="absolute w-10 h-10 rounded-full p-2 border-2 bg-gray-100 bottom-0 right-0 mb-6 mr-6 modal-open">
                            <i data-eva="share" class="w-full h-full fill-current"></i>
                        </button>
                    </div>`;
            }    
        }
        
        this.innerHTML = quoteEl;
        this.addEventListener("DOMContentLoaded", eva.replace());
        this.addEventListener("DOMContentLoaded", funcModal());
    }

    async attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        await this.render();
    }
      
    static get observedAttributes() {
        return ["paged", "type"];
    }
}

export default listingQuote;