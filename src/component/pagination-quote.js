class listingPagination extends HTMLElement {

	constructor() {
		super();
    }
 
    connectedCallback() {
		this.dataMaxPaged = this.getAttribute("data-maxpaged") || 30;
		this.render();
    }
    
    render() {
		const paginationEl = `
			<ul id="pagination" class="flex justify-center pl-0 list-none rounded my-2 text-base">
				<li>
					<button class="py-3 px-6 bg-white border border-gray-300 text-teal-700 border-r-0 ml-0 rounded-l hover:bg-teal-100" id="prev">Prev</button>
				</li>
				<li>
					<button class="py-3 px-6 bg-white border border-gray-300 text-teal-700 rounded-r hover:bg-teal-100" id="next">Next</button>
				</li>
			</ul>`;

		this.innerHTML = paginationEl;
		this.handlePaging();
	}

	handlePaging() {
		const listQuote = document.querySelector("listing-quote");
		let currentPage = listQuote.getAttribute("paged") || 1;
		let navbutton = "";

		this.addEventListener("click", e => {
			navbutton = e.target.id;

			if(currentPage > 0 && currentPage < this.dataMaxPaged) {
				if(navbutton === 'prev') {
					if(currentPage !== 1) currentPage--;
				} else if(navbutton === 'next') {
					currentPage++;
				}
			}
	
			listQuote.setAttribute("paged", currentPage);

			window.scrollTo({
				'behavior': 'smooth',
				'left': 0,
				'top': 0
			});
		})
	}

	attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue;
        this.render();
    }
      
    static get observedAttributes() {
        return ["dataMaxPaged"];
    }
}

export default listingPagination;