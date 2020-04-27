const toggleModal = () => {
    const body = document.querySelector('body')
    const modal = document.querySelector('.modal')
    modal.classList.toggle('opacity-0')
    modal.classList.toggle('pointer-events-none')
    body.classList.toggle('modal-active')
}

const funcModal = () => {
    //const modalShare = document.querySelector("modal-share");

    const openmodal = document.querySelectorAll('.modal-open');
    for (let i = 0; i < openmodal.length; i++) {
        openmodal[i].onclick = event => {
            event.preventDefault();

            const dataID = openmodal[i].getAttribute('data-id');
            const author = document.getElementById(`author-${dataID}`).innerHTML;
            const quote = document.getElementById(`quote-${dataID}`).innerHTML;
            const rate = document.getElementById(`rate-${dataID}`).innerHTML;

            // modalShare.setAttribute("data-author", author);
            // modalShare.setAttribute("data-quote", quote);
            // modalShare.setAttribute("data-rate", rate);

            document.getElementById("modal-author").innerHTML = author;
            document.getElementById("modal-quote").innerHTML = quote;
            document.getElementById("modal-rate").innerHTML = rate;
            document.getElementById("modal-share-twitter").setAttribute("href", `https://twitter.com/intent/tweet?url=https%3A%2F%2Ffrompains.web.app&text=${quote}%0A%0AQuote%20by%20${author}%0A${rate}%0A%0A%20%20&hashtags=humorofcode%2C%20codehumor%2C%20humorprogrammer%2C%20jokesofprogrammer%2C%20jokeofprogrammer%2C%20jokeofprogrammers%2C%20programmerjoke%2C%20programmersjoke%2C%20frompains`);
            document.getElementById("modal-share-wa").setAttribute("href", `https://api.whatsapp.com/send?text=${quote}%0D%0A%0D%0AQuote%20by%20${author}%0D%0A${rate}%0D%0AFunny%20generate%20by%20https%3A%2F%2Ffrompains.web.app`);

            toggleModal();
        };
    }

    const overlay = document.querySelector('.modal-overlay');
    overlay.onclick = toggleModal;

    const closemodal = document.querySelectorAll('.modal-close');
    for (let i = 0; i < closemodal.length; i++) {
        closemodal[i].onclick = toggleModal;
    }

    document.onkeydown = evt => {
        evt = evt || window.event;
        let isEscape = false;

        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }

        if (isEscape && document.body.classList.contains('modal-active')) {
            toggleModal();
        }
    };
}

export default funcModal;