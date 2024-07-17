function submitRating() {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        document.querySelector('.feedback').style.display = 'none';
        const thankYouElement = document.querySelector('.thank-you');
        thankYouElement.style.display = 'block';
        thankYouElement.classList.add('middle');
        thankYouElement.classList.add('pic');
        thankYouElement.classList.add('img');
        thankYouElement.classList.add('big');
        thankYouElement.classList.add('final');
        document.getElementById('selected-rating').innerText = selectedRating.value;
    } else {
        alert('Please select a rating');
    }
}