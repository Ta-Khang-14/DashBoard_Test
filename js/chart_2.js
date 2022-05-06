var xValues = ["Bãi Cháy - QN"];
var yValues = [100];
var barColors = ["#06941a"];

new Chart("myChart_pie", {
    type: "pie",
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
        layout: {
            padding: 20,
        },
        legend: {
            display: false,
            position: "bottom",
        },
        pieceLabel: {
            render: "label",
            fontColor: "#0000",
            position: "outside",
            segment: true,
        },
    },
});
