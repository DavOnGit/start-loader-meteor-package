# Start-Loader
 Show a centered loading spinner while application is downloading: <a href="https://codepen.io/Daviz/full/JJQodN/" target="_blank">like this!</a>
 
## Install

`meteor add daviz:start-loader`

### Note

This is a fork of `webdeb:app-loader` but vertically centered (as well as horizontally).

## How it works

Very Simple. It automatically injects the needed html and CSS to the page, before any other scripts are going to be downloaded.
After meteor has started on the client side, it automatically fades out the loading spinner and removes it from the DOM. Thats it!

It is using only HTML (SVG) and CSS for the spinner animation.

## Futher work

- make configurable
- add more loaders and spinners

## Contribution

Feel free to fork and hack ;)
