# bs4-libsass-gulp
This is a starter template for people wanting to use Bootstrap 4 and LibSass. It occured to me that there wasn't any starting templates for people wanting to develop using Bootstrap 4, and all the latest and greatest technologies surrounding it.

This package aims to make it quick and simple to kick-start your project, using [Bootstrap 4](https://v4-alpha.getbootstrap.com/), and a already setup gulpfile using [LibSass](http://sass-lang.com/libsass) to make compile times super quick.

## What's included?
* bootstrap (^4.0.0-alpha.6)
* gulp (^3.9.1)
* gulp-postcss (^6.4.0)
* gulp-sass (^3.1.0)
* postcss-flexbugs-fixes (^2.1.0)
* postcss-flexibility (^1.1.0)
* autoprefixer (^6.7.7)

## How do I use this?
* Simply clone or download this repository.
* Make sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed.
* Run `yarn install`.
* Run `gulp` to compile `src/sass/style.scss` into `public_html/assets/css/style.scss` or `gulp watch` to automatically compile your sass files when they change.
* *Note: To make use of [flexiblilty](https://github.com/jonathantneal/flexibility), you must include it's JavaScript file on all of your pages.*

The `style.scss` file already has the latest Bootstrap 4 version imported, so you can just import your other sass files below it.

## Browser Compatibility
To maximise browser compatiblity, we include a handful of clever packages into our gulp build process.

**We use:**
* https://github.com/luisrudge/postcss-flexbugs-fixes - to fix all of [flexbugs](https://github.com/philipwalton/flexbugs) issues.
* https://github.com/7rulnik/postcss-flexibility - to add `-js-display: flex` styles automatically for [flexiblilty](https://github.com/jonathantneal/flexibility).
* https://github.com/postcss/autoprefixer - to add browser vendor prefixes.
