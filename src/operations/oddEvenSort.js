async function oddEvenSort(arr) {
  async function swap(arr, i, j) {
    let tmp = arr[i].h
    arr[i].h = arr[j].h
    arr[j].h = tmp
  }
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 1; i < arr.length - 1; i += 2) {
      if (arr[i].h > arr[i + 1].h) {
        colorBars(arr[i], arr[i + 1])
        await sleep()
        swap(arr, i, i + 1)
        sorted = false
        remColor(arr[i], arr[i + 1])
      }
    }
    for (let i = 0; i < arr.length - 1; i += 2) {
      if (arr[i].h > arr[i + 1].h) {
        colorBars(arr[i], arr[i + 1])
        await sleep()
        swap(arr, i, i + 1)
        sorted = false
        remColor(arr[i], arr[i + 1])
      }
    }
  }
}