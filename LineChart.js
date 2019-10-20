var Charting = MindFusion.Charting;
var Controls = MindFusion.Charting.Controls;
var Collections = MindFusion.Charting.Collections;
var Drawing = MindFusion.Charting.Drawing;
var LabelKinds = MindFusion.Charting.LabelKinds;
var GridType = MindFusion.Charting.GridType;
var DashStyle = MindFusion.Charting.Drawing.DashStyle;
var Margins = MindFusion.Charting.Margins;

var chartEl = document.getElementById('lineChart');
chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;
// create the chart
var lineChart = new Controls.LineChart(chartEl);
// create line brushes
var firstBrush = new Drawing.Brush("#669acc");
var secondBrush = new Drawing.Brush("#ce0000");
var thirdBrush = new Drawing.Brush("#003466");
lineChart.legendRenderer.background = new Drawing.Brush("#ffffff");
lineChart.legendRenderer.borderStroke = new Drawing.Brush("#c0c0c0");
lineChart.legendRenderer.showTitle = false;
lineChart.showZoomWidgets = true;
// create sample data series
var labels = ["'08", "'09", "'10", "'11", "'12", "'13", 
	"'14", "'15", "'16", "'17", "'18", "'19"];
var series1 = new Charting.Series2D([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
	[0, 17, 22, 13, 4, 15, 26, 7, 28, 29, 10, 19], labels);
series1.supportedLabels = LabelKinds.XAxisLabel;
series1.title = "Imperial Tower";
lineChart.series.add(series1);

series1.getLabel = function (index, kind)
{
	if (kind == LabelKinds.XAxisLabel)
		return this.labels.items()[index];

	return null;
};


var yLabels = new Collections.List();

var start = 0.5;
for( var i = 0; i < 30; i++ )
{
	if( i % 5 == 0)
		yLabels.add(i);
	else
		yLabels.add("");
	
	console.log(yLabels.item(i));
}

var series2 = new Charting.Series2D([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
	[2, 3, 7, 6, 9, 11, 13, 10, 14, 18, 21, 24], null);
series2.title = "Royal Resort";
lineChart.series.add(series2);

var series3 = new Charting.Series2D([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 
	[12, 7, 15, 16, 19, 13, 14, 22, 25, 28, 26, 23], null);
series3.title = "Majestic Spa";
lineChart.series.add(series3);	

lineChart.xAxis.interval = 1;
lineChart.xAxis.title = "Year";
lineChart.yAxis.title = "Visitors, in Thousands";
lineChart.yAxis.minValue = 0;
lineChart.yAxis.maxValue = 30;
lineChart.yAxis.interval = 2.5;	


// assign one brush per series
var style = new Charting.MixedSeriesStyle();
style.commonFills = new Collections.List([firstBrush, secondBrush, thirdBrush]);
style.commonStrokes = new Collections.List([firstBrush, secondBrush, thirdBrush]);
style.uniformStrokeThickness = 5;

lineChart.title = "VM Group Hotels Booking"
lineChart.showXCoordinates = false;
lineChart.showYCoordinates = true;
lineChart.plot.seriesStyle = style;
lineChart.gridType = GridType.Crossed;
lineChart.theme.gridLineStyle = DashStyle.Dot;
lineChart.theme.gridColor1 = Drawing.Color.fromArgb(250, 250, 250);
lineChart.theme.gridColor2 = Drawing.Color.fromArgb(237, 237, 237);
lineChart.theme.gridLineThickness = 1;
lineChart.theme.dataLabelsFontSize = 12;
lineChart.theme.axisTitleFontSize = 12;
lineChart.theme.axisLabelsFontSize = 10;
lineChart.titleMargin = new Margins(0, 20, 0, 20);

lineChart.draw();