# Xmas-calendar



An interactive web-based calendar for December 2024, featuring dynamic visuals such as stars, balls, and socks drawn on specific days. The calendar is implemented using HTML5, CSS, and JavaScript.

## Features

- **Dynamic Day Display**: Each day displays either a number or a custom-drawn graphic (e.g., a star, ball, or sock).
- **Canvas-Based Graphics**: Utilizes HTML5 `<canvas>` for rendering items.
- **Modular Design**: Separate JavaScript files (`draw.js`, `star.js`, `ball.js`, `sock.js`) manage drawing functionality.
- **Responsive Layout**: Adapts gracefully to various screen sizes with CSS styling.

## Folder Structure

```
├── index.html       # Main HTML file
├── draw.js          # Main script for rendering on the canvas
├── item/
│   ├── star.js      # Script for drawing stars
│   ├── ball.js      # Script for drawing balls
│   ├── sock.js      # Script for drawing socks
├── README.md        # Project documentation
└── style.css        # Optional additional styling (if any)
```

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/december-2024-calendar.git
   ```
2. Open `index.html` in a web browser.

## Customization

- Modify the `drawItemFunctions` array in `index.html` to assign specific items to different days.
- Update or add custom drawing scripts in the `item/` folder.

## Dependencies

- None! This project uses pure HTML, CSS, and JavaScript, ensuring easy deployment and compatibility.

## Screenshots


## Future Enhancements

- **Additional Items**: Expand the range of drawable items for more diversity.
- **Event Support**: Add descriptions or events for specific days.
- **Improved Responsiveness**: Fine-tune the layout for smaller devices.

## License

This project is open-source under the [MIT License](LICENSE).



Happy coding! 🎄


 
