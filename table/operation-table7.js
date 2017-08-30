
$("#operation7").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#operation7")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"保定扬尘在线监测仪项目","ctn2":"1","ctn3":"1"}'
            +',{"ctn1":"保定扬尘在线监测仪项目","ctn2":"1","ctn3":"1"}'
            +',{"ctn1":"保定扬尘在线监测仪项目","ctn2":"1","ctn3":"1"}'
            +',{"ctn1":"保定扬尘在线监测仪项目","ctn2":"1","ctn3":"1"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '站点名称', name: 'ctn1', align: "center", width: "25"},
        { label: '故障运维', name: 'ctn2', align: "center", width: "15"},
        { label: '例行运维', name: 'ctn3', align: "center", width: "15"},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
   pager: "#operation7-pager"
});


