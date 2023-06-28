// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
    // *     example: number_format(1234.56, 2, ',', ' ');
    // *     return: '1 234,56'
    number = (number + '').replace(',', '').replace(' ', '');
    var n = !isFinite(+number) ? 0 : +number,
        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
        s = '',
        toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
        };
    // Fix for IE parseFloat(0.55).toFixed(0) = 0;
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    if (s[0].length > 3) {
        s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
}

// Line Chart All Time
var ctx = document.getElementById("lineChart2013");
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Bikes",
            lineTension: 0.3,
            backgroundColor: "rgba(231, 74, 59, 0.05)",
            borderColor: "rgba(231, 74, 59, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(231, 74, 59, 1)",
            pointBorderColor: "rgba(231, 74, 59, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(231, 74, 59, 1)",
            pointHoverBorderColor: "rgba(231, 74, 59, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [1988, 2157, 3192, 2243, 2810, 4351, 4256, 2775, 3830, 4041, 2680, 3425],
        },
        {
            label: "Clothing",
            lineTension: 0.3,
            backgroundColor: "rgba(28, 200, 138, 0.05)",
            borderColor: "rgba(28, 200, 138, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(28, 200, 138, 1)",
            pointBorderColor: "rgba(28, 200, 138, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(28, 200, 138, 1)",
            pointHoverBorderColor: "rgba(28, 200, 138, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [1130, 1750, 2551, 2059, 3207, 5125, 5156, 3291, 4057, 3855, 2370, 2629],
        },
        {
            label: "Components",
            lineTension: 0.3,
            backgroundColor: "rgba(246, 194, 62, 0.05)",
            borderColor: "rgba(246, 194, 62, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(246, 194, 62, 1)",
            pointBorderColor: "rgba(246, 194, 62, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(246, 194, 62, 1)",
            pointHoverBorderColor: "rgba(246, 194, 62, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [736, 1202, 1812, 1558, 2586, 4106, 4370, 1477, 2397, 2570, 709, 1184],
        },
        {
            label: "Accessories",
            lineTension: 0.3,
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)",
            pointRadius: 3,
            pointBackgroundColor: "rgba(78, 115, 223, 1)",
            pointBorderColor: "rgba(78, 115, 223, 1)",
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
            pointHoverBorderColor: "rgba(78, 115, 223, 1)",
            pointHitRadius: 10,
            pointBorderWidth: 2,
            data: [300, 542, 695, 589, 1657, 3029, 4807, 4005, 4292, 4518, 3908, 3811],
        }

        ],
    },
    options: {
        maintainAspectRatio: false,
        layout: {
            padding: {
                left: 10,
                right: 25,
                top: 25,
                bottom: 0
            }
        },
        scales: {
            xAxes: [{
                time: {
                    unit: 'date'
                },
                gridLines: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    maxTicksLimit: 7
                }
            }],
            yAxes: [{
                ticks: {
                    maxTicksLimit: 5,
                    padding: 10,
                    // Include a number formatter here to format the ticks
                    callback: function (value, index, values) {
                        return number_format(value);
                    }
                },
                gridLines: {
                    color: "rgb(234, 236, 244)",
                    zeroLineColor: "rgb(234, 236, 244)",
                    drawBorder: false,
                    borderDash: [2],
                    zeroLineBorderDash: [2]
                }
            }],
        },
        legend: {
            display: false
        },
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
                label: function (tooltipItem, chart) {
                    var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                    return datasetLabel + ': ' + number_format(tooltipItem.yLabel) + ' units';
                }
            }
        }
    }
});