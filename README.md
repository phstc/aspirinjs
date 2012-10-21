# AspirinJS

Have you a JavaScript causing you a headache? Will you write a JavaScript that you don't want to cause a headache? 

AspirinJS is a collection of refactories to convert monolithic JavaScript code into maintainable, modular and testable JavaScript without any framework.

AspirinJS isn't a JavaScript Framework! It is only few practices to be used as a reference to improve JavaScript code smoothly.

## Why?

Jeff Atwood wrote an interesting post arguing about how difficult is to maintain a legacy code [When Understanding means Rewriting](http://www.codinghorror.com/blog/2006/09/when-understanding-means-rewriting.html). One of the most interesting points at this post is this graphic:

![When Understanding means Rewriting](http://codinghorror.typepad.com/.a/6a0120a85dcdae970b0120a86d7477970b-pi)

We spend more time at understanding and editing code than writing a new code. Write a procedural Javascript with lot of callbacks is easy and cool when it is new, but when we need to maintain that code, it becomes too hard to understand and edit even if the code was written by ourselves.

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. [Martin Fowler, Refactoring: Improving the Design of Existing Code]

## Motivation

I do like [Backbone](http://backbonejs.org) and encourage to use it and other Javascript frameworks as well, but sometimes is too hard to add them in a legacy code, e.g. projects which the resource urls don't follow any convention or no well defined resources etc.

JavaScript is a beautiful and sexy programming language, we can write a good code with pure JavaScript.

## Disclaimer

I'm using a little of jQuery in AspirinJS, little means $.ajax, $.extend, event handler (trigger and on) and DOM manipulation. I used jQuery only to avoid boilerplate code, it isn't directly related to the refactory.

## Static server

For best viewing of AspirinJS in your browser you should use [node-static](https://github.com/cloudhead/node-static).

To install node-static and run the static server:
```shell
$ cd aspirinjs/version_1
$ npm install node-static -g
$ static . -p 8080
```

Then open `http://localhost:8080`.

## Versions

AspirinJS is divided by version, each version is a folder following the convention `version_n`.

Before I tried to use version as a git branch as [AngularJS Phone Catalog Tutorial](https://github.com/angular/angular-phonecat) uses, but it wasn't easy to compare each version side by side, for example using vim `ctrl-wv`.

### version_1

* Creates a Twitter Search.

---
This version implements the user story bellow using the most trivial JavaScript implementation.

User Story:
> As an user, I want to search for tweets by keyword.

This version seems cool and easy to understand, but as it grows, it becomes too hard to maintain. Imagine an `if tweet.author == "@pablocantero" then change_tweet_color` another `if` to ignore tweets from someone, a pagination etc both inside the same callback. Headache is coming.

### version_2

* Splits the logic inside the callbacks into functions.

--- 
It is a little better, now we have specific functions to search and to print results, it makes us more confident to edit them separately.

### version_3

* * Creates Namespaces `app.[models | views]` to avoid globalization.
* * Creates DataModel (base model) responsible for Ajax calls.
* * Creates TwitterModel responsible for tweet searches.

--- 
Says Hello to Single Responsibility Principle (SRP) by extracting the Model logic into "Classes".

### version_4

* Creates TwitterView responsible for the view interaction.

### version_5

* Splits classes into files. 

---
Even with well defined classes it still uncomfortable to read all of them together in the same file, splitting them into files make it a lot easier to understand and edit them.

### version_6

* Converts JavaScript into CoffeeScript.
* Joins the generated JavaScripts into the `application.js`.

To compile and join:
```shell
coffee --join assets/javascripts/app/application.js --compile assets/javascripts/app
```

---
Now is the time to join the split files, we can't include all these files separately, it has [performance issues](http://www.stevesouders.com/blog/2008/03/20/roundup-on-parallel-connections/) and it becomes too hard to maintain them as they grow.

We can join these files in many ways such as: `find assets -name "*.js" -exec cat '{}' >> assets/application.js \;`, Rake tasks, Maven tasks, minifiers etc. I chose CoffeeScript, because I wanted to show how cool CoffeeScript is, and to use the convenient parameter `--join` from the CoffeeScript compiler which joins our files.

You don't need to use CoffeeScript to join the files as mentioned before, CoffeeScript was only an option that I chose, be free to continue with what you feel more comfortable.

In this version I kept the `assets_javascript` allowing us to compare JavaScript with CoffeeScript. We can split both versions (e.g. data_model.js and data_model.coffee) in our editor to compare them side by side.

### version_7

* Adds Jasmine specs.

To run the specs:
```shell
open http://localhost:8080/specs/javascripts/SpecRunner.html
```

---
Yeah fellows, now we can test our code, before it was too monolithic, too coupled etc. Modular means unit testable as well.

We could add a kind of integration test in the version_1, just to test if each change that we made kept our functionality working as expected instead of real test via browser. Something like that:

```
describe "search button"
   describe "#click"
     it "submits the form"
     it "searches on twitter"
     it "prints the tweets"
```

Be free to do it in your refactories.

### version_8

* Adds [evergreen](https://github.com/jnicklas/evergreen).

To run in shell:
```shell
bundle exec evergreen run
```

To seen in the browser:
```shell
bundle exec evergreen server
```

--- 
Test by opening the `SpecRunner.html` in the browser is nice and sometimes useful for cross-browsing test, but test by running shell commands is cooler, ham? Now we can easily integrated the Javascript tests with Continuous Integration (CI) servers.

## Final thoughts

Even if the last version seems to be bigger than the first one, believe me, it is much easier to maintain, it worth. I've never worked in a code that still in use without changes, you or a fellow will probably need to understand and edit this code in the future, write it thinking about it.

## Other similar examples

* [Backbone has made me a better programmer](http://floatleft.com/notebook/backbone-has-made-me-a-better-programmer)
* [Step by step from jQuery to Backbone](https://github.com/kjbekkelund/writings/blob/master/published/understanding-backbone.md/)