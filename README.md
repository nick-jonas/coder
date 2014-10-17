# Coder 
## A simple way to make web stuff on Raspberry Pi

Coder is a free piece of software that turns a Raspberry Pi into a super simple platform that educators and parents can use to teach the basics of building for the web. New coders can craft small projects in HTML, CSS, and Javascript, right from the web browser.

http://goo.gl/coder

#To Install

- SSH into your pi as the coder user ```sudo su -s /bin/bash coder```
- Replace coder-dist compeletely with this cloned repo
- Install NPM dependencies 

```
npm install ./coder-base.json ./raspbian-addons/home/coder/coder-dist/coder-base/package.json
```

- Install Apps

```
cd coder-apps
./install_pi.sh
```


### What You'll Find Here

#### coder-base
The Coder node.js server and application files

#### coder-apps
The Coder applications that come pre-installed in the Coder distribution

#### raspbian-addons
Modifications and additions to the stock raspian configuration and init structure

#### installer
Utility for transfering the coder image to an SD Card

#### findcoder-appengine
EXPERIMENTAL: A status server that can be run to help locate multiple Coder devices in a classroom scenario


        
