# Compare multiple render performance

The test types in 4000 characters into an input. Input value is bound onto a div. The test is complete once all 4000 characters show up in that div.

## Current results

- [Mithril](https://mithril.js.org/): 129ms
- [Hyperdom](http://hyperdom.org/): 132ms
- [React](https://reactjs.org/): 1533ms

React is so ridiculously behind because it renders on each character input, whereas the other two batch up updates and only render on each animation frame (once every 16ms).

## Run test

```
yarn install
yarn test
```
