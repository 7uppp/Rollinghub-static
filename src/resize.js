window.addEventListener('resize', setRootFontSize)
setRootFontSize()

function setRootFontSize () {
  const screenWidth = window.innerWidth
  const baseWidth = 1920 // 设定的参考屏幕宽度
  const baseFontSize = 16 // 设定的参考字体大小

  const newFontSize = (screenWidth / baseWidth) * baseFontSize
  document.documentElement.style.fontSize = `${newFontSize}px`
}
