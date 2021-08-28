var inputs = document.querySelectorAll('input[type=text],input[type=email],input[type=password]')

for (i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (input.value.trim() !== '') {
        input.parentNode.classList.add('input-filled')
    }
    input.addEventListener('focus', onFocus);
    input.addEventListener('blur', onBlur);
}

function onFocus(e) {
    e.target.parentNode.classList.add('input-filled')
}

function onBlur(e) {
    if (e.target.value.trim() === '') {
        e.target.parentNode.classList.remove('input-filled');
    } else if  (e.target.value.length > 1){
            e.target.parentNode.classList.add('input-filled');       
    }
}

function init() {

}