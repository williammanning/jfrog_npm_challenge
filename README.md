# Sample project to demonstrate NPM packages integration with JFrog Artifactory

## Overview
NPM is staple of the Artifactory system.
To work with NPM repositories you need to use [JFrog CLI](https://www.jfrog.com/confluence/display/CLI/CLI+for+JFrog+Artifactory) and NPM.

Using the JFrog CLI, you can:
* Collect and Publish your npm build information to Artifactory
* Trace your builds easily once you have published the build information to Artifactory
* Gain visibility of the used dependencies
* Generate information about the build environment
* Scan your builds for potential vulnerabilities by connecting JFrog Xray
* Promote your build

## Prerequisites
* Get Artifactory trial, [on-prem or in the cloud](https://jfrog.com/artifactory/free-trial/)
* Install version 5.11 or above of NPM, the latest version at this time is 6.4.1.
* Install version v8.12.0 of node
* Install version 1.20.2 of [JFrog CLI](https://jfrog.com/getcli/)
* Fork and clone this project

## Running the Example
### Create NPM Repositories in Artifactory
* Click on *Quick Setup* under *Create Repositories* in your username drop-down menu in Artifactory UI.
* It will create a remote NPM repository named *npm-remote*, a local Go repository named *npm-local*, and virtual Go repository named *npm-virt*, which will include the *npm-remote* and *npm-local*.

### Resolve Dependencies and Build the Project Using JFrog CLI
In the root directory of the project, perform the following steps:

1. Configure Artifactory. Follow the prompts of the `config` command:

` > jfrog rt config`

2. Once the JFrog CLI is configured with Artifactory, we can try and build our project, resolving the dependencies from Artifactory, hoping it will find the modules in GitHub using the remote repository proxying functionality (we'll use the *npm-virt*, which includes *npm-remote*):

### Now you are going to build and set your npm-virt as your repo and build via the CLI

3. This command installs the project and refers to the npm repository as the source.

` > jfrog rt npmi npm-virt --build-name=jfrognpmtest --build-number=1.0.0`


### Now we will add some build information and some other stuff

4. We recommend adding the Git VCS details using the following build-add-git command:

` > jfrog rt bag jfrognpmtest 1.0.0`

5. Also, you can collect the environment variables using the following build-collect-env command:

` > jfrog rt bce jfrognpmtest 1.0.0`

6. Publish npm Packages

To publish the package, run the following command:

` > jfrog rt npmp npm-virt --build-name=jfrognpmtest --build-number=1.0.0`

7. Now it is time to publish the project

Run the following build publish command:

` > jfrog rt bp jfrognpmtest 1.0.0`

The npm package will now be displayed in Artifactory.

After running the build publish command, you can review the build information, and publish the modules and environment variables in Artifactory.
