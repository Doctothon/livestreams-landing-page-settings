# CICD Processes Specs

## Foreword

Here are the main principles implemented :
* we follow the git flow, we use the `Git flow AVH Edition` with all default configuration
* We must be able to deploy to production, without running a release
* Any release must trigger a deployment to production
* Every release must be tested from the `develop` Git branch



## Deployment to production

Every commit on the `master` git branch will trigger a deployment to production.
Conducting a git flow relase will therefore trigger a deployment to production.

From the new commit on the `master` Git branch, the pipeline automates the following steps :

* builds the website, and deploys it to surge.sh
* calculate the last release version number, and the next :
  * **release version numbbers must be pure semver**.
  * and this auto-increment feature allows to not ever have to choose or edit any version number.
* send a message to discord :
  * to let people know a Circle CI pipeline requries approval
  * to give the http link to the deployement on surge.sh : _**"please check that the website is what you want to deploy nto production"**_
* approve step :
  * if all are ok, the human checks the URL given to him gives approval to complete the release which triggers a deployment to production
  * the human checks the quality report, and the value of the next release version number
* deployment
  * start the git flow release
  * on the `release/X.Y.Z` git branch, the git flow release branch, execute those steps :
    * build the website for production, **don't run any tests**, and :
    * delete the `./docs/` folder
    * recreate empty the `./docs/` folder
    * put all the generated, tested static website files into  the `./docs/` folder

  * silently finsih the git flow release



## Deployment to production

Every commit on the `master` git branch will trigger a deployment to production.
Conducting a git flow relase will therefore trigger a deployment to production.

From the new commit on the `master` Git branch, we run the following steps :

* build the website, run all tests, and send the test results to global quality gate,
* calculate the last release version number, and the next :
  * **release version numbbers must be pure semver**.
  * and this auto-increment feature allows to not ever have to choose or edit any version number.
* approve step :
  * the human checks the quality report, and the value of the next release version number
  * if all are ok, the human gives approval to complete the release which triggers a deployment to production
* deployment
  * start the git flow release
  * on the `release/X.Y.Z` git branch, the git flow release branch, execute those steps :
    * build the website for production, **don't run any tests**, and :
    * delete the `./docs/` folder
    * recreate empty the `./docs/` folder
    * put all the generated, tested static website files into  the `./docs/` folder

  * silently finsih the git flow release

##### Deploy to production, without a release ?

All you have to do, is to push a new git commit on the `master` Git branch.

## Release

Conducting a git flow release will push a commit on the `master` git branch, and therefore trigger a deployment to production.

To run a new release, from the `develop` Git branch, we run the following steps :

* build the website, run all tests, and send the test results to global quality gate,
* calculate the last release version number, and the next :
  * **release version numbbers must be pure semver**.
  * and this auto-increment feature allows to not ever have to choose or edit any version number.
* approve step :
  * the human checks the quality report, and the value of the next release version number
  * if all are ok, the human gives approval to complete the release which triggers a deployment to production
* deployment
  * start the git flow release
  * on the `release/X.Y.Z` git branch, the git flow release branch, execute those steps :
    * build the website for production, **don't run any tests**, and :
    * delete the `./docs/` folder
    * recreate empty the `./docs/` folder
    * put all the generated, tested static website files into  the `./docs/` folder

  * silently finsih the git flow release
