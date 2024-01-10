const kotak = document.getElementsByClassName('kotak')[0];
const outputTl = document.getElementsByClassName('tl')[0];
const outputTr = document.getElementsByClassName('tr')[0];
const outputBl = document.getElementsByClassName('bl')[0];
const outputBr = document.getElementsByClassName('br')[0];
const lTop = document.querySelector('input[name=lTop]');
const rTop = document.querySelector('input[name=rTop]');
const lBottom = document.querySelector('input[name=lBottom]');
const rBottom = document.querySelector('input[name=rBottom]');

lTop.addEventListener('input', function() {
    const lt = lTop.value;
    kotak.style.borderTopLeftRadius = lt + '%';
    outputTl.textContent = 'Top Left: ' + lt + '%';
});

rTop.addEventListener('input', function () {
    const rt = rTop.value;
    kotak.style.borderTopRightRadius = rt + '%';
    outputTr.textContent = 'Top Right: ' + rt + '%';
});

lBottom.addEventListener('input', function () {
    const lb = lBottom.value;
    kotak.style.borderBottomLeftRadius = lb + '%';
    outputBl.textContent = 'Bottom Left: ' + lb + '%';
});

rBottom.addEventListener('input', function () {
    const rt = rBottom.value;
    kotak.style.borderBottomRightRadius = rt + '%';
    outputBr.textContent = 'Bottom Right: ' + rt + '%';
});