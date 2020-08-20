async function insertionSort(arr) {
  let i = 1
  while (i < arr.length) {
    let j = i
    while (j > 0 && arr[j - 1].h > arr[j].h) {
      colorBars(arr[j], arr[j - 1])
      await sleep()
      let tmp = arr[j].h
      arr[j].h = arr[j - 1].h
      arr[j - 1].h = tmp
      remColor(arr[j], arr[j - 1])
      j = j - 1
    }
    i = i + 1
  }
}