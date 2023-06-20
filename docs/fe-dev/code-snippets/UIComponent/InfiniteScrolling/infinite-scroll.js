const observerOptions = {
  threshold: [0, .25, .5, .75, 1]
}
const DETECT_RATIO = .5
const mountInfiniteScroll = (options) => {
  const {
    detector,
    detectListener,
    detectRatio = DETECT_RATIO,
  } = options
  const observer = (elem) => {
    const [{intersectionRatio, isIntersecting}] = elem
    if (intersectionRatio >= detectRatio && isIntersecting) {
      detectListener()
    }
  }
  const intersectionObserver = new IntersectionObserver(observer, observerOptions)
  intersectionObserver.observe(detector);
}