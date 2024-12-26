function drawSock(ctx, x, y, size, hue) {
    const top = y - size / 2;
    const left = x - size / 2;

    // Setting the stroke style (color)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Use HSL for hue-based color
    ctx.lineWidth = size * 0.05; // Thickness of the sock lines
    ctx.lineCap = "round"; // Rounded line ends

    const ankleY = y + size * 0.1;
    const footWidth = size * 0.4;
    const sleeveWidth = size * 0.1;

    // Draw the sock's side
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, ankleY);
    ctx.stroke();

    // Draw the foot of the sock
    drawLine(ctx, x - footWidth / 2, ankleY, x + footWidth / 2, ankleY);

    // Draw the sleeve of the sock
    drawLine(ctx, x - sleeveWidth / 2, top, x + sleeveWidth / 2, top);
}

function drawLine(ctx, x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}
