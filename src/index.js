import Main from "./components/Main.html"

var chart = new Main({
  target: document.querySelector("#main"),
  data: {
    // dataset to put on the chart. minimum x,y
    dataset: {
      x: [1,2,3,4,5],
      y: [10, 9, 8,7,6]
    },
    // scaling maximums for xy coordinates.
    scales: {x: 10, y: 20}   
  }
})
