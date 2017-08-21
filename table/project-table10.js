
$("#table10").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table10")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"","ctn2":"30","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":""}'
            +',{"ctn1":"","ctn2":"30","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '出差人员', name: 'ctn1', align: "center", width: 20},
        { label: '总计出差天数', name: 'ctn2', align: "center", width: 20},
        { label: '出差起止时间', name: 'ctn3', align: "center", width: 25},
        { label: '出差性质', name: 'ctn4', align: "center", width: 30},
        { label: '现场施工费用', name: 'ctn5', align: "center", width: 25},
        { label: '现场施工工时', name: 'ctn6', align: "center", width: 20},
        { label: '项目最新进展', name: 'ctn7', align: "center", width: 30},
        { label: '项目遗留问题', name: 'ctn8', align: "center", width: 30},
        { label: '客户反馈/评价', name: 'ctn9', align: "center", width: 40},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
