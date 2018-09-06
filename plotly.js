

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

function graph(mmcode,yearboundstart,yearboundend,xaxisid,yaxisid,graphtitle,graphdivid){
    var mmCode = mmcode;
    var yearBoundEnd = yearboundend;
    var yearBoundStart = yearboundstart;
    var xaxisId = xaxisid;
    var yaxisId = yaxisid;
    var graphTitle = graphtitle;
    var graphDivId = graphdivid;
    var unknownParam4 = 0;
    var maxMileageParam5 = 200000;

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
    //var url = urlString[0]+urlString[1]+urlString[2]+urlString[3]+urlString[4]+urlString[5]+urlString[6]+urlString[7]+urlString[8]+urlString[9];

    var url1 = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=35047420&param2=2015&param3=2018&param4=0&param5=120000'

    console.log(url);

    var request = new XMLHttpRequest();
    var url = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=35047420&param2=2015&param3=2018&param4=0&param5=120000'
    request.open('GET', url);
    request.responseType = 'json';
    
    request.onload = function() {
      cardata = request.response;
      var cardata = "";
      console.log(cardata)
    };

    request.send();


    Plotly.d3.csv('https://raw.githubusercontent.com/MattRidg/GetWorthTesting/master/landroverVelocityTest.csv', function(err, rows){
        
    function unpack(rows, key) {
	    return rows.map(function(row)
        { return row[key]; });
    }

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
  

    var urlString = [];
    urlString[0] = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=';
    urlString[1] = 35047420;
    urlString[2] = '&param2=';
    urlString[3] = 2015;
    urlString[4] = '&param3=';
    urlString[5] = 2018;
    urlString[6] = '&param4=';
    urlString[7] = 0;
    urlString[8] = '&param5=';
    urlString[9] = 120000;
    //var url = urlString[0]+urlString[1]+urlString[2]+urlString[3]+urlString[4]+urlString[5]+urlString[6]+urlString[7]+urlString[8]+urlString[9];

    var url1 = 'https://apiuat.getworth.co.za/api/utilities/marketdata?param1=35047420&param2=2015&param3=2018&param4=0&param5=120000'

    console.log(url);

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