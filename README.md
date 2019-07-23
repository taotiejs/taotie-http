# Taotie HTTP

[![npm][badge-version]][npm]
[![npm downloads][badge-downloads]][npm]
[![license][badge-license]][license]


[![github][badge-issues]][github]

HTTP logger of [Taotie][taotie], base on [pino-http][pino-http].

It outputs meaningful log message:

```
GET /api 200 10ms
```

## Installation

```sh
npm install @taotiejs/http
```

## Usage

All usages as same as [pino-http][pino-http].

## Server

You may use [`@taotiejs/server`][taotie] for log collecting and querying.

[taotie]: https://github.com/taotiejs/taotie-server
[pino-http]: https://github.com/pinojs/pino-http

[badge-version]: https://img.shields.io/npm/v/@taotiejs%2Fhttp.svg
[badge-downloads]: https://img.shields.io/npm/dt/@taotiejs%2Fhttp.svg
[npm]: https://www.npmjs.com/package/@taotiejs%2Fhttp

[badge-size]: https://img.shields.io/bundlephobia/minzip/@taotiejs%2Fhttp.svg
[bundlephobia]: https://bundlephobia.com/result?p=@taotiejs%2Fhttp

[badge-license]: https://img.shields.io/npm/l/@taotiejs%2Fhttp.svg
[license]: https://github.com/taotiejs/taotie-http/blob/master/LICENSE

[badge-issues]: https://img.shields.io/github/issues/taotiejs/taotie-http.svg
[github]: https://github.com/taotiejs/taotie-http

[badge-build]: https://img.shields.io/travis/com/taotiejs/taotie-http/master.svg
[travis]: https://travis-ci.com/taotiejs/taotie-http

[badge-coverage]: https://img.shields.io/coveralls/github/taotiejs/taotie-http/master.svg
[coveralls]: https://coveralls.io/github/taotiejs/taotie-http?branch=master
