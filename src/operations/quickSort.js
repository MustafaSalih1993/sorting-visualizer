async function quickSort(arr, lo, hi) {
  if (lo < hi) {
    let pi = await partition(arr, lo, hi)
    await quickSort(arr, lo, pi)
    await quickSort(arr, pi + 1, hi)
  }
}
async function partition(arr, lo, hi) {
  let pivot = arr[lo].h
  let i = lo - 1
  let j = hi + 1
  while (1) {
    do {
      i++
    }
    while (arr[i].h < pivot)
    do {
      j = j - 1
    }
    while (arr[j].h > pivot)
    if (i >= j) {
      return j
    }
    colorBars(arr[i], arr[j])
    await sleep()
    let tmp = arr[i].h
    arr[i].h = arr[j].h
    arr[j].h = tmp
    remColor(arr[i], arr[j])
  }
}