# Apperance settings test

## General note
### Attention to details

- A single colors.json file define the default theme selector aspect and also the css variable
- That architecture allow the designer or user to create there own theme if they want
- After refreshing the page the user still have his settings recorded in a local storage
- The popup can be reused anywhere with any kind of content and can be open from any component
- If you press esc on the keyboard the popup close.
- The main page style is updated according to the user theme and font size selection
- The themes are not images but actual SVG that are animated
- The tab are fully working and very flexible to had any other settings using the settings.json file

### Design decision
The simple way to setup a theme for a website is probably to have a css class that wrap the website and define the color for all the elements:
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

### Test dist page
```
cd dist; python -m SimpleHTTPServer
```