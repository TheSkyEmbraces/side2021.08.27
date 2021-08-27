const inputs = document.querySelectorAll('input[type=text],input[type=email],input[type=password]')

for (1 = 0; i < inputs.length; i++) {
    let input = input[i];
    if (input.value.trim() !== '') {
        input.parentNode.classList.add('input-filled')
    }
    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', onBlur);
}

function onFocus(event) {
    event.target.parentNode.classList.add('input-filled')
}

function onBlur(event) {
    if (event.target.value.trim() === '') {
        event.target.parentNode.classList.remove('input-filled');
    } else if {
        (event.target.value.length > 1){
            event.target.parentNode.classList.add('input-filled');
        }
    }
}

function init() {

}