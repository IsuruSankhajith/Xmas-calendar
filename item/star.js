function drawStar(ctx, x, y, size) {
    ctx.beginPath();

    // Calculate the points for a 5-pointed star
    for (let i = 0; i < 5; i++) {
        const angle = (i * 2 * Math.PI) / 5 - Math.PI / 2; // Outer points
        const xOuter = x + size * Math.cos(angle);
        const yOuter = y + size * Math.sin(angle);
        ctx.lineTo(xOuter, yOuter);

        const innerAngle = ((i + 0.5) * 2 * Math.PI) / 5 - Math.PI / 2; // Inner points
        const xInner = x + (size / 2) * Math.cos(innerAngle);
        const yInner = y + (size / 2) * Math.sin(innerAngle);
        ctx.lineTo(xInner, yInner);
    }

    ctx.closePath();
    ctx.fillStyle = 'gold';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}
