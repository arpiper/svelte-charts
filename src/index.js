import Main from "./components/Main.html"

var chart = new Main({
  target: document.querySelector("#main"),
  data: {
    // dataset to put on the chart. minimum x,y
    dataset: {
      x: ['1','2','3','4','5'],
      y: [3,65,23,63,0],
      //y: [3, 51, 5, 0, 0, 51, 1, 2, 3, 4, 5],
      //x: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 11]
    },
    // scaling maximums for xy coordinates.
    //scales: {x: 10, y: 20},
    title: "no zeroes",
    size: {width: 500, height: 200, margin: 25},
    selector: "bar-chart-id",
    type: "pie",
    options: {
      show_zeroes: false,
      hovertooltip: false,
    },
  }
})

var chart2 = new Main({
  target: document.querySelector("#main"),
  data: {
    // dataset to put on the chart. minimum x,y
    dataset: {
      //x: ['1','2','3','4','5'],
      y: [3, 51, 5, 0, 0, 51, 1, 2, 3, 4, 5, 23, 52, 3, 1, 25, 62],
      x: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 4, 6, 22, 31, 5, 6]
    },
    // scaling maximums for xy coordinates.
    //scales: {x: 10, y: 20},
    size: {width: 500, height: 200, margin: 25},
    selector: "bar-chart-id2",
    type: "pie",
    options: {
      show_zeroes: false,
      hovertooltip: true,
      ticks: { 
        format: {
          y: {pre: "$"}
        },
      }
    }
  }
})

var chart1 = new Main({
  target: document.querySelector("#main"),
  data: {
    dataset: {
      x: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
      y: {
        'fiesrt': [2, 34, 23, 45, 72, 1, 4, 7, 53, 0],
        'second': [2, 3, 5, 2, 6, 29, 123, 32, 6, 0],
      }
      //y: [2, 3, 5, 2, 6, 29, 123, 32, 6, 0],
    },
    //scales: {x: 140, y: 100},
    selector: "chart-id",
    options: {
      multiline: true,
      show_zeroes: false,
      ticks: {
        format: {
          y: {pre: "$", suf: "MPH"},
        },
      },
    }
  }
})
