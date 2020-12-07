import DataQuote from '../global/quote-data';

import pagination from '../library/pagination';
import funcModal from '../library/modal';

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

        console.log(results);

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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-full fill-current"><g data-name="Layer 2"><g data-name="share"><rect width="24" height="24" opacity="0"></rect><path d="M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3z"></path></g></g></svg>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="w-full h-full fill-current"><g data-name="Layer 2"><g data-name="share"><rect width="24" height="24" opacity="0"></rect><path d="M18 15a3 3 0 0 0-2.1.86L8 12.34V12v-.33l7.9-3.53A3 3 0 1 0 15 6v.34L7.1 9.86a3 3 0 1 0 0 4.28l7.9 3.53V18a3 3 0 1 0 3-3z"></path></g></g></svg>
                        </button>
                    </div>`;
            }    
        }
        
        this.innerHTML = quoteEl;
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