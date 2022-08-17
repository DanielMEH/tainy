google.charts.load("current", { packages: ["corechart", "bar"] });
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ["Compras totales", "Ventas totales"],
    ["Armenia", 8175000],
    ["Bogotá", 3792000],
    ["Medellin ", 2695000],
    ["Cali ", 2099000],
    ["Manizales", 1526000],
    ["Barranquilla", 1526000],
    
  ]);

  var options = {
    title: "Registro de compras de boletas",
    chartArea: { width: "70%" },
    hAxis: {
      title: "Analisis de ventas",
      minValue: 0,
    },
    vAxis: {
      title: "Tainy",
    },
  };

  var chart = new google.visualization.BarChart(
    document.getElementById("chart_div")
  );

  chart.draw(data, options);
}

