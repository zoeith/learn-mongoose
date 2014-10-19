learn-mongoose
==============

A quick get up and go with nodejs, mongodb, and mongoose.

Because I was unhappy with documentation over at mongoose and mongodb (and I was also completely new to node). This should work on OSX or Linux.

#Setup
Download mongodb: http://www.mongodb.org/downloads
And follow the instructions to set up your first database: http://docs.mongodb.org/manual/tutorial/getting-started/

Included is a short script called starter because I didn't want to change my PATH. Use is optional, but be sure to edit it for the path to your mongo binaries and data folder.

If you want to shutdown the mongod server at anypoint use ```^c``` at mongod or in the mongo terminal:
```
use admin
db.shutdownServer()
```

#First Read/Write
The files mongoose\_practice\_read.js and mongoose\_practice\_write.js will print to the console your entries from the tutorial above and write to the collection a new entry.

... baby steps.
