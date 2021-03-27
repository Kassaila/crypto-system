## Install

Instruction for installation WSK please read in main repo
[README.md](https://github.com/justcoded/web-starter-kit/blob/master/README.md#install)

## Commands

There are few commands available to help you build and test sites:

### Test

Test run with logs

```sh
$ npm run test
```

### Development mode

Watch For Changes & Automatically Refresh Across Devices

```sh
$ npm run dev
```

`dev` creates the `assets` folder in the root of the project. This includes linting as well as
image, script, stylesheet and HTML optimization. Also, a [browsersync](https://browsersync.io/)
script will be automatically generated, which will take care of precaching your sites resources.

### Build (production) mode

Serve the Fully Built & Optimized Site

```sh
$ npm run build
```

`build` creates the `production` folder in the root of the project with **minifying** files from
`assets`. It will help you to create clear instances of code for the **production** or **further
implementation**.

### Lint for HTML

```sh
$ npm run lint-html
```

### Lint & fix for JS

```sh
$ npm run lint-js
```

`lint-js` run the separate lint for JS files.  
Included in `dev` and `build`.

```sh
$ npm run fix-js
```

`fix-js` run lint and auto-fix (eslint method) for JS files.  
**Not included in any mode**.

### Lint for HTML & JS

```sh
$ npm run lint
```

## Structure

Your folder structure for WSK: If you want to use our WSK, you need to know something about the
structure.

```
├── assets                        #Root folder with project files & folders
  ├── html
     ├── partials                 #Folder for html components, that we can include into the templates
     ├── templates                #Folder for source html templates of pages
  ├── js                          #Folder for storing js files
     ├── modules                  #Folder for storing js modules
     ├── app.js                   #Main js file
  ├── scss
     ├── abstracts                #Folder for storing scss files
        ├── functions.scss        #Sass functions
        ├── helpers.scss          #Sass helpers
        ├── mixins.scss           #Sass mixins
        ├── variables.scss        #Sass variables that we can use in our scss files
     ├── base                     #Folder for storing base styles
        ├── forms.scss            #Sass styles for forms
        ├── main.scss             #Main scss file for base styles
        ├── reset.scss            #Sass reset
        ├── typography.scss       #Sass styles for text
     ├── components               #Global Reusable Presentational Components
     ├── layout                   #Global layout
     ├── pages                    #Global styles for pages
     ├── styles.scss              #Main scss file (can be used for importing another files)
  ├── system_files                #Folder with system files
  ├── tasks                       #Folder with tasks for gulpfile
  ├── vendor_entries              #Folder for vendor entries (plugins)
    ├── vendor.scss               #File for plugins styles
  ├── .babelrc                    #Config for Babel
  ├── .browserslistrc             #Config for autoprefixer
  ├── .editorconfig               #Config file for IDE
  ├── .eslintignore               #Eslint ignore list
  ├── .eslintrc                   #Config for eslint
  ├── .gitattributes              #Git config for defining attributes per path
  ├── .gitignore                  #Git ignore list
  ├── gulp-config.js              #Config for gulp
  ├── gulpfile.js                 #File with gulp tasks
  ├── package.json                #File with dependencies
  └── README.md
├── public                        #Folder with files after compiling
  ├── css                         #Folder with compiled styles
  ├── js                          #Folder with compiled js
  ├── custom-folder               #Folder with your sources, witch are not compiling (like - images, fonts, videos, audios)
  └── index.html                  #Compiled html file

```

In `package.json` you can find all the dependencies. In `assets` folder (`web-starter-kit` after
renaming) you can find all sources for the project.  
In `public` folder (created after running `gulp`) you will find compiled files. And in `public`
folder you will put your custom folders with sources (like - images, fonts, videos, audios).

Use `assets/js/modules` to add your javascript modules (don't forget to include it in app.js),
`assets/scss` folder to add your styles for the project. You can create, delete files and folders in
`assets/scss`, but don't forget to include them in `assets/scss/styles.scss` file.

Use `assets/vendor_entries` to include plugins into your project.
