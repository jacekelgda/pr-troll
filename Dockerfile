FROM circleci/node:7.10
WORKDIR /home/circleci
ADD bin bin
ADD app app
RUN sudo mv bin/pr-troll /usr/local/bin
WORKDIR /home/circleci/app
RUN sudo npm install
WORKDIR /home/circleci
