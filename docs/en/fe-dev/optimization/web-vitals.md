---
title: Web Vitals - Web Performance Optimization Basics
---
# Web Vitals - Web Performance Optimization Basics

[Web Vitals](https://web.dev/vitals/) is a performance quality guideline proposed by Google to provide a good UX. Google found that the tools and metrics they provided before were difficult to understand the UX quality depending on the skill level. So Web Vitals focused on simplifying the environment and helping to improve quality.

Web Vitals guides the numerical range that can judge good/bad for loading time, interaction time, and visual change amount items. Among them, the important indicators are distinguished as Core Web Vitals.

## Loading time measurement items

### [First Contentful Paint (FCP)](https://web.dev/fcp/)
It measures the time until some of the page content is rendered on the screen after the page load starts.
Here, content means text, images (including background images), svg elements, or non-white canvas elements.

#### Improvement method
- Reduce the number of resource requests and keep the response size small
- Provide static assets with efficient cache policy
- Optimize CSS capacity
- Remove rendering blocking resources
- Avoid excessive DOM size

### [Largest Contentful Paint (LCP)](https://web.dev/lcp/)
It measures the rendering time of the largest image/video or text block displayed in the viewport based on the time when the page starts loading for the first time.

Images target img tags, images in svg, video, url() backgrounds, and use the smaller size of the size and original size that are visible on the screen.
For text elements, only the size of the corresponding text node is considered.

#### Improvement method
- Optimize slow server response time
- Optimize rendering blocking requests such as JavaScript and CSS
- Optimize loading time of resources such as web fonts and images
- Optimize client-side rendering

### [Time to First Byte (TTFB)](https://web.dev/time-to-first-byte/) 
It means the time it takes for the browser to receive the first byte of page content. TTFB means that the performance is bad if it takes more than 600ms.

#### Improvement method
- Optimize the server application
- Optimize database queries
- Upgrade server hardware: more memory or CPU

## Interaction time measurement items

### [Time to Interactive (TTI)](https://web.dev/tti/)
It measures the time from the start of the page load to the time when the basic sub-resources are loaded, and measures the time when user input is possible.

The way to measure TTI is to find the time when the main thread is not blocked for 5 seconds after FCP starts, and search backwards from that time and find the end point of Long Task and set that point as the TTI completion point.

#### Improvement method
- Minimize JavaScript
- Pre-connect to the required origin
- Request preload
- Minimize the depth of major requests

### [First Input Delay (FID)](https://web.dev/fid/)
It measures the time from the first interaction of the user on the page to the time when the event handler can start processing.

#### Improvement method
- Reduce the impact of third-party code
- Reduce JavaScript execution
- Fewer requests and smaller response sizes
- Minimize main thread execution

#### Main thread execution minimization method
- Optimize third-party JavaScript
- Debounce input handlers
- Use web workers
- Reduce the scope and complexity of style calculations
- Avoid large and complex layouts and layout thrashing
- Use compositor-only properties and manage the number of layers
- Simplify page complexity and reduce paint areas

### [Total Blocking Time (TBT)](https://web.dev/tbt/)
It measures the total time between FCP and TTI.

The main thread is considered blocked when there is a Long Task that runs for more than 50ms, and the sum of the blocking times of each Long Task that occurs between FCP and TTI is TBT.

For example, if there are Long Tasks 250ms and 90ms, 240ms excluding 50ms each is TBT.

#### Improvement method
- Reduce the impact of third-party code
- Reduce JavaScript execution
- Minimize main thread execution
- Fewer requests and smaller response sizes

## Visual change amount measurement items
### [Cumulative Layout Shift (CLS)](https://web.dev/cls/)
It measures the sum of all individual layout shift scores for all unexpected layout shifts that occur on the page.
CLS is calculated by moving distance ratio x moving area ratio.

### Improvement method
- Always include size attributes on image and video elements
- Do not insert content above existing content except for responses to user interactions
- Apply transform animation instead of animation of properties that trigger layout changes

## Core Web Vitals
It means [LCP](https://web.dev/lcp/), [FID](https://web.dev/fid/), [CLS](https://web.dev/cls/), which are the main indicators of performance measurement items.

### LCP performance standard
- Good performance: less than 2500ms
- Poor performance: more than 4000ms

### FID performance standard
- Good performance: less than 100ms
- Poor performance: more than 300ms

### CLS performance standard
- Good performance: less than 0.1
- Poor performance: more than 0.25
