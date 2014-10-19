# Coder 
## A simple way to make web stuff on Raspberry Pi

Coder is a free piece of software that turns a Raspberry Pi into a super simple platform that educators and parents can use to teach the basics of building for the web. New coders can craft small projects in HTML, CSS, and Javascript, right from the web browser.

http://goo.gl/coder

#To Install

- SSH into your pi as the coder user ```sudo su -s /bin/bash coder```
- Replace coder-dist compeletely with this cloned repo and rename to coder-dist

```
git clone https://github.com/nick-jonas/coder.git && mv coder coder-dist
```


- Install NPM dependencies 

```
# from repo root
 cd ./coder-base/ 
 /opt/node/bin/npm install

# from repo root
 cd ./raspbian-addons/home/coder/coder-dist/coder-base/
 /opt/node/bin/npm install
```

- Install Apps

```
# from repo root
cd coder-apps
./install_pi.sh ../coder-base/
```

- Visit coder.local (or IP of device) in browser, and config your password


#Developing

##Mounting a Remote Drive

To mount the RPi file system and work over SSH, [use this tutorial.](http://www.danielandrade.net/2013/10/28/mounting-a-filesystem-via-ssh-on-osx-mavericks/)

```
sshfs coder@<ip address>:/ ~/development/sshfs-mount
```

##Using a Console Cable

Plug Console Cable into USB, and using the following:

Black > GND
Red > 5v
White > TXD
Green > RXD

```
screen /dev/cu.PL2303-00001004 115200
```

PL2303... is the device name and differs everytime.  115200 is the Baud Rate.


[Instructions here.](https://learn.adafruit.com/downloads/pdf/adafruits-raspberry-pi-lesson-5-using-a-console-cable.pdf)



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


        
