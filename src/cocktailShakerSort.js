async function cocktailShakerSort(arr) {
  let swapped = false
  do {

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].h > arr[i + 1].h) {
        colorBars(arr[i], arr[i + 1])
        await sleep()
        let tmp = arr[i].h
        arr[i].h = arr[i + 1].h
        arr[i + 1].h = tmp
        swapped = true
        remColor(arr[i], arr[i + 1])
      }
    }
    if (!swapped) {
      break
    }
    swapped = false
    for (let i = arr.length - 2; i >= 0; i--) {
      if (arr[i].h > arr[i + 1].h) {
        colorBars(arr[i], arr[i + 1])
        await sleep()
        let tmp = arr[i].h
        arr[i].h = arr[i + 1].h
        arr[i + 1].h = tmp
        swapped = true
        remColor(arr[i], arr[i + 1])
      }
    }
  } while (swapped)
}