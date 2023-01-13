const mainActionButton = document.querySelector('#main-action');
const buttons = document.querySelectorAll('.car-button');
const priceAction = document.querySelector('#price-action');
const priceForm = document.querySelector('.price-form');


const nameInput = document.querySelector('#name');
const carInput = document.querySelector('#car');

priceAction.setAttribute('disabled', 'disabled');

const scroller = (tag) => {
    const elem = document.querySelector(tag);
    return (evt) => {
        elem.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

mainActionButton.addEventListener('click', scroller('#watch-cars'));

buttons.forEach(button => {
    button.addEventListener('click', scroller('#price'))
})

nameInput.addEventListener('input', () => {
    if(nameInput.value.length < 3) {
        nameInput.setCustomValidity('Имя должно быть не короче 2 символов');
        priceAction.setAttribute('disabled', 'disabled');
    } else {
        nameInput.setCustomValidity('');
        if(carInput.value.length > 3) {
            priceAction.removeAttribute('disabled');
        }
    }
    nameInput.reportValidity();
});

carInput.addEventListener('input', () => {
    if(carInput.value.length < 3) {
        carInput.setCustomValidity('Название машины не короче 3 символов');
        priceAction.setAttribute('disabled', 'disabled');
    } else {
        carInput.setCustomValidity('');
        if(nameInput.value.length > 3) {
            priceAction.removeAttribute('disabled');
        }
    }
    carInput.reportValidity();
});

priceAction.addEventListener('click', () => {
    alert('Спасибо за заявку! Мы свяжемся с Вами в ближайшее время');
});

document.addEventListener('DOMContentLoaded', () => {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (evt) => {
            layer.style.transform = `translate3d(${((evt.clientX * 0.4) / 9)}px, ${((evt.clientY * 0.3) / 8)}px,0px)`;
});

const elem = document.querySelector('.main');
    document.addEventListener('scroll', () => {
            elem.style.backgroundPositionX = `0${(0.3 * window.pageYOffset)}px`;
    })
});



