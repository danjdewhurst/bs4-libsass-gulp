# bs4-libsass-gulp
This project provides a boilerplate for people wanting to create web applications using the latest and greatest technologies. We utilise [Bootstrap 4](https://v4-alpha.getbootstrap.com/), [LibSass](http://sass-lang.com/libsass) and a bunch of other useful packages to make the build process painless and fast (We use a wrapper for [LibSass](http://sass-lang.com/libsass) instead of [Ruby](https://www.ruby-lang.org/en/) to compile SASS - *it's seriously quick*).

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
* *Note: To make use of [flexiblilty](https://github.com/jonathantneal/flexibility), you must include it's JavaScript file on any page you want it to do its magic.*

The `style.scss` file already has the latest Bootstrap 4 version imported, so you can just import your other sass files below it.

## Browser Compatibility
To maximise browser compatiblity, we include a handful of clever packages into our gulp build process.

**We use:**
* https://github.com/luisrudge/postcss-flexbugs-fixes - to fix all of [flexbugs](https://github.com/philipwalton/flexbugs) issues.
* https://github.com/7rulnik/postcss-flexibility - to add `-js-display: flex` styles automatically for [flexiblilty](https://github.com/jonathantneal/flexibility).
* https://github.com/postcss/autoprefixer - to add browser vendor prefixes.

To see what Bootstrap 4 supports in more detail, look [here](https://v4-alpha.getbootstrap.com/getting-started/browsers-devices/). With the above additions to our build process, we should only increase this. In my testing, IE 9 works decently in most scenarios.
