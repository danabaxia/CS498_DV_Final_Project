charts.chart2 = function() {
  //parameters
  // initialise layout variables
  //const margin = {top: 50, right: 20, bottom: 50, left: 60};
  const width = 960;
  const height = 600;

	function tooltipHtml(n, cases){	/* function to create html content string in tooltip div. */
		return "<h4>"+n+"</h4><table>"+
			"<tr><td>Reviews:</td><td>"+(cases)+"</td></tr></table>";
  }
  
  const svg = d3.select('#svg2')
                    .attr('width', width )
                    .attr('height', height)
                    .append('g')
                    //.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
  
  zika_data = [];
  
  d3.csv("data/reviews.csv", function (data) {
    data.forEach(function (d) {
        console.log(d);
    	zika_data.push({"state": d.state, "cases": +d.cases});  
      
    })
    //console.log(zika_data);
  //to find max value in an array
	var sampleData = [];	/* Sample random data. */	
  start = d3.max([1,d3.min(zika_data, function(d) {return d.cases; })]);
  end = 1 + d3.max(zika_data, function (d) { console.log(d); return d.cases });
  
  // Log Scale, starting number had to be greater than or equal to 1 to not break color coding
  const logScale = d3.scaleLog()
  .domain([start,end])
  const colorScaleLog = d3.scaleSequential(
    (d) => {
      return d3.interpolateOranges(logScale(d)) }
  ) 
	
	zika_data.forEach(function(d){
    	//console.log("d:", d);
    	uStatePaths.forEach(function (s) {
        //console.log("s:", s);
        if (d.state == s.n) { 
          d.n = s.n;
        	d.d = s.d;
        	d.id = s.id;
        }
      })
  
  //console.log(zika_data)    
	cases = +d.cases;
    
  

	sampleData.push({
   n: d.n,
   state: d.state,
   cases: cases,
   path: d.d,
   color: colorScaleLog(cases+5),
   color2:d3.interpolate("#000000", "#ffffff")(Math.round(cases)/100)});
		});
	//console.log("sampleData:", sampleData);
	/* draw states on id #statesvg */	
	uStates.draw("#svg2", sampleData, tooltipHtml);
	 })
	d3.select(self.frameElement).style("height", "600px"); 

}

