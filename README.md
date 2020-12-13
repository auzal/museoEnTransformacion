# museoEnTransformacion

## dev install

- install parceljs.org

## run to dev

- run

```
parcel index.html
```

## how to build

- run

```
./bin/deploy.sh
```

or the manual steps in that file:

```
rm docs/*
parcel build --no-cache --no-source-maps -d docs --public-url /museoEnTransformacion/ index.html
```

## TODO domain name notes

- add a CNAME file to the repo with the domain name
- make sure github pages uses the new domain name
-- get an ssl certificate for the domain via github page
- change the parcel build line in bin/deploy.sh and in this readme, above (change the --public-url option)
- change the firebase API key restrictions to support the new domain
