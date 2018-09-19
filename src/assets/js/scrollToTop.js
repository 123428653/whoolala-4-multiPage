export default (AllDom,index) =>{
    // 用 class="d_jump" 添加锚点
    let jump = document.querySelectorAll('.'+AllDom)
    let total = jump[index].offsetTop - 80
    let distance = document.documentElement.scrollTop || document.body.scrollTop
    // 平滑滚动，时长500ms，每10ms一跳，共50跳
    let step = total / 50
    if (total > distance) {
      smoothDown()
    } else {
      let newTotal = distance - total
      step = newTotal / 50
      smoothUp()
    }
    function smoothDown () {
      if (distance < total) {
        distance += step
　　　　　　　document.body.scrollTop = distance
        document.documentElement.scrollTop = distance
        setTimeout(smoothDown, 10)
      } else {
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
      }
    }
    function smoothUp () {
      if (distance > total) {
        distance -= step
　　　　　　　document.body.scrollTop = distance
        document.documentElement.scrollTop = distance
        setTimeout(smoothUp, 10)
      } else {
        document.body.scrollTop = total
        document.documentElement.scrollTop = total
      }
   } 
}