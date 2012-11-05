# AspirinJS

Have you a JavaScript causing you a headache? Will you write a JavaScript that you don't want to cause you a headache? 

AspirinJS is a collection of refactories to convert monolithic JavaScript code into maintainable, modular and testable JavaScript without any framework.

AspirinJS isn't a JavaScript Framework! It is only a few practices to be used as a reference to improve JavaScript code smoothly.

## Why?

Jeff Atwood wrote an interesting post arguing about how difficult it is to maintain a legacy code [When Understanding means Rewriting](http://www.codinghorror.com/blog/2006/09/when-understanding-means-rewriting.html). One of the most interesting points in this post is this graphic:

![When Understanding means Rewriting](http://codinghorror.typepad.com/.a/6a0120a85dcdae970b0120a86d7477970b-pi)

We spend more time understanding and editing code than writing new code. Writing a procedural Javascript with lot of callbacks is easy and cool when it is new, but when we need to maintain that code, it becomes too hard to understand and edit even if the code was written by ourselves.

> Any fool can write code that a computer can understand. Good programmers write code that humans can understand. [Martin Fowler, Refactoring: Improving the Design of Existing Code]

## Motivation

I do like [Backbone](http://backbonejs.org) and encourage its use and other Javascript frameworks as well, but sometimes it is too hard to add them to legacy code, e.g. projects which the resource urls don't follow any convention or no well defined resources etc.

JavaScript is a beautiful and sexy programming language, therefore we can write good code with pure JavaScript.

## Disclaimer

I'm using a little jQuery in AspirinJS - little means $.ajax, $.extend, event handler (trigger and on) and DOM manipulation. I used jQuery only to avoid boilerplate code - it isn't directly related to the refactory.

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
It is a little better, now we have specific functions to search and print results. It makes us more confident to edit them separately.

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
Even with well defined classes it is still uncomfortable to read all of them together in the same file. Splitting them into files makes it a lot easier to understand and edit.

### version_6

* Converts JavaScript into CoffeeScript.
* Joins the generated JavaScripts into the `application.js`.

To compile and join:
```shell
coffee --join assets/javascripts/app/application.js --compile assets/javascripts/app
```

---
Now is the time to join the split files, we can't include all these files separately because it has [performance issues](http://www.stevesouders.com/blog/2008/03/20/roundup-on-parallel-connections/) and it becomes too hard to maintain them as they grow.

We can join these files in many ways such as: `find assets -name "*.js" -exec cat '{}' >> assets/application.js \;`, Rake tasks, Maven tasks, minifiers etc. I chose CoffeeScript because I wanted to show how cool CoffeeScript is, and to use the convenient parameter `--join` from the CoffeeScript compiler which joins our files.

You don't need to use CoffeeScript to join the files as mentioned before - CoffeeScript was only an option that I chose. Be free to continue with what you feel more comfortable.

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

To watch it in the browser:
```shell
bundle exec evergreen server
```

--- 
Testing by opening the `SpecRunner.html` in the browser is nice and sometimes useful for cross-browsing testing, but running shell commands is cooler, ham? Now we can easily integrate the Javascript tests with Continuous Integration (CI) servers.

## Final thoughts

Even if the last version seems to be bigger than the first one, believe me, it is much easier to maintain. It's worth. I've never worked in a code that never demanded changes. You or a fellow will probably need to understand and edit it in the future, so write this code thinking about it.

## Other similar examples

* [Backbone has made me a better programmer](http://floatleft.com/notebook/backbone-has-made-me-a-better-programmer)
* [Step by step from jQuery to Backbone](https://github.com/kjbekkelund/writings/blob/master/published/understanding-backbone.md/)