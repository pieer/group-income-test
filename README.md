# Apperance settings test

## General note
### Attention to details

- A single colors.json file define the default theme selector aspect and also the css variables
- Flexible architecture that allow designers or users to create there own theme
- Local storage to save user choices
- Reusable popup that can be trigger from any component
- ESC on the keyboard to close the popup
- Homepage styled according to the user theme and font size selection
- The themes are not images but dynamic SVG that are animated and generated from json theme file
- Flexible settings implementation configured in the settings.json file
- Tab animations
- Responsive page with animated mobile navigation

### Design decision
The simple way to setup a theme for a website is probably to have a css class that wrap the website and define the colors and fonts for all the elements in a css files:
```
// Color definition
.blue {
  --bg-color: blue;
}
// Actual component implementation
.button {
  background-color: --var(--bg-color);
}
// Font definition
.large {
  --font-size: 70%;
}
// Element implementation
html {
  font-size: --var(--font-size);
}
p {
  font-size: 1.2rem;
}
```

In this case however I choose on purpose to create styles variables inside the app, so we have the flexibility to create an infinite version of theme saved in a database.

After doing so, I believe this is a bit overkill. But that was still an intersting exercice!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Test locally
Simply open the dist/index.html
