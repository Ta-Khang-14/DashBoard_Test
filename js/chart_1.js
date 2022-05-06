var xValues = ["3/4", "4/4", "5/4", "6/4", "7/4", "8/4", "9/4"];
var yValues = [130, 500, 700, 600, 450, 870, 900];
var barColors = [
    "#06941a",
    "#06941a",
    "#06941a",
    "#06941a",
    "#06941a",
    "#06941a",
    "#06941a",
    "#06941a",
    "#06941a",
];

new Chart("myChart_bar", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues,
            },
        ],
    },
    options: {
        legend: {
            display: true,
            position: "bottom",
        },
    },
});
