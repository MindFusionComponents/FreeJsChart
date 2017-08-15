var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'MindFusion.Charting.free'], function (require, exports, m) {
    "use strict";
    var DashboardEx = (function (_super) {
        __extends(DashboardEx, _super);
        function DashboardEx(element) {
            _super.call(this, element);
        }
        DashboardEx.prototype.test = function () { console.log("Hello from DashboardEx"); };
        return DashboardEx;
    }(m.MindFusion.Charting.Controls.Chart));
    // series
    {
        //wdnew DashboardEx(<HTMLCanvasElement>document.getElementById('barChart')).test();
        var seriesList = new m.MindFusion.Charting.Collections.ObservableCollection();
        var n1 = new m.MindFusion.Charting.Collections.List();
        n1.add(0);
        n1.add(1);
        n1.add(2);
        n1.add(3);
        var n2 = new m.MindFusion.Charting.Collections.List();
        n2.add(25000);
        n2.add(50000);
        n2.add(40000);
        n2.add(55000);
        var s1 = new m.MindFusion.Charting.Collections.List();
        s1.add("January");
        s1.add("February");
        s1.add("March");
        s1.add("April");
        // 2
        var n11 = new m.MindFusion.Charting.Collections.List();
        n11.add(0);
        n11.add(1);
        n11.add(2);
        n11.add(3);
        var n21 = new m.MindFusion.Charting.Collections.List();
        n21.add(30000);
        n21.add(70000);
        n21.add(65000);
        n21.add(15000);
        var s11 = new m.MindFusion.Charting.Collections.List();
        s11.add("May");
        s11.add("June");
        s11.add("July");
        s11.add("August");
        // 3
        var n12 = new m.MindFusion.Charting.Collections.List();
        n12.add(0);
        n12.add(1);
        n12.add(2);
        n12.add(3);
        var n22 = new m.MindFusion.Charting.Collections.List();
        n22.add(25000);
        n22.add(45000);
        n22.add(35000);
        n22.add(65000);
        var s12 = new m.MindFusion.Charting.Collections.List();
        s12.add("September");
        s12.add("October");
        s12.add("November");
        s12.add("December");
        var series = new m.MindFusion.Charting.Series2D(n1, n2, s1);
        series.title = "Series 1";
        seriesList.add(series);
        var series1 = new m.MindFusion.Charting.Series2D(n11, n21, s11);
        series1.title = "Series 2";
        seriesList.add(series1);
        var series2 = new m.MindFusion.Charting.Series2D(n12, n22, s12);
        series2.title = "Series 3";
        seriesList.add(series2);
        var barSeries = new m.MindFusion.Charting.BarSeries(n21, new m.MindFusion.Charting.Collections.List(["iOne", "iTwo", "iThree", "iFour"]), new m.MindFusion.Charting.Collections.List(["oOne", "oTwo", "oThree", "oFour"]), new m.MindFusion.Charting.Collections.List(["xOne", "xTwo", "xThree", "xFour"]) /*,
        new Collections.List<string>(["yOne", "yTwo", "yThree", "yFour"]),
        new Collections.List<string>(["tOne", "tTwo", "tThree", "tFour"])*/);
        barSeries.title = "Bar Series";
        var simpleSeries = new m.MindFusion.Charting.SimpleSeries(n22, new m.MindFusion.Charting.Collections.List(["iOne", "iTwo", "iThree", "iFour"]));
        simpleSeries.title = "Line Series";
        var pieSeries = new m.MindFusion.Charting.PieSeries(n2, new m.MindFusion.Charting.Collections.List(["iOne", "iTwo", "iThree", "iFour"]), new m.MindFusion.Charting.Collections.List(["oOne", "oTwo", "oThree", "oFour"]));
        pieSeries.title = "Pie Series";
    }
    var barChart = new m.MindFusion.Charting.Controls.BarChart(document.getElementById('barChart'));
    barChart.series = new m.MindFusion.Charting.Collections.ObservableCollection([barSeries]);
    var lineChart = new m.MindFusion.Charting.Controls.LineChart(document.getElementById('lineChart'));
    lineChart.series = new m.MindFusion.Charting.Collections.ObservableCollection([simpleSeries]);
    var pieChart = new m.MindFusion.Charting.Controls.PieChart(document.getElementById('pieChart'));
    pieChart.series = pieSeries;
    var lr = new m.MindFusion.Charting.LegendRenderer();
    barChart.rootPanel.children.add(lr);
    barChart.draw();
});