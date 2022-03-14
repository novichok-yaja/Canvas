var canvas = document.querySelector('canvas');
canvas.width = 1536;
canvas.height = 860;

var ctx = canvas.getContext('2d');



setInterval(function () {
    ctx.clearRect(0,0, Math.random()*1400, Math.random()*700);
    for (let w_n = 0; w_n <100*Math.random(); w_n++) {
        for (let h_n = 0; h_n < 100*Math.random(); h_n++) {
            r = Math.random()*255;
            g = Math.random()*255;
            b = Math.random()*255;
            a = Math.random()*255;
            ctx.fillStyle = `rgb( ${r},${g},${b},${a})`;
            ctx.fillRect(2000*Math.random() + 14*w_n,2000*Math.random() + 7*h_n, 28*Math.random()*4, Math.random()*14*4);
        }
        
    }
}, 100);

