var dataset = [60, 100, 84, 180, 30, 52, 160, 40, 70, 90];

var svgWidth = 500,
  svgHeight = 300,
  barPadding = 5;
var barWidth = svgWidth / dataset.length;

var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

var barChart = svg
  .selectAll("rect")
  .data(dataset)
  .enter()
  .append("rect")
  .attr("y", (d) => svgHeight - d)
  .attr("height", (d) => d)
  .attr("width", barWidth - barPadding)
  .attr("transform", (d, i) => {
    var translate = [barWidth * i, 0];
    return "translate(" + translate + ")";
  }); // d is for data, i is for index

var text = svg
  .selectAll("text")
  .data(dataset)
  .enter()
  .append("text")
  .text((d) => d)
  .attr("y", (d, i) => svgHeight - d - 2)
  .attr("x", (d, i) => barWidth * i);
