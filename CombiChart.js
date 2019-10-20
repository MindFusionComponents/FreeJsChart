var Charting = MindFusion.Charting;
var Controls = MindFusion.Charting.Controls;
var Collections = MindFusion.Charting.Collections;
var Drawing = MindFusion.Charting.Drawing;
var GridType = MindFusion.Charting.GridType;
var chartEl = document.getElementById('combiChart');

chartEl.width = chartEl.offsetParent.clientWidth;
chartEl.height = chartEl.offsetParent.clientHeight;

var chart = new Controls.BarChart(chartEl);

chart.title = "Corporate Sales";
chart.titleMargin = new Charting.Margins(0, 20, 0, 20);
chart.gridType = GridType.Horizontal;
chart.barSpacingRatio = 1.5;

//legend settings
chart.showLegend = true;
chart.legendMargin = new Charting.Margins(10, 10, 10, 10);
chart.legendTitle = "Year";


var labels = new Collections.List([
	"Jan", "Feb", "Mar", "Apr", "May", "Jun",
	"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]);

// create sample data series
var series1 = new Charting.BarSeries(new Collections.List([2, 4, 6,  8, 10, 12, 14, 16, 18, 20, 22, 24]), null, null, labels);
var series2 = new Charting.SimpleSeries(new Collections.List([1.4, 8, 13, 15, 13, 8, 2, 8, 13, 15, 13, 8]), null);
var series = new Collections.ObservableCollection(new Array(series1, series2));
series.item(0).title = "2017";
series.item(1).title = "2018";
chart.series = series;

//the line series
var series3 = new Charting.Series2D(new Collections.List([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), new Collections.List([1.7, 6, 10.5, 11.5, 11.5, 10, 8, 12, 15.5, 17.5, 17.5, 16]), null);
series3.title = "Average value";
var lseries = new Collections.ObservableCollection(new Array(series3));
 
//customize the X-axis	
chart.xAxis.title = "Month";
chart.showXCoordinates = false;
chart.showXTicks = false;
chart.yAxis.title = "Turnover (in mlns)";
chart.xAxis.interval = 1;
 
 // create bar brushes
var lbrush = new Drawing.Brush("#F49B96");
var lstroke = new Drawing.Brush("#f07b75");

var firstBrush = new Drawing.Brush("#8898B8");
var secondBrush = new Drawing.Brush("#4E567D");

var firstStroke = new Drawing.Brush("#60759f");
var secondStroke = new Drawing.Brush("#3b415e");

 // assign one brush per series
var brushes = new Collections.List([firstBrush, secondBrush]);
var strokes = new Collections.List([firstStroke, secondStroke]); 
chart.plot.seriesStyle = new Charting.PerSeriesStyle(brushes, strokes);
	
//add a renderer for the line series
var lRenderer = new Charting.LineRenderer(lseries);
lRenderer.seriesStyle = new Charting.UniformSeriesStyle(lbrush, lstroke, 6);
chart.plot.seriesRenderers.add(lRenderer);

//tell the legend to consider data from all chart renderers
chart.legendRenderer.content = chart.plot.seriesRenderers; 

//theme settings for customizing the chart's appearance
chart.theme.legendBackground = new Drawing.Brush("#f2f2f2");
chart.theme.legendTitleFontSize = 14;
chart.theme.legendBorderStroke = new Drawing.Brush("#cecece");

chart.theme.axisTitleFontSize = 14;
chart.theme.axisLabelsFontSize = 12;
chart.theme.axisTitleFontName = "Verdana";
chart.theme.axisLabelsFontName = "Verdana";

chart.theme.dataLabelsFontName = "Verdana";
chart.theme.dataLabelsFontSize = 12;

chart.theme.gridLineStyle = Drawing.DashStyle.Dash;
chart.theme.gridColor1 = chart.theme.gridColor2 = new Drawing.Color("#ffffff");
chart.theme.gridLineColor = new Drawing.Color("#cecece");

chart.theme.highlightStroke = new Drawing.Brush("#F49B96");
chart.theme.highlightStrokeThickness = 4;
    

chart.draw();