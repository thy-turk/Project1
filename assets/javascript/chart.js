var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
        labels: ['Snow Depth(in)', 'Distance(mi)', 'Cost'],
        datasets: [{
            label: 'Resort1',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 15, 25]
        }, {
            label: 'Resort2',
            borderColor: 'rgb(30, 99, 132)',
            data: [5, 20, 2] 
        }]
    },

    // Configuration options go here
    options: {}
});