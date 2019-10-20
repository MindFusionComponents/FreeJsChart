var Charting = MindFusion.Charting;
var Controls = MindFusion.Charting.Controls;
var Collections = MindFusion.Charting.Collections;
var Drawing = MindFusion.Charting.Drawing;
var LabelKinds = MindFusion.Charting.LabelKinds;
var ToolTip = MindFusion.Charting.ToolTip;
// create the chart
var pieChartEl = document.getElementById('pieChart');
pieChartEl.width = pieChartEl.offsetParent.clientWidth;
pieChartEl.height = pieChartEl.offsetParent.clientHeight;
var pieChart = new Controls.PieChart(pieChartEl);
pieChart.startAngle = 45;
pieChart.title = "Sales By Country";
pieChart.showDataLabels = LabelKinds.InnerLabel | LabelKinds.ToolTip;

// customize tooltips
ToolTip.verticalPadding = 4
ToolTip.horizontalPadding = 4

// create sample data
var values = new Collections.List([20.00, 30.00, 10.00, 72, 14, 5, 40.00]);
var total = 0;

for(var i = 0; i < values.count(); i++)
	total += values.items()[i];

var series = new Charting.PieSeries(values, ["10.5%" , "15.7%", "5.2%", "37.7%", "7.3%", "2.6%", "20.9%"], ["BR", "AR", "ES", "TU", "LU", "NL", "FR"]);
pieChart.series = series;
pieChart.showToolTips = true;
	
series.supportedLabels = LabelKinds.InnerLabel | LabelKinds.ToolTip | LabelKinds.OuterLabel;

series.getLabel = function (index, kind)
{
	if (kind == LabelKinds.ToolTip)
		return this.tooltips[index];

	if (kind == LabelKinds.OuterLabel)
		return this.outerLabels.items()[index];
	

	if (kind == LabelKinds.InnerLabel)
		return (values.items()[index]/total * 100).toFixed(2) + " %"; 

	return null;
};

series.tooltips = [20.00, 30.00, 10.00, 72, 14, 5, 40.00];

var brushes = new Collections.List([
	new Drawing.Brush("#669acc"),
	new Drawing.Brush("#5a79a5"),
	new Drawing.Brush("#003466"),
	new Drawing.Brush("#9caac6"),
	new Drawing.Brush("#ce0000"),
	new Drawing.Brush("#616a7f"),
	new Drawing.Brush("#ea684f")
]);
var seriesBrushes = new Collections.List();
seriesBrushes.add(brushes);
var strokes = new Collections.List([
	new Drawing.Brush("#ffffff")
]);
var seriesStrokes = new Collections.List();
seriesStrokes.add(strokes);

 var thicknesses = new Collections.List([
	6.0
]);
var seriesThicknesses = new Collections.List();
seriesThicknesses.add(thicknesses);

pieChart.detachedSlices = new Collections.List([1, 4]);
pieChart.plot.seriesStyle = new Charting.PerElementSeriesStyle(seriesBrushes, seriesStrokes, seriesThicknesses);
pieChart.theme.highlightStroke = new Drawing.Brush("#000063");
pieChart.theme.dataLabelsFontSize = 12;
pieChart.theme.dataLabelsBrush = new Drawing.Brush("#ffffff");
pieChart.theme.legendBackground = new Drawing.Brush("#9caac6");
pieChart.legendRenderer.showSeriesElements = true;
pieChart.legendRenderer.showTitle = false;
pieChart.legendRenderer.elementLabelKind = LabelKinds.OuterLabel;
pieChart.showLegend = true;
pieChart.draw();