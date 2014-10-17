#!/bin/bash

## 
## Copies the common platform apps to
## the coder-base working directory. 
##
## sh install_common base_path
##
## Eg.
## sh install_common ../coder-base/

if [ $# != 1 ]
  then
    echo -e "\nUse:\ninstall_drinabox coderbase\n"
    exit
fi

base=$1

./install_app.sh weather $base ./drinabox/