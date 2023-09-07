window.addEventListener('resize', setRootFontSize)
setRootFontSize()

function setRootFontSize () {
  const screenWidth = window.innerWidth
  const baseWidth = 1920
  const baseFontSize = 16

  const newFontSize = (screenWidth / baseWidth) * baseFontSize
  document.documentElement.style.fontSize = `${newFontSize}px`

  console.log(`screenWidth: ${screenWidth}, newFontSize: ${newFontSize}`)
}
