import Main from "./components/Main.html"

var chart = new Main({
  target: document.querySelector("#main"),
  data: {
    // dataset to put on the chart. minimum x,y
    dataset: {
      //x: ['1','2','3','4','5'],
      x: [1, 2, 3, 4, 5],
      y: [10, 9, 8,7,6]
    },
    // scaling maximums for xy coordinates.
    scales: {x: 10, y: 20},
    selector: "bar-chart-id",
    type: "bar"
  }
})

var chart1 = new Main({
  target: document.querySelector("#main"),
  data: {
    dataset: {
      //x: [2, 3, 5, 2, 6, 29, 123, 32, 6],
      x: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
      y: [2, 34, 23, 45, 72, 1, 4, 7, 53]
    },
    scales: {x: 140, y: 100},
    selector: "chart-id",
  }
})
