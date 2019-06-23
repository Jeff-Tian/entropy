# entropy-ts

> 信息熵，使用 TypeScript 实现。

[![Git commit with emojis!](https://img.shields.io/badge/gitmoji-git%20commit%20with%20emojis!-brightgreen.svg)](https://gitmoji.js.org)
[![npm download][download-image]][download-url]
[![NPM version](https://badge.fury.io/js/entropy-ts.png)](http://badge.fury.io/js/entroy-ts)
[![Build Status](https://travis-ci.com/Jeff-Tian/entropy.svg?branch=master)](https://travis-ci.com/Jeff-Tian/entropy)
[![Dependencies Status](https://david-dm.org/Jeff-Tian/entropy-ts.png)](https://david-dm.org/jeff-tian/entropy-ts)
[![Coverage Status](https://coveralls.io/repos/github/Jeff-Tian/entroy/badge.svg?branch=master)](https://coveralls.io/github/Jeff-Tian/entropy?branch=master)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/Jeff-Tian/entropy)

[download-image]: https://img.shields.io/npm/dm/entropy-ts.svg?style=flat-square
[download-url]: https://npmjs.org/package/entropy-ts

## 信息熵

在机器学习中，熵刻画了任意样例集的纯度。给定包含关于某个目标概念的正反样例的样例集 S，那么 S 相对这个布尔型分类的熵为：

> Entropy(S) = -p<sub>+</sub>log<sub>2</sub>(p<sub>+</sub>) - p<sub>-</sub>log<sub>2</sub>(p<sub>-</sub>)

其中，p<sub>+</sub>是在 S 中正例的比例，p<sub>-</sub>是在 S 中反例的比例。在有关熵的所有计算中我们定义 0log0 为 0。

## 安装

```shell
npm install entropy-ts
```

## 使用

```typescript
import { entropy } from 'entropy-ts'

const samples = ['+', '+', '-', '+', '-', '-']

const res = entropy(samples)

assert.deepStrictEqual(res, 1)
```

## 开发

1. 修改代码后跑

   ```shell
   npm test
   ```

   确保测试通过。

2. `git commit`
3. `npm version patch/minor/major`
4. `npm publish`
