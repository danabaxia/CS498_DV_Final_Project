charts.chart3 = function() {
    
    updateChart3Data();

    
}

function updateChart3Data() {

    d3.select('#svg3').selectAll('*').remove();
    document.getElementById("title_chart3").innerHTML = "American";

    dataset = {
        "children": [{"Name":"Alaska","Count":2.0},
            {"Name":"Alabama","Count":3.7},
            {"Name":"Arizona","Count":4.0},
            {"Name":"Arkansas","Count":3.5},
            {"Name":"California","Count":4.2},
            {"Name":"Colorado","Count":3.9},
            {"Name":"Connecticut","Count":2.5},
            {"Name":"Delaware","Count":2.8},
            {"Name":"Florida","Count":3.9},
            {"Name":"Georgia","Count":3.0},
            {"Name":"Hawaii","Count":3.4},
            {"Name":"Idaho","Count":3},
            {"Name":"Illinois","Count":3.9},
            {"Name":"Indiana","Count":3.3},
            {"Name":"Michigan","Count":3},
            {"Name":"New Jersey","Count":4},
            {"Name":"New York","Count":4.2},
            {"Name":"Ohio","Count":3.2},
            {"Name":"Pennsylvanias","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Texas","Count":4.0},
            {"Name":"Wisconsin","Count":3.2},
            {"Name":"Mississippi","Count":3.0},
            {"Name":"West Virginia","Count":3.0},
            {"Name":"Utah","Count":4.0},
            {"Name":"Oklahoma","Count":3.2},
            {"Name":"Rhode Island","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Vermont","Count":4.0},
            {"Name":"Wyoming","Count":3.2},
            {"Name":"Maine","Count":3.0},
            {"Name":"Washington","Count":4.0},
        ]
    };

    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#svg3")
        .append("svg")
        .attr("width", 700)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/3;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/2;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");

}
function updateChart3Data2() {

    d3.select('#svg3').selectAll('*').remove();
    document.getElementById("title_chart3").innerHTML = "Chinese";

    dataset = {
        "children": [{"Name":"Alaska","Count":2.0},
            {"Name":"Alabama","Count":4},
            {"Name":"Arizona","Count":4},
            {"Name":"Arkansas","Count":3.5},
            {"Name":"California","Count":4.2},
            {"Name":"Colorado","Count":3},
            {"Name":"Connecticut","Count":4},
            {"Name":"Delaware","Count":3.9},
            {"Name":"Florida","Count":4.2},
            {"Name":"Georgia","Count":3.0},
            {"Name":"Hawaii","Count":3.4},
            {"Name":"Idaho","Count":3},
            {"Name":"Illinois","Count":3.9},
            {"Name":"Indiana","Count":3.3},
            {"Name":"Michigan","Count":3},
            {"Name":"New Jersey","Count":4},
            {"Name":"New York","Count":4.2},
            {"Name":"Ohio","Count":3.2},
            {"Name":"Pennsylvanias","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Texas","Count":4.0},
            {"Name":"Wisconsin","Count":3.2},
            {"Name":"Mississippi","Count":3.0},
            {"Name":"West Virginia","Count":3.0},
            {"Name":"Utah","Count":4.0},
            {"Name":"Oklahoma","Count":3.2},
            {"Name":"Rhode Island","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Vermont","Count":4.0},
            {"Name":"Wyoming","Count":3.2},
            {"Name":"Maine","Count":3.0},
            {"Name":"Washington","Count":4.0},
        ]
    };

    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#svg3")
        .append("svg")
        .attr("width", 700)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/3;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/2;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");

}

function updateChart3Data3() {

    d3.select('#svg3').selectAll('*').remove();
    document.getElementById("title_chart3").innerHTML = "Mexican";

    dataset = {
        "children": [{"Name":"Alaska","Count":2.0},
            {"Name":"Alabama","Count":3.9},
            {"Name":"Arizona","Count":4.2},
            {"Name":"Arkansas","Count":3.5},
            {"Name":"California","Count":4.2},
            {"Name":"Colorado","Count":4.2},
            {"Name":"Connecticut","Count":4},
            {"Name":"Delaware","Count":3},
            {"Name":"Florida","Count":2.0},
            {"Name":"Georgia","Count":3.0},
            {"Name":"Hawaii","Count":3.4},
            {"Name":"Idaho","Count":3},
            {"Name":"Illinois","Count":3.9},
            {"Name":"Indiana","Count":3.3},
            {"Name":"Michigan","Count":3},
            {"Name":"New Jersey","Count":4},
            {"Name":"New York","Count":4.2},
            {"Name":"Ohio","Count":3.2},
            {"Name":"Pennsylvanias","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Texas","Count":4.0},
            {"Name":"Wisconsin","Count":3.2},
            {"Name":"Mississippi","Count":3.0},
            {"Name":"West Virginia","Count":3.0},
            {"Name":"Utah","Count":4.0},
            {"Name":"Oklahoma","Count":3.2},
            {"Name":"Rhode Island","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Vermont","Count":4.0},
            {"Name":"Wyoming","Count":3.2},
            {"Name":"Maine","Count":3.0},
            {"Name":"Washington","Count":4.0},
        ]
    };

    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#svg3")
        .append("svg")
        .attr("width", 700)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/3;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/2;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");

}

function updateChart3Data4() {

    d3.select('#svg3').selectAll('*').remove();
    document.getElementById("title_chart3").innerHTML = "Brunch";

    dataset = {
        "children": [{"Name":"Alaska","Count":2.0},
            {"Name":"Alabama","Count":2.9},
            {"Name":"Arizona","Count":3.3},
            {"Name":"Arkansas","Count":3.5},
            {"Name":"California","Count":4.2},
            {"Name":"Colorado","Count":3.1},
            {"Name":"Connecticut","Count":3.9},
            {"Name":"Delaware","Count":3.3},
            {"Name":"Florida","Count":4},
            {"Name":"Georgia","Count":3.0},
            {"Name":"Hawaii","Count":3.4},
            {"Name":"Idaho","Count":3},
            {"Name":"Illinois","Count":3.9},
            {"Name":"Indiana","Count":3.3},
            {"Name":"Michigan","Count":3},
            {"Name":"New Jersey","Count":4},
            {"Name":"New York","Count":4.2},
            {"Name":"Ohio","Count":3.2},
            {"Name":"Pennsylvanias","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Texas","Count":4.0},
            {"Name":"Wisconsin","Count":3.2},
            {"Name":"Mississippi","Count":3.0},
            {"Name":"West Virginia","Count":3.0},
            {"Name":"Utah","Count":4.0},
            {"Name":"Oklahoma","Count":3.2},
            {"Name":"Rhode Island","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Vermont","Count":4.0},
            {"Name":"Wyoming","Count":3.2},
            {"Name":"Maine","Count":3.0},
            {"Name":"Washington","Count":4.0},
        ]
    };

    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#svg3")
        .append("svg")
        .attr("width", 700)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/3;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/2;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");

}


function updateChart3Data5() {

    d3.select('#svg3').selectAll('*').remove();
    document.getElementById("title_chart3").innerHTML = "Coffeee";

    dataset = {
        "children": [{"Name":"Alaska","Count":2.0},
            {"Name":"Alabama","Count":3.1},
            {"Name":"Arizona","Count":4.1},
            {"Name":"Arkansas","Count":3.5},
            {"Name":"California","Count":4.2},
            {"Name":"Colorado","Count":2.9},
            {"Name":"Connecticut","Count":3.1},
            {"Name":"Delaware","Count":2.8},
            {"Name":"Florida","Count":2.6},
            {"Name":"Georgia","Count":3.0},
            {"Name":"Hawaii","Count":3.4},
            {"Name":"Idaho","Count":3},
            {"Name":"Illinois","Count":3.9},
            {"Name":"Indiana","Count":3.3},
            {"Name":"Michigan","Count":3},
            {"Name":"New Jersey","Count":4},
            {"Name":"New York","Count":4.2},
            {"Name":"Ohio","Count":3.2},
            {"Name":"Pennsylvanias","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Texas","Count":4.0},
            {"Name":"Wisconsin","Count":3.2},
            {"Name":"Mississippi","Count":3.0},
            {"Name":"West Virginia","Count":3.0},
            {"Name":"Utah","Count":4.0},
            {"Name":"Oklahoma","Count":3.2},
            {"Name":"Rhode Island","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Vermont","Count":4.0},
            {"Name":"Wyoming","Count":3.2},
            {"Name":"Maine","Count":3.0},
            {"Name":"Washington","Count":4.0},
        ]
    };

    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#svg3")
        .append("svg")
        .attr("width", 700)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/3;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/2;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");

}

function updateChart3Data6() {

    d3.select('#svg3').selectAll('*').remove();
    document.getElementById("title_chart3").innerHTML = "Pizza";

    dataset = {
        "children": [{"Name":"Alaska","Count":2.0},
            {"Name":"Alabama","Count":3},
            {"Name":"Arizona","Count":3},
            {"Name":"Arkansas","Count":3.5},
            {"Name":"California","Count":4.2},
            {"Name":"Colorado","Count":3.8},
            {"Name":"Connecticut","Count":3.2},
            {"Name":"Delaware","Count":4.1},
            {"Name":"Florida","Count":3.9},
            {"Name":"Georgia","Count":3.0},
            {"Name":"Hawaii","Count":3.4},
            {"Name":"Idaho","Count":3},
            {"Name":"Illinois","Count":3.9},
            {"Name":"Indiana","Count":3.3},
            {"Name":"Michigan","Count":3},
            {"Name":"New Jersey","Count":4},
            {"Name":"New York","Count":4.2},
            {"Name":"Ohio","Count":3.2},
            {"Name":"Pennsylvanias","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Texas","Count":4.0},
            {"Name":"Wisconsin","Count":3.2},
            {"Name":"Mississippi","Count":3.0},
            {"Name":"West Virginia","Count":3.0},
            {"Name":"Utah","Count":4.0},
            {"Name":"Oklahoma","Count":3.2},
            {"Name":"Rhode Island","Count":3.1},
            {"Name":"Tennessee","Count":3.8},
            {"Name":"Vermont","Count":4.0},
            {"Name":"Wyoming","Count":3.2},
            {"Name":"Maine","Count":3.0},
            {"Name":"Washington","Count":4.0},
        ]
    };

    var diameter = 600;
    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var bubble = d3.pack(dataset)
        .size([diameter, diameter])
        .padding(1.5);

    var svg = d3.select("#svg3")
        .append("svg")
        .attr("width", 700)
        .attr("height", diameter)
        .attr("class", "bubble");

    var nodes = d3.hierarchy(dataset)
        .sum(function(d) { return d.Count; });

    var node = svg.selectAll(".node")
        .data(bubble(nodes).descendants())
        .enter()
        .filter(function(d){
            return  !d.children
        })
        .append("g")
        .attr("class", "node")
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    node.append("title")
        .text(function(d) {
            return d.Name + ": " + d.Count;
        });

    node.append("circle")
        .attr("r", function(d) {
            return d.r;
        })
        .style("fill", function(d,i) {
            return color(i);
        });

    node.append("text")
        .attr("dy", ".2em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Name.substring(0, d.r / 3);
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", function(d){
            return d.r/3;
        })
        .attr("fill", "white");

    node.append("text")
        .attr("dy", "1.3em")
        .style("text-anchor", "middle")
        .text(function(d) {
            return d.data.Count;
        })
        .attr("font-family",  "Gill Sans", "Gill Sans MT")
        .attr("font-size", function(d){
            return d.r/2;
        })
        .attr("fill", "white");

    d3.select(self.frameElement)
        .style("height", diameter + "px");

}