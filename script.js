const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
function handleForm(event) {
  event.preventDefault();
  document.getElementById('form-message').textContent =
    'The form is currently a design placeholder. Connect this form to your preferred email/Form service before publishing.';
}
