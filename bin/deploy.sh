DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR/..
rm docs/*
parcel build --no-cache --no-source-maps -d docs --public-url /museoEnTransformacion/ index.html
