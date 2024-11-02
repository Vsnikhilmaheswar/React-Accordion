
# Single selection And Multiselection Accordion in React


This project implements a customizable accordion component in React that supports both single-selection and multi-selection modes. The accordion expands and collapses content panels, allowing users to view or hide details. In single-selection mode, only one panel can be open at a time, while in multi-selection mode, multiple panels can be expanded simultaneously. 

<img src= 'https://github.com/Vsnikhilmaheswar/React-Accordion/blob/main/ezgif.com-video-to-gif-converter.gif'>
 
Here's the content in Markdown format, ready for a `README.md` file:

---

# Single and Multi-selection Accordion in React

This project implements a customizable accordion component in React that supports both single-selection and multi-selection modes. The accordion expands and collapses content panels, allowing users to view or hide details. In single-selection mode, only one panel can be open at a time, while in multi-selection mode, multiple panels can be expanded simultaneously.

## Features

- **Single-selection mode**: Only one panel can be open at a time.
- **Multi-selection mode**: Allows multiple panels to be open simultaneously.
- **Customizable styling**: Easily modify the appearance of each accordion panel.
- **Responsive design**: Works seamlessly on desktop and mobile devices.

## Demo

![Accordion Demo](demo-image-link.png) <!-- Replace with actual image link -->

## Technologies Used

- React
- JavaScript (ES6+)
- CSS (or Tailwind, if used)
- Optional: PropTypes (for type-checking)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/single-multi-selection-accordion.git
   ```

2. Navigate into the project directory:

   ```bash
   cd single-multi-selection-accordion
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   npm start
   ```

2. Open the application in your browser at `http://localhost:3000`.

3. Customize the accordion panels by updating the `data` or `content` arrays in the component.

## Components

### Accordion

The main `Accordion` component accepts props to switch between single-selection and multi-selection modes.

#### Props

- **`items`** (array): The array of items to be displayed in the accordion.
- **`allowMultiple`** (boolean): Controls whether multiple panels can be open simultaneously (`true` for multi-selection, `false` for single-selection).

#### Example

```javascript
const items = [
  { id: 1, title: 'Panel 1', content: 'Content for panel 1' },
  { id: 2, title: 'Panel 2', content: 'Content for panel 2' },
  { id: 3, title: 'Panel 3', content: 'Content for panel 3' },
];

<Accordion items={items} allowMultiple={true} />
```

## File Structure

```plaintext
single-multi-selection-accordion/
├── public/
├── src/
│   ├── components/
│   │   ├── Accordion.js        # Main Accordion component
│   │   ├── AccordionItem.js    # Accordion item component
│   └── App.js                  # Main app entry
│   └── index.js                # React DOM rendering
├── package.json
└── README.md
```

## Customization

You can easily change the appearance of each panel by modifying the CSS classes in the component or using inline styles.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

--- 

Replace placeholders like `yourusername` and `demo-image-link.png` with actual values relevant to your project.
