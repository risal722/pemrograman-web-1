const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
navList.classList.toggle('hidden');
});


// const hamburger = document.getElementById('hamburger');
// const navList = document.getElementById('nav-list');

// hamburger.addEventListener('click', () => {
//     navList.classList.toggle('hidden');
// });

// ini untuk pendaftaran Maba
const form = document.getElementById('formPendaftaran');
const modal = document.getElementById('modalBerhasil');
const tutupModal = document.getElementById('tutupModal');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    modal.style.display = 'flex';
    form.reset(); // Optional: form langsung bersih setelah submit.
});

tutupModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// end pendaftaran maba
