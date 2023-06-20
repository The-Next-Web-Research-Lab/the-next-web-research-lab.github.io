---
title: eslint

---

## overrides & @typescript-eslint/naming-convention
> - [https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work)
> - [https://typescript-eslint.io/rules/naming-convention/](https://typescript-eslint.io/rules/naming-convention/)

- ESLint에서 `overrides`를 사용하면 특정 파일에만 룰을 적용할 수 있다.
- TS에서 네이밍 컨벤션을 적용하고 싶다면, `@typescript-eslint/naming-convention`로 적용할 수 있다.

```json
{
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  "overrides": [
    {
      "files": ["**/global.d.ts"],
      "rules": {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": ["typeAlias", "interface"],
            "format": ["PascalCase"],
            "prefix": ["T"]
          }
        ]
      }
    },
    {
      "files": ["**/dto.d.ts"],
      "rules": {
        "@typescript-eslint/naming-convention": [
          "error",
          {
            "selector": ["typeAlias", "interface"],
            "format": ["PascalCase"],
            "suffix": ["Output"]
          }
        ]
      }
    }
  ]
}
```