async function countingSort(arr) {
  let min = arr[0].h
  let max = arr[0].h

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].h < min) {
      min = arr[i].h
    } else if (arr[i].h > max) {
      max = arr[i].h
    }
  }
  let z = 0
  const count = []

  for (let i = min; i <= max; i++) {
    count[i] = 0
  }

  for (let i = 0; i < arr.length; i++) {
      colorBars(arr[i],arr[i]);
    count[arr[i].h]++
    await sleep()
    remColor(arr[i],arr[i])
  }

  for (let i = min; i <= max; i++) {
    while (count[i]-- > 0) {
        colorBars(arr[z],arr[z])
      arr[z++].h = i
      await sleep()
         remColor(arr[z-1], arr[z-1])
    }
  }
}

