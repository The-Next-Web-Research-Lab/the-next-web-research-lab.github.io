---
title: Flex

---

# flex
기본적으로 컨텐츠 기반의 가로폭 그리고 부모 기준의 세로폭을 가지는 레이아웃을 의미한다.

## flex 구조
- 컨테이너와 아이템으로 나눠짐.
- 컨테이너와 아이템에 적용 할 수 있는 속성이 다르다.

### 컨테이너
```
- display: flex | inline-flex
- flex-direction: row | column | row-reverse | column-reverse
- flex-wrap: nowrap | wrap | wrap-reverse
- flex-flow: <flex-direction> <flex-wrap>
- justify-content:
    flex-start | flex-end | center |
    space-between | space-around | space-evenly
- align-items: stretch | flex-start | flex-end | center | baseline
- align-content: // flex-wrap: wrap 설정된 상태일 때 사용.
    stretch | flex-start | flex-end | center |
    space-between | space-around | space-evenly
```

### 아이템
```
// flex 박스의 기본 크기 설정
- flex-basis: auto | 단위(0 | 50% | 300px | 10rem) | content

// flex-basis 보다 커질 수 있는지 설정
- flex-grow: 0 | 숫자

// flex-basic 보다 작아질 수 있는지 설정
- flex-shrink: 1 | 숫자
- flex: <flex-grow> <flex-shrink> <flex-basis>

// 수직축 정렬
- align-self: auto | stretch | flex-start | flex-end | center | baseline
- order: 숫자
```

## sample
<<< @/fe-dev/code-snippets/CSS3/flex-width-height-auto.html

