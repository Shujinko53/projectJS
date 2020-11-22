function modal() {
    let more = document.querySelector('.more'),
    closePopup = document.querySelector('.popup-close'),
    overlay = document.querySelector('.overlay');
    
more.addEventListener('click', function() {
    overlay.style.display = 'block';
    this.classList.add('.more-splash');
    document.body.style.overflow = 'hidden';
});

closePopup.addEventListener('click', function() {
    overlay.style.display = 'none';
    more.classList.remove('.more-splash');
    document.body.style.overflow = '';
});
}

module.exports = modal;