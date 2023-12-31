---
title:  LCH LAB
---
# Color Space 시리즈 - LCH LAB

## LCH
> - [https://css.land/lch/](https://css.land/lch/)
> - [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch)

LCH (Lightness, Chroma, Hue)는 색상 공간의 일종입니다. LCH 공간에서는 밝기(Lightness)는 큐브의 수직축으로 표현되며, 채도(Chroma)와 휘색(Hue)는 큐브의 수평축으로 표현됩니다.

LCH 공간은 채도(Chroma)를 직접적으로 나타내기 때문에 RGB, CMYK 등과 같은 색상 공간에서의 채도 값의 정의와 다릅니다. 채도(Chroma) 값은 휘색(Hue)와 밝기(Lightness) 값에 의존하지 않습니다. 따라서, LCH 공간에서 색상의 이질성을 더 잘 나타낼 수 있습니다.

출력 장치에서의 색상 표현을 위해서는 LCH 공간에서 RGB나 CMYK 등의 색상 공간으로 변환이 필요합니다.

### Lightness (L)
Lightness는 색상의 밝기를 나타낸다. 0에 가까울수록 검은색, 100에 가까울수록 밝은색을 의미합니다.

### Chroma (C)
Chroma는 색상의 정도를 나타낸다. Chroma 값이 높을수록 색상이 밝고 진하게 표현되고, Chroma 값이 낮을수록 색상이 약하게 표현됩니다.

### Hue (H)
Hue는 색상의 위치를 나타낸다. Hue 값이 0도에 가까울수록 빨간색, 120도에 가까울수록 녹색, 240도에 가까울수록 파란색을 의미합니다.

## LAB
> [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab) 

LAB (CIELAB) color space는 1976년에 CIELAB 공간으로 개발된 perceptually uniform color space입니다. LAB 공간은 L (Lightness)와 a, b (색조) 두 개의 축으로 구성되어 있습니다.

L 축은 밝기를 나타냅니다. a 축은 초록에서 빨강의 색상을 나타냅니다. b 축은 파랑에서 노랑의 색상을 나타냅니다.

LAB 공간은 device independent color space이며, 색감을 고려한 공간입니다. 따라서, LAB 공간에서의 색상 변화는 사람이 보는 것처럼 자연스럽게 보여집니다.

LAB 공간은 이미지 처리, 색상 구분, 색상 매칭 등의 분야에서 널리 사용되고 있습니다.
