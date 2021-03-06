[![Build Status](https://travis-ci.org/andela-anwosu/inverted-index-cp1.svg?branch=develop)](https://travis-ci.org/andela-anwosu/inverted-index-cp1)
[![Coverage Status](https://coveralls.io/repos/github/andela-anwosu/inverted-index-cp1/badge.svg)](https://coveralls.io/github/andela-anwosu/inverted-index-cp1)
# Inverted-Index #


## Introduction ##

An inverted index is an index data structure storing a mapping from content, such as words or numbers, to its locations in a database file. Elasticsearch uses this structure, which is designed to allow very fast full-text searches. To create an inverted index, we first split the content field of each document into separate words (which we call terms, or tokens), create a sorted list of all the unique terms, and then list in which document each term appears.

### Features of this Application ###

  * Supports Upload of JSON file created following the format:
` [
    {"title": "This Is A Book Title",
    "text": "This is the book text."
    },
    {"title": "This Is Another Book Title",
    "text": "This is another book text."
    }
] `
  *  Creates an Index for any selected JSON file.

  *  Searching of a specific JSON file or all indexed JSON files.

### Usage ###

This App can be accessed on Heroku at: https://inverted-index-andela-anwosu.herokuapp.com/

Alternatively, You may clone the repository and run the app locally to use.

Local Installation Guide

Clone the repository
Install the dependencies using npm install
Run gulp to start the application.


### Technologies Used ###

* AngularJS
* Bootstrap
* EcmaScript 6 (ES2015)
* NodeJS
* Gulp (Task Runner)
* Karma (Generates Test Coverage Folder)

Fork this repository to your account.
Clone your repository: git clone git@github.com:your-username/inverted-index.git
Create your feature branch: git checkout -b new-feature
Commit your changes: git commit -m "did something"
Push to the remote branch: git push origin new-feature