# Kekker

This repo contains documentation powering [Kekker](https://kekker.com/).

## Getting started

### Prerequisites

1. Git
1. Node: any 10.x version or greater
1. Npm

### Installation

1. `cd demo` to go into the project root
1. `npm install` to install the website's npm dependencies

### Running locally
#### Developing mode
1. `npm run develop` to start the hot-reloading development server (powered by [Gatsby](https://www.gatsbyjs.org))
1. `open http://localhost:8000` to open the site in your favorite browser

#### Production mode
1. `npm run buils` to create a minified production bundle
1. `npm run serve` to start serving a production version
1. `open http://localhost:9000` to open the site in your favorite browser

#### Additional setup (not required for local run)
1. Open a `gatsby-config.js` file in the root folder
1. Find a `siteMetadata { \'siteUrl: \'localhost:8000 }}` option
1. Specify a different domain name

## Adding content

All content should be specified in the `content` folder.

At the moment only `docs` pages are supported, but there could be more page types (e.g. blog post, news) in the future.

### Create a new documentation page 
+ Go to the `content/docs/` folder
+ Create a folder with a representational name (e.g. `private-node-specification-commands`). Do not use spaces in folder- or filenames.
+ In the new folder, create a `index.md` file. You can use Markdown-specific language for your text (See [Markdown Cheatsheet]( https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet))
+ Provide a required meta-information at the beginning of the file   
```$
---
title: Your Title
subtitle: Your Subtitle
description: Your Description
date: 2019-06-11
---
```
+ These dashes `---` should be present in your file
+ After meta-info, write all your content

Working example of `index.md` file
```$xslt
---
title: Test
subtitle: A file for testing (this will go to the meta-tags in html header)
description: Go on and try (this will be displayed on the page)
date: 2019-06-11
---

#### This is test 
Some additional info 
```   

### Adding images to markdown 
+ Place an image to the same folder, next to your `index.md` file
+ On the new line place a following to the `index.md` file: `![Image-description](./image-name.image-extension)` example: `![Dashboard View](./dashboard-view.png)`
+ File structure should be like: 
```$xslt
content/
----docs/
-------my-dashboard-article/
------------index.md
------------dashboard-view.png
```

---
#### Developing next steps
 - [X] Solve 3 remain eslint problems
 - [X] Configure css-modules for the project
 - [X] Add a global theme with fonts and colors
 - [X] Apply a global theme to all elements
 - [ ] Add global styles for bold html tags and markdown elements
 - [X] Add flexible Layout element
 - [ ] Add Header, Footer, Sidebar elements (sidebar lists all pages)
 - [X] Add reusable small components: ButtonLink, Link, etc.
 - [ ] Add styles for the components
 
 #### Long-term tasks
 - [X] Configure yml config files to render a valid menu links
 - [ ] Configure safe yml load with GraphQl
 - [ ] Add CircleCI to the project
 - [X] Deploy master branch 
 
    
