var Charting = MindFusion.Charting;
var Controls = MindFusion.Charting.Controls;
var Collections = MindFusion.Charting.Collections;
var Drawing = MindFusion.Charting.Drawing;
var LabelKinds = MindFusion.Charting.LabelKinds;
var GridType = MindFusion.Charting.GridType;
var Margins = MindFusion.Charting.Margins;

var chartEl = document.getElementById('scatterChart');
chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;
// create the chart
var lineChart = new Controls.LineChart(chartEl);

// create line brushes
var transparentBrush = new Drawing.Brush(Drawing.Color.fromArgb(0, 250, 250, 250));
var firstBrush = new Drawing.Brush("#669acc");
var secondBrush = new Drawing.Brush("#ce0000");
var thirdBrush = new Drawing.Brush("#003466");
lineChart.legendRenderer.background = new Drawing.Brush(Drawing.Color.fromArgb(255, 255, 255));
lineChart.legendRenderer.borderStroke = new Drawing.Brush("#c0c0c0");
lineChart.legendRenderer.showTitle = true;


lineChart.showZoomWidgets = true;
lineChart.showScatter = true;
// create sample data series
var labels = ["John", "Mary", "Bianca", "Joshua", "Celine", "Cathy", 
	"Boris", "David", "Graham", "Simone", "Robert", "James"];
var series1 = new Charting.BarSeries([0.3, 17, 22, 13, 4, 15, 26, 7, 28, 29, 10, 19], null, [0.3, 17, 22, 13, 4, 15, 26, 7, 28, 29, 10, 19], labels);	
series1.title = "2017";
lineChart.series.add(series1);

var series2 = new Charting.Series2D([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
	[2, 3, 7, 6, 9, 11, 13, 10, 14, 18, 21, 24], [2, 3, 7, 6, 9, 11, 13, 10, 14, 18, 21, 24]);
series2.title = "2018";
lineChart.series.add(series2);

var series3 = new Charting.Series2D([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ], 
	[12, 7, 15, 16, 19, 13, 14, 22, 25, 28, 26, 23], [12, 7, 15, 16, 19, 13, 14, 22, 25, 28, 26, 23]);
series3.title = "2019";
lineChart.series.add(series3);	

lineChart.xAxis.interval = 1;
lineChart.xAxis.title = "";
lineChart.yAxis.title = "Investements made, USD Mlns";
lineChart.yAxis.minValue = 0;
lineChart.yAxis.maxValue = 33;
lineChart.yAxis.interval = 2.5;	


// assign one brush per series
var style = new Charting.MixedSeriesStyle();
style.commonStrokes = new Collections.List([transparentBrush, transparentBrush, transparentBrush]);
style.commonFills = new Collections.List([firstBrush, secondBrush, thirdBrush]);
style.uniformStrokeThickness = 5;

lineChart.title = "Investment Portfolio"
lineChart.legendTitle = "Year";
lineChart.showXCoordinates = false;
lineChart.showYCoordinates = true;
lineChart.plot.seriesStyle = style;
lineChart.gridType = GridType.Crossed;

lineChart.theme.gridColor1 = Drawing.Color.fromArgb(250, 250, 250);
lineChart.theme.gridColor2 = Drawing.Color.fromArgb(250, 250, 250);
lineChart.theme.gridLineThickness = 0.3;
lineChart.theme.gridLineColor = Drawing.Color.fromArgb(120, 120, 120);
lineChart.theme.dataLabelsFontSize = 12;
lineChart.theme.axisTitleFontSize = 12;
lineChart.theme.axisLabelsFontSize = 10;
lineChart.titleMargin = new Margins(0, 20, 0, 20);

lineChart.draw();