# jive-persistence-mongo

## Synopsis
MongoDB peristence for [Jive Node SDK](https://www.npmjs.com/package/jive-sdk).

## Getting started

```
npm install jive-persistence-mongo
```

```
var jive = require('jive-sdk');
var express = require('express');
var app = express();

jive.service.init(app, {
    persistence: 'jive-persistence-mongo'
});
```
