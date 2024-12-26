function drawBall(ctx, x, y, size, hue) {
    const top = y - size / 2;
    const left = x - size / 2;

    // Draw the outer rectangle
    ctx.strokeRect(left, top, size, size);

    // Define the ring properties
    const ringSize = {
        radius: size * 0.4,
        x: x,
        y: y, // Centered at (x, y)
        thickness: size * 0.1,
        color: `hsl(${hue}, 100%, 50%)`
    };

    // Set stroke style and line width
    ctx.strokeStyle = ringSize.color;
    ctx.lineWidth = ringSize.thickness;

    // Draw the ring (circle)
    ctx.beginPath();
    ctx.arc(ringSize.x, ringSize.y, ringSize.radius, 0, Math.PI * 2);
    ctx.stroke();
}


