// 拖动dom
function moveDom(targetId, containerId) {
  const target = document.getElementById(targetId)
  let x, y = 0

  function onMoving(e) {
    const ev = e || window.event
    const container = document.getElementById(containerId)
    const containerW = container.clientWidth
    const containerH = container.clientHeight
    let moveX = ev.clientX - x
    let moveY = ev.clientY - y
    const maxX = containerW - target.offsetWidth
    const maxY = containerH - target.offsetHeight
    if (moveX < 0) {
      moveX = 0
    } else if (moveX > maxX) {
      moveX = maxX
    }
    if (moveY < 0) {
      moveY = 0
    } else if (moveY > maxY) {
      moveY = maxY
    }
    target.style.left = `${moveX}px`
    target.style.top = `${moveY}px`
  }

  function stopMoving(e) {
    document.removeEventListener('mousemove', onMoving)
    document.removeEventListener('mouseup', stopMoving)
  }

  function drag() {
    target.addEventListener('mousedown', (e) => {
      const ev = e || window.event
      ev.stopPropagation()
      ev.preventDefault()
      x = ev.clientX - target.offsetLeft
      y = ev.clientY - target.offsetTop
      document.addEventListener('mousemove', onMoving)
      document.addEventListener('mouseup', stopMoving)
    })
  }

  drag()
}