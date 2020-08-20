async function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].h < arr[min].h) {
        min = j
      }
    }
    if (min !== i) {
      colorBars(arr[min], arr[i])
      await sleep()
      let tmp = arr[i].h
      arr[i].h = arr[min].h
      arr[min].h = tmp
      remColor(arr[min], arr[i])
    }
  }
}