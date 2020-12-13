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
parcel build --no-cache --no-source-maps -d docs --public-url ... index.html
```
