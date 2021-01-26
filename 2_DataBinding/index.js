var dataset = [1, 2, 3, 4, 5];

d3.select("body")
  .selectAll("p")
  .data(dataset)
  .enter()
  .append("p") // appends paragraph for each data element
  // .text("D3 is awesome!!")
  .text((d) => d); // returns to each element from data set, mapping them
