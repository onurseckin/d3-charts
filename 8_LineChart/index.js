const api =
  "https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-01-01&end=2021-01-01";

// Loading data from API when DOM Content has been loaded
document.addEventListener("DOMContentLoaded", (event) => {
  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      var parsedData = parseData(data);
      console.log(parsedData);
      drawChart(parsedData);
    })
    .catch((err) => console.log(err));
});

// Parse data into key value pairs
// @param {Object} data Object containing historical data of BPI

const parseData = (data) => {
  let arr = [];
  for (let i in data.bpi) {
    arr.push({
      date: new Date(i), // date
      value: +data.bpi[i], // convert string to number
    });
  }
  return arr;
};

// Creates a chart using d3
// @param {Object} data Object containing historical data of BPI

const drawChart = (data) => {
  let svgWidth = 600,
    svgHeight = 400;
  var margin = { top: 20, right: 20, bottom: 30, left: 50 };
  var width = svgWidth - margin.left - margin.right;
  var height = svgHeight - margin.top - margin.bottom;

  var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);
  var g = svg
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  var x = d3.scaleTime().rangeRound([0, width]);
  var y = d3.scaleLinear().rangeRound([height, 0]);

  var line = d3
    .line()
    .x((d) => x(d.date))
    .y((d) => y(d.value));

  x.domain(d3.extent(data, (d) => d.date)); // extent returns min and max val of data set
  y.domain(d3.extent(data, (d) => d.value)); // and domain understands the chart boundaries

  g.append("g")
    .attr("transform", "translate(0, " + height + ")")
    .call(d3.axisBottom(x))
    .select(".domain")
    .remove();

  g.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#000")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", "0.71em")
    .attr("text-anchor", "end")
    .attr("Price ($)");

  g.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("stroke-width", "1.5")
    .attr("d", line);
};
