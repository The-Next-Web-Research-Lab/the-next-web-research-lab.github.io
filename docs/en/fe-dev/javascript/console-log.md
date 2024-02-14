---
title: How to use CSS in console.log
---
# How to use CSS in console.log

For debugging, various methods such as log, info, error, dir, table, etc. of the console object are used.

You can use CSS in addition to text and objects. Today we will learn how to use CSS in console.log!

## Use Case: Beware of Self-XSS
If you look for use cases in popular services, you will be warned about Self-XSS.

Instagram, Threads, and Facebook operated by Meta provide warnings about Self-XSS as follows.

![facebook](./img/35bf4984-e3e7-40b2-8d26-ffcdaef1199d.png)
![threads](./img/2cb7720b-07c4-43ce-9ce9-3e723f039ddc.png)
![instagram](./img/250c574b-a766-4a28-be1b-fb8259d6b370.png)

Google Translator warns:

![Google Translator](./img/989a9fb4-2b24-4f7e-9f66-b3c019a1aff8.png)

(We'll talk about Self-XSS next!)

## How to use CSS
You can apply CSS styles using %c. (Open the developer tools and give it a try!)

```js
console.log(
  '%cHello World',
  'color: red'
)
```
![log1](./img/6ccdfbd6-66da-4e4e-b11d-df12d286ac53.png)

After applying CSS, it will not be deactivated even if a new %c is encountered or a space is used, so use an empty character to deactivate CSS application.

```js
console.log(
  '%cHello World%c Noop!',
  'color: red',
  '' // deactivate CSS
)
```

![log2](./img/9487960c-03a9-451a-93ee-f4444de0d16b.png)
![log3](./img/2d89cf1c-60aa-4da6-a9c7-165bd7f635d4.png)


## Supported CSS ranges
The CSS available in console.log is limited. You can use CSS as shown below, and SVG and images can be used by using the background.

- background / color / font
- border / border-radius / margin / outline / padding
- box-shadow / box-decoration-break
- display / clear / float
- cursor / writing-mode
- line-height / text-*
- white-space / word-spacing / word-break

![log4](./img/76a28eee-9834-492a-8bd7-1c2513726e8d.png)

This is how to use CSS in console.log. thank you