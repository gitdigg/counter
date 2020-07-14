# counter

> hits counter &amp; thumbup &amp; rating components for static websites

[![NPM](https://img.shields.io/npm/v/counter.svg)](https://www.npmjs.com/package/counter) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @gitdig/counter
//
yarn add @gitdig/counter
```

## Usage

### backend service

````bash
$: docker run liujianping/hits:latest server http 
````

### react usage

```jsx
import React, { Component } from 'react'

import {Counter, Thumbup} from 'counter'

class Example extends Component {
  render() {
    return (
      <div>
      Hit: <Counter hit baseURL="http://localhost:8080" />
      <br />
      Session: <Counter session baseURL="http://localhost:8080" />
      <br />
      User: <Counter user baseURL="http://localhost:8080" />
      <br />
      Thumbup: <Thumbup baseURL="http://localhost:8080" />
      <br />
      </div>
    )
    <MyComponent />
  }
}
```

## License

MIT © [gitdigg](https://github.com/gitdigg)
