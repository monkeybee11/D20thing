function diceroll() {
    const gifElement = document.querySelector('#gif1');
    const button = document.querySelector('#rollbut');
    const mincePie = Math.floor(Math.random() * 20) + 1;

    button.style.display = 'none';

    gifElement.classList.remove(...gifElement.classList);
    gifElement.classList.add('roll' + mincePie);

    setTimeout(() => {
        button.style.display = 'block';
    }, 4000);
}
