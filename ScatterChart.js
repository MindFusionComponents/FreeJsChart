var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

define(["require", "exports", 'MindFusion.Charting'], function (require, exports, m) {
    "use strict";
    // series
	
    var Charting = m.MindFusion.Charting;
    var Controls = m.MindFusion.Charting.Controls;
    var Collections = m.MindFusion.Charting.Collections;
    var Drawing = m.MindFusion.Charting.Drawing;
	var LabelKinds = m.MindFusion.Charting.LabelKinds;
	var GridType = m.MindFusion.Charting.GridType;
	var Margins = m.MindFusion.Charting.Margins;
	
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
    var labels = new Collections.List(["John", "Mary", "Bianca", "Joshua", "Celine", "Cathy", 
		"Boris", "David", "Graham", "Simone", "Robert", "James"]);
    var series1 = new Charting.BarSeries(new Collections.List([0.3, 17, 22, 13, 4, 15, 26, 7, 28, 29, 10, 19]), null, new Collections.List([0.3, 17, 22, 13, 4, 15, 26, 7, 28, 29, 10, 19]), labels);	
    series1.title = "2014";
    lineChart.series.add(series1);
	
    var series2 = new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), 
	new Collections.List([2, 3, 7, 6, 9, 11, 13, 10, 14, 18, 21, 24]), new Collections.List([2, 3, 7, 6, 9, 11, 13, 10, 14, 18, 21, 24]));
    series2.title = "2015";
    lineChart.series.add(series2);
	
	var series3 = new Charting.Series2D(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]), 
	new Collections.List([12, 7, 15, 16, 19, 13, 14, 22, 25, 28, 26, 23]), new Collections.List([12, 7, 15, 16, 19, 13, 14, 22, 25, 28, 26, 23]));
    series3.title = "2016";
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
});