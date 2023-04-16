# Indexing Service

REST service which writes to database, extracts images and media

```js 
    function indexApp() {
        // Checks if App Android Or IOS
        // Applies nessesory processing to extract version, icon, name, etc
        // Finds version, check for collisions,  
        // Indexes version, Upsert:App (add app if not exists, or push version)
    }
```

to start 

```shell
  mongodb /Users/asadrizvi/Downloads/mongodb-macos-x86_64-5.0.9/bin/mongod  --dbpath /Users/asadrizvi/data/db
 ```
## Schema


``` 
   App -> Versions -> Variants
```
if a Version is a bundle -> Create Variants on the fly
if a Version has multiple APKs save them individually by processor type, language ...etc
