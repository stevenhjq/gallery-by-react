#! /bin/bash
npm run dist
git add -A
git commit -m "change img path"
git push
git subtree push --prefix=dist origin gh-pages
