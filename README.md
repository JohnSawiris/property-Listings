# Propert Listing

This website allow users to view properties that are listed for sale, also allows user to add property to be listed as well.
### User Story

#### User can view a list of all the property listed
* Output: A list of all the properties listed for sale

#### User can add a new property
* Input: Owner, price, bedrooms, title, city, type
* Output: A new property will be added to the list


#### Admin can remove properties from the list
* Input: Navigate to admin route, click remove button
* Output: The property that received the click event will be removed

## Improvements:
* Add a pipe to filter based on the price, or bedrooms
* Add authentication, so user will be able to sign up and sign in with their gmail
* Add editting functionality to the admin

## Setup
### Instructions:
In order for this project to work. First make sure you have **NodeJS** installed on your machine.

To install NodeJS visit [this link](https://nodejs.org/en/) and follow the installation step.

Secondly, after **NodeJS** is installed you will have to install Angular cli golbal on your machine

#### In Terminal
```
$ npm install -g @angular/cli
```
Then to make sure it's installed globally run this command

```
$ npm list -g depth=0
```
This will show you a list of all the dependencies which are installed globally at the root level in node, after you run this command you should see something similar to this
```
+-- @angular/cli@1.6.5
```
Then run this
```
$ cd Desktop
$ git clone https://github.com/JohnSawiris/property-Listings
$ cd Local-Zoo
$ npm install
```
Also, you need a firebase account visit [this link](https://firebase.google.com/) and get your API key

* Once you have created an account, you should be taken to the dashboard area. Click on Go To Console in the up right-hand corner and then click add new project. Enter the project name and select your country.

* Then you will be taken to the Overview area, from there select Add Firebase to your web app.

* Then a pop-up model will open, this is your API key, copy the information within.

* Then you need to create a file called api-key.ts inside the app folder.

In The terminal
```
property-listing/src/app $ touch api-key.ts
```
This should create the  file for you inside the app folder

* Inside api-key.ts file your code should look like this
```javascript
export const firebaseApiKey = {
    apiKey: "",
     authDomain: "",
     databaseURL: "",
     projectId: "",
     storageBucket: "",
     messagingSenderId: ""
}
```
Now in the Terminal

```
$ ng serve --open
```

Now you should see a browser window open and the application is running on it.

### Bugs
_There's no known bugs_

### Technologies Used
* HTML
* CSS
* TypeScript
* ES 6
* Firebase
* Angular 2
* bootstrap

### License
Copyright (c) 2018 **John Sawiris** All Rights Reserved.

_This software is licensed under the MIT license._
