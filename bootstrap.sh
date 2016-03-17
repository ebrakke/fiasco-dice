#!/usr/bin/env bash

apt-get update

# Node and npm install
apt-get install -y nodejs
ln -s /usr/bin/nodejs /usr/bin/node
apt-get install -y npm git

# Some global npm installs
npm install -g grunt-cli bower yo generator-karma generator-angular
# ln -sf /home/vagrant/node_modules /vagrant

# Mongo Install

# MySQL install



