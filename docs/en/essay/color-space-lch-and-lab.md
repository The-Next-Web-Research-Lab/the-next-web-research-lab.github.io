---
title: LCH LAB
---
# Color Space Series - LCH LAB

## LCH
> - [https://css.land/lch/](https://css.land/lch/)
> - [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lch)

LCH (Lightness, Chroma, Hue) is a type of color space. In LCH space, lightness is represented by the vertical axis of the cube, and chroma and hue are represented by the horizontal axis of the cube.

LCH space directly represents chroma, so it differs from the definition of saturation values in color spaces such as RGB, CMYK, etc. Chroma values do not depend on hue and lightness values. Therefore, LCH space can better represent the heterogeneity of colors.

To represent colors on output devices, conversion from LCH space to color spaces such as RGB or CMYK is required.

### Lightness (L)
Lightness indicates the brightness of the color. The closer to 0, the darker the color, and the closer to 100, the brighter the color.

### Chroma (C)
Chroma indicates the degree of the color. The higher the chroma value, the brighter and darker the color is expressed, and the lower the chroma value, the weaker the color is expressed.

### Hue (H)
Hue indicates the position of the color. The closer the hue value is to 0 degrees, the redder the color, the closer to 120 degrees, the greener the color, and the closer to 240 degrees, the bluer the color.

## LAB
> [https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/lab)

LAB (CIELAB) color space is a perceptually uniform color space developed in 1976 as CIELAB space. LAB space consists of two axes, L (Lightness) and a, b (color).

The L axis indicates brightness. The a axis indicates the color from green to red. The b axis indicates the color from blue to yellow.

LAB space is a device independent color space and a space that considers color perception. Therefore, color changes in LAB space look natural as people see them.

LAB space is widely used in fields such as image processing, color differentiation, color matching, etc.
