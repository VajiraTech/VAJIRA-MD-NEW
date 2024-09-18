<h2 align="center">IMAGE-LIBRARY - API</h2>


## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

API - <a href="https://unsplash.com/" > Unsplash </a></br>
API - <a href="https://pixabay.com/" > Pixabay </a>

## 🏁 Getting Started <a name = "getting_started"></a>

This project was created using official API (Unsplash , Pixabay)

### Installing


```sh
yarn add @sl-code-lords/image-library
```

or

```sh
npm i @sl-code-lords/image-library
```

## 🎈 Usage <a name="usage"></a>

```ts
const {unsplash, pixabay} = require("@sl-code-lords/image-library")

```
## Unsplash - API

```ts
var result = await unsplash.search({"query": "nature", page: 1}) // page => Pagination
```

```ts
//result

{
  status: true,
  code_creator: { name: 'Sisula Welgamage', github: '@sisula' },
  base_url: 'https://unsplash.com/',
  total_results: 10016,
  total_pages: 334,
  result: [
    'https://unsplash.com/photos/ugnrXk1129g/download?ixid=M3w0ODA5NTZ8MHwxfHNlYXJjaHwxMjF8fG5hdHVyZXxlbnwwfHx8fDE2OTA1Mjg1ODV8MA',
    'https://unsplash.com/photos/v4bkVOl1sTI/download?ixid=M3w0ODA5NTZ8MHwxfHNlYXJjaHwxMjJ8fG5hdHVyZXxlbnwwfHx8fDE2OTA1Mjg1ODV8MA',
    'https://unsplash.com/photos/bm15OYOm-Gc/download?ixid=M3w0ODA5NTZ8MHwxfHNlYXJjaHwxMjN8fG5hdHVyZXxlbnwwfHx8fDE2OTA1Mjg1ODV8MA',
    'https://unsplash.com/photos/LNYdZutqsi0/download?ixid=M3w0ODA5NTZ8MHwxfHNlYXJjaHwxMjR8fG5hdHVyZXxlbnwwfHx8fDE2OTA1Mjg1ODV8MA',
    ... 25 more items
  ]

```
## Pixabay - API

```ts
var result = await pixabay.search({"query": "nature", page: 3}) // page => Pagination
```

```ts
//result

{
  status: true,
  code_creator: { name: 'Sisula Welgamage', github: '@sisula' },
  base_url: 'https://pixabay.com/',
  total_results: 880522,
  total_pages: undefined,
  result: [
    'https://pixabay.com/get/gf8180d0a3d9ad4ca6861a3ded76a1a74d4df540e1f10e3ee8a8440924db766d73e138b885523e3340eb883ee3006fe127c59398c5641ae507ce4bf160d2b93d4_1280.jpg',
    'https://pixabay.com/get/g51a4bfb189347267f7576a99333e4b478ba0af5b95e069cde3fa5bbe575cc0c8d582a674b920d6156a1f5745bd7af596758c8a0b517ba7db08b26201ffb9355c_1280.jpg',
    ... 27 more items
  ]
```

## ✍️ Authors <a name = "authors"></a>

- [@sisula welgamage](https://github.com/sisula) - project author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/image-library/contributors) who participated in this project.