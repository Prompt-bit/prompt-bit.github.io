// Tabs
function openTab(evt, tabName) {
  let tabcontent = document.getElementsByClassName("tab-content");
  for (let i=0; i<tabcontent.length; i++) tabcontent[i].classList.remove("active");
  let tablinks = document.getElementsByClassName("tab-link");
  for (let i=0; i<tablinks.length; i++) tablinks[i].classList.remove("active");
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// Mobile Menu
function openMenu() { document.getElementById("sidemenu").style.right = "0"; }
function closeMenu() { document.getElementById("sidemenu").style.right = "-200px"; }

// Google Sheet Form
const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
const form = document.forms['submit-to-google-sheet'];
form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(()=>form.reset());
});
