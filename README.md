## Experimenting with wire services in LWC OSS

The intent of this repo is to serve as a reference to anyone trying to build their own wire services in lwc-oss framework. The wire adapter implementation here is based on [this](https://lwc.dev/guide/wire_adapter#syntax-to-implement-a-wire-adapter) doc.

This app merely accepts a subreddit name from the user and fetches the first 10 results and displays the title, with a hyperlink to the page

### Instructions

-   npm install
-   npx lwc-services build
-   npx http-server dist

See the app in action [here](https://surajp.github.io/lwc-oss-wire/dist)
