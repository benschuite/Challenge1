var ctx = document.getElementById('Brandstof').getContext('2d');
var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, "#1BADCF");
gradientStroke.addColorStop(1, "#21D27F");

var chart = new Chart(ctx, {
    type: 'doughnut',
	data: {
        datasets: [{
            label: 'Brandstof',
            data: [80, 20],
            backgroundColor: [gradientStroke, '#3E434B'] ,
			borderWidth: 0,
			cutoutPercentage: 20     
		}]
    },

    options: {
    	aspectRatio: 1.5,
    	cutoutPercentage: 80,
    }
});


var ctx2 = document.getElementById('snelheid').getContext('2d');
var gradientStroke = ctx2.createLinearGradient(500, 0, 100, 0);
gradientStroke.addColorStop(0, 'rgba(33, 210, 127, 0.1)');
gradientStroke.addColorStop(1, 'rgba(27, 173, 207, 0.6)');

var chart2 = new Chart(ctx2, {
    type: 'line',

    data: {
        labels: ['januari', 'februari', 'maart', 'april', 'mei'],
        datasets: [{
        	label: 'Snelheid',
            backgroundColor: gradientStroke,
            borderColor: gradientStroke,
            data: [0, 11, 15, 22, 27]
        }]
    },

    options: {
    	aspectRatio: 1.5,
    	legend: {
        	display: false
    	}

    }
});


