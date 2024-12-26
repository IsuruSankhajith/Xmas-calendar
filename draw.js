const draw = {};

draw.circle = function (x, y, radius, color) => {
    ctx.beginPath();


    if(Options.outline == "inside"){
        radius -= Options.lineWidth/2;
    }

        ctx.arc(x, y, radius, 0, Math.PI * 2);
        Object.assign(ctx,options);

        Options.fillStyle && ctx.fill();
        Options.strokeStyle && ctx.stroke();    
};

const ball = {
    radius: size * 0.45,
    x,
     get y(){return top + ring.radius+ ring.thickness/2},
     color: `hsl(${hue}, 100%, 50%)`
};

draw.circle(ball.x, ball.y, ball.radius, ball.color);