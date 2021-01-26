var dataset = [80, 100, 60, 40, 50, 70, 90, 120, 160, 30];

var svgWidth = 500,
  svgHeight = 300;

var svg = d3.select("svg").attr("width", svgWidth).attr("height", svgHeight);

var xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, svgWidth]);

var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([svgHeight, 0]); //start and end point of axis

var x_axis = d3.axisBottom().scale(xScale);
var y_axis = d3.axisLeft().scale(yScale);

svg.append("g").attr("transform", "translate(50,10)").call(y_axis);

var xAxisTranslate = svgHeight - 20;

svg
  .append("g")
  .attr("transform", "translate(50, " + xAxisTranslate + ")")
  .call(x_axis);

// var barChart = svg
//   .selectAll("rect")
//   .data(dataset)
//   .enter()
//   .append("rect")
//   .attr("y", (d) => svgHeight - yScale(d))
//   .attr("height", (d) => yScale(d))
//   .attr("width", barWidth - barPadding)
//   .attr("transform", (d, i) => {
//     var translate = [barWidth * i, 0];
//     return "translate(" + translate + ")";
//   }); // d is for data, i is for index

// var text = svg
//   .selectAll("text")
//   .data(dataset)
//   .enter()
//   .append("text")
//   .text((d) => d)
//   .attr("y", (d, i) => svgHeight - d - 2)
//   .attr("x", (d, i) => barWidth * i);
