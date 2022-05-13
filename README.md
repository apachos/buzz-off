# Buzz Off :lady_beetle::ant::beetle::mosquito::bug::butterfly::fly::bee:

Practice debugging code

<p align="center"><img src="public/assets/bugz.gif"></p>

## Concepts covered:
* Identifying bugs using several strategies:
  - eliminating "noise" (i.e. temporarily commenting out or deleting chunks of code until the area of the code base responsible is detected for easier analysis)
  - utilizing breakpoints for both frontend and backend code to pause execution and allow careful examination of things such as variable values
  - isolating parts of the application stack (i.e. frontend versus backend) to facilate debugging (eg. direct API testing -- see the test/api/attraction.http file that uses the [REST Client VS Code extension](https://marketplace.visualstudio.com/items?itemName=humao.rest-client))
* Coding solutions to bugs identified

## Bugs included in branches
* [bugz](https://github.com/apachos/buzz-off/tree/bugz): two CSS bugs and two JavaScript bugs
* [sneaky-syntax-bug](https://github.com/apachos/buzz-off/tree/sneaky-syntax-bug): one JavaScript bug
* [sneaky-impl-bug](https://github.com/apachos/buzz-off/tree/sneaky-impl-bug): one CSS bug
* [main](https://github.com/apachos/buzz-off/): bugs removed, but if you click the "About" link in the navigation bar you can see them try to get in again :sunglasses:

## Debugging strategies
* Logging (look at what is being logged, add log statements, and/or turning on lower logging levels)
* Reproduce locally (because once you can see the bug in locally running code, it significantly facilitates bug detection and fixing)
* Bisecting git commit ranges until buggy code discovered (see the git feature to automate this: https://git-scm.com/docs/git-bisect)
* Breakpoints in the code to pause program execution and allow careful examination of variable values, call stack, etc.
* Eliminate "noise" (i.e. temporarily comment out code not responsible for the bug)
* Snapshots (i.e. examine memory snapshots for unusual object activity and/or memory leaks)
* Remote debugging (requires attaching an external platform-specific debugger to facilitate the use of breakpoints on remotely running code)
* APM (Application Performance Monitoring tools may put a strain on your pocketbook, but they can quickly detect issues and find their root causes -- even before end users do)
* Sleep on it (or get an extra set of eyes on the code) -- sometimes your brain is "biased" to look at the problem in a certain way and needs help to change it

## Tips to help avoid bugs
* format code often (eg. autoformat on save, check for formatting during the build, etc.)
* apply SLAP principle: https://hackernoon.com/object-oriented-tricks-6-slap-your-functions-a13d25a7d994
* use self-documenting code and don't repeat any context in names if, for example, they belong to an object/class that already covers it (TBD good reference)

## References:
* Thanks to Ajay Gorecha, the web page mockup can be found [here](https://www.figma.com/community/file/872143610182920290) and is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
* Debugging CSS in the browser: https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS
* Debugging JavaScript in the browser: https://javascript.info/debugging-chrome
* Debugging JavaScript in VS Code: https://code.visualstudio.com/docs/editor/debugging
* Getting background-clip to work in Safari: https://www.twobrainy.com/posts/adventures-with-background-clip-and-flex-in-safari/