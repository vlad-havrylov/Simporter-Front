import 'normalize.css';
import './styles/style.scss';

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    } else {
        document.getElementById("productsDropdown").classList.toggle("show");
    }
}
document.body.addEventListener('click', function (evt) {
    if (evt.target.className === 'toggler') {
        document.getElementById('navbar').style.display = document.getElementById('navbar').style.display == 'block' ? 'none' : 'block';
    }
}, false);