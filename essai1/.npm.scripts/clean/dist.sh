#!/bin/bash

if [ -d dist/ ]; then
  rm -fr dist/
fi;
mkdir -p dist/
mkdir -p dist/sass
mkdir -p dist/css
mkdir -p dist/js


#
# # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - # - #
#                                                                             #
#                    dist/
#                    ├── css
#                    │   ├── application.css
#                    │   └── application.native.css
#                    ├── index.cible.html
#                    ├── index.dev.html
#                    ├── index.exemple.html
#                    ├── index.html
#                    ├── index.template.html
#                    ├── js
#                    │   ├── application.js
#                    │   └── navbar.js
#                    └── layouts
#                        └── partials
#                            ├── footer.html
#                            ├── head.html
#                            ├── main
#                            │   ├── annonce.html
#                            │   ├── cadre_live.html
#                            │   ├── entrez_livestream.html
#                            │   └── fini.html
#                            └── navbar
#                                └── navbar1.html
#
#                    6 directories, 16 files
