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
    // create the chart
    var pieChartEl = document.getElementById('pieChart');
    pieChartEl.width = pieChartEl.offsetParent.clientWidth;
    pieChartEl.height = pieChartEl.offsetParent.clientHeight;
    var pieChart = new Controls.PieChart(pieChartEl);
    pieChart.startAngle = 45;
	pieChart.title = "Sales By Country";
	pieChart.showDataLabels = LabelKinds.InnerLabel | LabelKinds.ToolTip;

    // create sample data
    var values = new Collections.List([20.00, 30.00, 10.00, 72, 14, 5, 40.00]);
	var total = 0;
	
	for(var i = 0; i < values.count(); i++)
		total += values.items()[i];
	
	var series = new Charting.PieSeries(values, new Collections.List(["10.5%" , "15.7%", "5.2%", "37.7%", "7.3%", "2.6%", "20.9%"]), new Collections.List(["BR", "AR", "ES", "TU", "LU", "NL", "FR"]));
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
    
});