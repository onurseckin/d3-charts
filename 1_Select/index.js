// select returns first occurrence of the element
d3.select("h1")
  .style("color", "red")
  .attr("class", "heading")
  .text("updated h1 tag");

d3.select("body").append("p").text("first paragraph");
d3.select("body").append("p").text("second paragraph");
d3.select("body").append("p").text("third paragraph");

d3.selectAll("p").style("color", "blue");
