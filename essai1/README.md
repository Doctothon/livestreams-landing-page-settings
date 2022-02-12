# Webpack Bulma Scss Boilerplate



## Features
* `sass`
Sass reduces repetition of CSS and therefore saves time.
* `browsersync`
Browsersync makes your browser testing workflow faster by synchronising URLs, interactions and code changes across multiple devices.
* `gulp`
Gulp helps to automate & enhance your workflow by automating slow, repetitive workflows and composing them into efficient build pipelines.

## Dev: Build, test, and run

1. Download or clone this repository.

2. Install dependencies using:
    ```
    npm install
    ```
## Running
1. Development Server
    ```
    npm run dev
    ```
2. Production Build
    ```
    npm run build
    ```

## Generate me

```bash
npm init --yes
npm run meta
```


### The `S.R.I.` of a JavaScript File


* For `GNU/Linux` :

```bash

export JS_FILE_PATH=`$(pwd)/src/static/auth/oauth2/google/success/index.js`
cat ${JS_FILE_PATH} | openssl dgst -sha384 -binary | openssl base64 -A

export JS_FILE_PATH="$(pwd)/src/static/auth/oauth2/google/failure/roads.js"
ls -alh ${JS_FILE_PATH}
cat ${JS_FILE_PATH} | openssl dgst -sha384 -binary | openssl base64 -A


```

* For `Mac OS` :

```bash
export JS_FILE_PATH=`$(pwd)/src/static/auth/oauth2/google/success/index.js`
shasum -b -a 384 ${JS_FILE_PATH} | awk '{ print $1 }' | xxd -r -p | base64
```


Example with a file of this project :


```bash
export JS_FILE_PATH=$(pwd)/src/js/application.js
shasum -b -a 384 ${JS_FILE_PATH} | awk '{ print $1 }' | xxd -r -p | base64 -
```

Gives this std output :

```bash
bash-3.2$ export JS_FILE_PATH=$(pwd)/src/js/application.js
bash-3.2$ shasum -b -a 384 ${JS_FILE_PATH} | awk '{ print $1 }' | xxd -r -p | base64 -
Gz/tjqbm21zfFQ3EvuS5d7KhGfk2OaUz3D9WcAqyLiNhAcB6ojhebj9lyaa1DCQU
```

So we'll use in index.html :

```Html
<script src="/js/application.js" integrity="sha384-Gz/tjqbm21zfFQ3EvuS5d7KhGfk2OaUz3D9WcAqyLiNhAcB6ojhebj9lyaa1DCQU" crossorigin="anonymous"></script>
```

## Contributing

You're more than welcome to contribute to the project :heart:

To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Edit files.
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## Ref.

* https://bulma.io/documentation/customize/with-webpack/
* https://www.freecodecamp.org/news/learn-bulma-in-5-minutes-ec5188c53e83/
* 
