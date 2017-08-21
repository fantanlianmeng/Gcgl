
$("#table11").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table11")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"","ctn2":"20","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":""}'
            +',{"ctn1":"","ctn2":"20","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '运维人员', name: 'ctn1', align: "center", width: 20},
        { label: '运维天数', name: 'ctn2', align: "center", width: 30},
        { label: '运维起止时间', name: 'ctn3', align: "center", width: 20},
        { label: '运维批次', name: 'ctn4', align: "center", width: 40},
        { label: '现场运维费用', name: 'ctn5', align: "center", width: 25},
        { label: '现场运维工时', name: 'ctn6', align: "center", width: 20},
        { label: '当前状态', name: 'ctn7', align: "center", width: 30},
        { label: '备件耗材', name: 'ctn8', align: "center", width: 30},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
