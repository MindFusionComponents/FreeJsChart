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
    var GridType = m.MindFusion.Charting.GridType;
    var chartEl = document.getElementById('barChart');
    chartEl.width = chartEl.offsetParent.clientWidth;
    chartEl.height = chartEl.offsetParent.clientHeight;
    var chart = new Controls.BarChart(chartEl);
    chart.titleMargin = new Charting.Margins(0, 20, 0, 20);
    chart.title = "Corporate Sales";
    chart.barSpacingRatio = 1.5;
    chart.legendMargin = new Charting.Margins(10, 10, 10, 10);
    chart.legendTitle = "Legend";
    chart.showLegend = true;

    // create bar brushes
    var thirdBrush = new Drawing.Brush("#e0e9e9");
    var secondBrush = new Drawing.Brush("#5a79a5");
    var firstBrush = new Drawing.Brush("#003466");
	var stroke = new Drawing.Brush("#cecece");

    var labels = new Collections.List([
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]);
    var angle = 1;
    // create sample data series
    var series1 = new Charting.BarSeries(new Collections.List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]), null, null, labels);
    var series2 = new Charting.SimpleSeries(new Collections.List([2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]), null);
    var series3 = new Charting.SimpleSeries(new Collections.List([2, 8, 13, 15, 13, 8, 2, 8, 13, 15, 13, 8]), null);
    var series = new Collections.ObservableCollection(new Array(series1, series2, series3));
    series.item(0).title = "2016";
    series.item(1).title = "2015";
    series.item(2).title = "2014";
    chart.xAxis.title = "Month";
    chart.showXCoordinates = false;
    chart.showXTicks = false;
    chart.yAxis.title = "Turnover (in mlns)";
    chart.series = series;
    chart.xAxis.interval = 1;
    // assign one brush per series
	var brushes = new Collections.List([firstBrush, secondBrush, thirdBrush]);
	var strokes = new Collections.List([new Drawing.Brush("#cecece")]); 
    chart.plot.seriesStyle = new Charting.PerSeriesStyle(brushes, strokes);
    chart.theme.legendBackground = new Drawing.Brush("#ffffff");
    chart.theme.legendBorderStroke = new Drawing.Brush("#cecece");
    chart.theme.axisTitleFontSize = 14;
	chart.theme.axisLabelsFontSize = 11;
    chart.theme.axisTitleFontName = "Verdana";
    chart.theme.axisLabelsFontName = "Verdana";
    chart.theme.dataLabelsFontName = "Verdana";
    chart.legendTitle = "Year";
    chart.theme.gridColor1 = chart.theme.gridColor2 = new Drawing.Color("#ffffff");
    chart.theme.gridLineColor = new Drawing.Color("#cecece");
    chart.gridType = GridType.Horizontal;
    chart.draw();

});