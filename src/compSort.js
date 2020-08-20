async function compSort(arr) {
  let gap = arr.length
  let shrink = 1.3
  let sorted = false
  while (!sorted) {
    gap = Math.floor(gap / shrink)
    if (gap <= 1) {
      gap = 1
      sorted = true
    }
    let i = 0
    while (i + gap < arr.length) {
      if (arr[i].h > arr[i + gap].h) {
        colorBars(arr[i], arr[i + gap])
        await sleep()
        let tmp = arr[i].h
        arr[i].h = arr[i + gap].h
        arr[i + gap].h = tmp
        sorted = false
        remColor(arr[i], arr[i + gap])
      }
      i = i + 1
    }
  }
}