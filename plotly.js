

var cardata = "";

function drawMileageVsPrice(/* mmCode,yearBoundStart,yearBoundEnd */){
    var request = new XMLHttpRequest();
    var url = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=35047420&param2=2015&param3=2018&param4=0&param5=120000'
    request.open('GET', url);
    request.responseType = 'json';
    
    request.onload = function() {
      cardata = request.response;
      //var cardata = "";
      console.log(cardata)
    };

    request.send();

    Plotly.d3.csv('https://raw.githubusercontent.com/MattRidg/GetWorthTesting/master/landroverVelocityTest.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row)
        { return row[key]; });}
    
    var traceMileagePrice = {
            x:unpack(cardata, 'mileage'), y: unpack(cardata, 'price'),
            mode: 'markers',
            marker: {
                size: 12,
                color: 'green',
                opacity: '0.5',
                line: {
                color: 'green',
                width: 0.5},
                opacity: 0.8},
            type: 'scatter'
    };
        console.log(traceMileagePrice);``

    data = [traceMileagePrice];    

    var layout = {
            title: 'Velocity Graph',
            scene: {
                  xaxis:{title: 'mileage'},
                  yaxis:{title: 'price'},
                  },
            
            margin: {
                  l: 40,
                  r: 40,
                  b: 40,
                  t: 40
              }
    };


    Plotly.newPlot('box1Graph', data, layout);

    });

}


function makeGraph(){

    var request = new XMLHttpRequest();
    var url = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=35047420&param2=2015&param3=2018&param4=0&param5=120000'
    request.open('GET', url);
    request.responseType = 'json';
    
    request.onload = function() {
      cardata = request.response;
      //var cardata = "";
      console.log(cardata)
    };

    request.send();



    Plotly.d3.csv('https://raw.githubusercontent.com/MattRidg/GetWorthTesting/master/landroverVelocityTest.csv', function(err, rows){
        
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(cardata, 'mileage'), y: unpack(cardata, 'price'),
	mode: 'markers',
	marker: {
        size: 12,
        color: 'green',
        opacity: '0.5',
		line: {
		color: 'green',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter'
};
console.log(trace1);``


var data = [trace1];

var layout = {
  title: 'Velocity Graph',
  scene: {
		xaxis:{title: 'mileage'},
		yaxis:{title: 'min_price'},
		zaxis:{title: 'year'},
		},
  
  margin: {
	    l: 40,
	    r: 40,
	    b: 40,
	    t: 40
    }
};

Plotly.newPlot('3dDiv', data, layout);
});


}
function graph2(){

    var mmCode = 35047420;
    var yearBoundEnd = 2018
    var yearBoundStart = 2015;
    var xaxisId = 'mileage';
    var yaxisId = 'price';
    var graphTitle = 'Velocity graffff';
    var graphDivId = '3dDiv';
    var unknownParam4 = 0;
    var maxMileageParam5 = '120000';
  

    var urlString = [];
    urlString[0] = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=';
    urlString[1] = mmCode;
    urlString[2] = '&param2=';
    urlString[3] = yearBoundStart;
    urlString[4] = '&param3=';
    urlString[5] = yearBoundEnd;
    urlString[6] = '&param4=';
    urlString[7] = unknownParam4;
    urlString[8] = '&param5=';
    urlString[9] = maxMileageParam5;
    var url = urlString[0]+urlString[1]+urlString[2]+urlString[3]+urlString[4]+urlString[5]+urlString[6]+urlString[7]+urlString[8]+urlString[9];
    //var url = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=35047420&param2=2015&param3=2018&param4=0&param5=120000';

    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    
    request.onload = function() {
      cardata = request.response;
      //var cardata = "";
      console.log(cardata)
    };

    request.send();
    console.log(url);


    Plotly.d3.csv('https://raw.githubusercontent.com/MattRidg/GetWorthTesting/master/landroverVelocityTest.csv', function(err, rows){
        
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(cardata, xaxisId), y: unpack(cardata, yaxisId),
	mode: 'markers',
	marker: {
        size: 12,
        color: 'green',
        opacity: '0.5',
		line: {
		color: 'green',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter'
};
console.log(trace1);``


var data = [trace1];

var layout = {
  title: graphTitle,
  scene: {
		xaxis:{title: 'mileage'},
		yaxis:{title: 'min_price'},
		zaxis:{title: 'year'},
		},
  
  margin: {
	    l: 40,
	    r: 40,
	    b: 40,
	    t: 40
    }
};

Plotly.newPlot(graphDivId, data, layout);
});




}



function graph(mmcode,yearboundstart,yearboundend,xaxisid,yaxisid,graphtitle,graphdivid,GroupBy,filterBy,filterValue,filterOperation){
    var mmCode = mmcode;
    var yearBoundEnd = yearboundend;
    var yearBoundStart = yearboundstart;
    var xaxisId = xaxisid;
    var yaxisId = yaxisid;
    var graphTitle = graphtitle;
    var graphDivId = graphdivid;
    var unknownParam4 = 0;
    var maxMileageParam5 = 300000;


    var urlString = [];
    urlString[0] = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=';
    urlString[1] = mmCode;
    urlString[2] = '&param2=';
    urlString[3] = yearBoundStart;
    urlString[4] = '&param3=';
    urlString[5] = yearBoundEnd;
    urlString[6] = '&param4=';
    urlString[7] = unknownParam4;
    urlString[8] = '&param5=';
    urlString[9] = maxMileageParam5;
    var url = urlString[0]+urlString[1]+urlString[2]+urlString[3]+urlString[4]+urlString[5]+urlString[6]+urlString[7]+urlString[8]+urlString[9];
    //var url = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=35047420&param2=2015&param3=2018&param4=0&param5=120000';

    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    
    request.onload = function() {
      cardata = request.response;
      //var cardata = "";
      //console.log(cardata)
    };
    request.send();

    //console.log(url);
        
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x:unpack(cardata, xaxisId), y: unpack(cardata, yaxisId), text: unpack(cardata, "year"),
	mode: 'markers',
	marker: {
        size: 12,
        opacity: '0.5',
		line: {
		width: 0.5},
        opacity: 0.8},
        transforms: [
            {
              type: 'filter',
              target: unpack(cardata, filterBy), //add user controls for filterBy, operation and value
              operation: filterOperation,
              value: filterValue
            },
            {
                type: 'filter',
                target: unpack(cardata, 'year'), 
                operation: '=',
                value: '2013'
            },  
            {
              type: 'groupby',
              groups: unpack(cardata, GroupBy), //add user control for group
            }],
	type: 'scatter'
};
console.log(trace1);``


var data = [trace1];

function axisRange(AxisId){

    switch (true) {
        // axis id is mileage
        case AxisId == "mileage":
            return 300000;
        // axis id is price
        case AxisId == "price":
            return 1000000;
        // axis id is velocity
        case AxisId == "velocity":
            return 365;

    }
}

var layout = {
  title: graphTitle,
  scene: {
		xaxis:{title: 'mileage'},
		yaxis:{title: 'min_price'},
		zaxis:{title: 'year'},
		},
  hovermode: "x",
  margin: {
	    l: 40,
	    r: 40,
	    b: 40,
	    t: 40
    },
    
  xaxis: {'showspikes' : true,range: [0,axisRange(xaxisid)]}, //creates axis range based on the needed parameter
  yaxis: {'showspikes' : true,range: [0,axisRange(yaxisId)]}, 
  spikemode: 'across'
  
};



Plotly.newPlot(graphDivId, data, layout).then(attach);







}

function attach() {
    var gd = document.getElementById('3dDiv');

    var xaxis = gd._fullLayout.xaxis;
    var yaxis = gd._fullLayout.yaxis;
    var l = gd._fullLayout.margin.l;
    var t = gd._fullLayout.margin.t;
    
    gd.addEventListener('mousemove', function(evt) {
      var xInDataCoord = xaxis.p2c(evt.x - l);
      var yInDataCoord = yaxis.p2c(evt.y - t);

      xInDataCoord = Math.round(xInDataCoord / 1000) * 1000;
      yInDataCoord = Math.round(yInDataCoord / 1000) * 1000;
      
      Plotly.relayout(gd, 'title', ['x: ' + xInDataCoord, 'y : ' + yInDataCoord].join('<br>'));
    });
  }



function master(){
    var mmcode = document.getElementById("mmcode").value;
    var yearBoundStart = document.getElementById("yearBoundStart").value;
    var yearBoundEnd = document.getElementById("yearBoundEnd").value;
    var xaxis = document.getElementById("xaxis").value;
    var yaxis = document.getElementById("yaxis").value;
    var unknownParameter = document.getElementById("UnknownParameter").value;
    var MaxMileage = document.getElementById("MaxMileage").value;
    var GroupBy = document.getElementById("GroupBy").value;
    var filterBy = document.getElementById("filterBy").value;
    var filterOperation = document.getElementById("Operation").value;
    var filterValue = document.getElementById("filterValue").value;

    var graphdivid = '3dDiv';
    var graphtitle = 'Velocity Graph';

    //console.log(document.getElementById("xaxis").value);

    graph(mmcode,yearBoundStart,yearBoundEnd,xaxis,yaxis,graphtitle,graphdivid,GroupBy,filterBy,filterValue,filterOperation);
}


