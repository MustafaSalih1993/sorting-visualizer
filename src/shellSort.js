async function shellSort(arr) {
  for (var h = arr.length; h > 0; h = parseInt(h / 2)) {
    for (var i = h; i < arr.length; i++) {
      var k = arr[i].h
      for (var j = i; j >= h && k < arr[j - h].h; j -= h)
        arr[j].h = await arr[j - h].h
      arr[j].h = await k
      colorBars(arr[i], arr[j])
      await sleep()
      remColor(arr[i], arr[j])
    }
  }
  return arr
}