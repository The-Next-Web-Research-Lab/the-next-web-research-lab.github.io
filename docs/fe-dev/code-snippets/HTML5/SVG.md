---
title: SVG

---

## 육각형 이미지
<<< @/docs/fe-dev/code-snippets/HTML5/SVG/rounded-hexagon.jsx

## SVG 아이콘
### custom.d.ts
svg 확장자 파일 인식하도록함.
```ts
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
```

### loader.ts
svg 아이콘을 Map에 등록함
```ts
type IconType = 'My Icon' | 'My Icon2'

export const loader: Map<IconType, () => Promise<typeof import("*.svg")>> =
  new Map()
    .set("My Icon", () => import("./assets/My Icon.svg"))
```

### Icon.tsx
loader를 사용해서 아이콘을 동적 로딩함
```tsx
export const Icon = ({ className, iconType }: Props) => {
  const [IconComponent, setIconComponent] = useState<React.FC<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    const iconLoader = loader.get(iconType);
    if (iconLoader) {
      iconLoader().then((result) => {
        setIconComponent(() => result.ReactComponent);
      });
    }
  }, [iconType]);

  return IconComponent ? (
    <IconComponent className={className} />
  ) : (
    IconComponent
  );
};
```

## circle-css.html
<<< @/docs/fe-dev/code-snippets/HTML5/SVG/circle-css.html

## circle-css-with-text.html
<<< @/docs/fe-dev/code-snippets/HTML5/SVG/circle-css-with-text.html

## circle-js.html
<<< @/docs/fe-dev/code-snippets/HTML5/SVG/circle-js.html

## svg-parser.js
<<< @/docs/fe-dev/code-snippets/HTML5/SVG/svg-parser.js
