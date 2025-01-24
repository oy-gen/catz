# Cat Gallery Coding Challenge 🐱


Create a responsive web application that displays a gallery of cats with filtering capabilities and a detailed view feature.

![alt text](/design/list.png)

### Core Features

- Fetch and display cats from the provided API in a responsive grid layout

- Implement filtering functionality with the following options:
    - All cats (default)
    - Black cats ("black" tag)
    - White cats ("white" tag)
    - Orange cats ("orange" tag)
- Implement a full-view modal that opens when clicking on a cat card

![alt text](/design/view.png)

### UI Requirements

- Pixel perfect design implementation is NOT necessary!

#### List View

- Display cats in a grid layout
- Each card should show:
    - Cat image
    - File size
    - Tag, if cat has a tag that matches one of the following - "black", "white", "orange"
- Filter buttons should be displayed above the grid
- Active filter should be visually highlighted

#### Full View

- Clicking a cat card opens a modal with:
    - Full-size image
    - Tag (same restriction as List View cards)
    - File size
    - Close button

### API Details

The challenge uses the [CATAAS (Cat-as-a-service) API](https://cataas.com/).

#### Base Endpoints

- List cats: `GET https://cataas.com/api/cats`
    - Supports query parameters:
        - `tags`: comma-separated string of tags
        - `offset`: number (pagination)
        - `limit`: number (pagination)
- Get cat image: `GET https://cataas.com/cat/:id`
- 
