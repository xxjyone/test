window.addEventListener('load', function () {
    var head = document.querySelector('.head');
    var containav = document.querySelector('.containav');
    var box = containav.querySelector('.box');
    var crt = box.querySelector('.crt');
    head.addEventListener('click', function () {
        containav.style.display = 'block';
    });

    crt.addEventListener('click', function () {
        containav.style.display = 'none';
    });

    box.addEventListener('mousedown', function (e) {
        var x = e.clientX - box.offsetLeft;
        var y = e.clientY - box.offsetTop;
        document.addEventListener('mousemove', move);
        function move(e) {
            box.style.left = e.clientX - x + 'px';
            box.style.top = e.clientY - y + 'px';
        }
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', move)
        })
    });
})
