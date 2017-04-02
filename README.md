# bs4-libsass-gulp
Starter template for projects using Boostrap 4. It occured to me that there didn't seem to be any 'starter-kits' for people wanting to develop using Bootstrap 4, and all the latest and greatest technologies surrounding it.

This package aims to make it quick and simple to kick-start your project, using [Bootstrap 4](https://v4-alpha.getbootstrap.com/), and a already setup gulpfile using [LibSass](http://sass-lang.com/libsass) to make compile times super quick.

## What's included?
* bootstrap (^4.0.0-alpha.6)
* gulp (^3.9.1)
* gulp-postcss (^6.4.0)
* gulp-sass (^3.1.0)
* autoprefixer (^6.7.7)

## How do I use this?
* Simply clone or download this repository.
* Make sure you have [Yarn](https://yarnpkg.com/en/docs/install) installed.
* Run `yarn install`.
* Run `gulp` to compile `src/sass/style.scss` into `public_html/assets/css/style.scss` or `gulp watch` to automatically compile your sass files when they change.

The `style.scss` file already has the latest Bootstrap 4 version imported, so you can just import your other sass files below it.