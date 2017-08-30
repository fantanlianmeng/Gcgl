
$("#system3").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#system3")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"站点","ctn3":"站点名称站点名","ctn4":"<a class=\'d-ib ta-c fs-12\'>修改</a><a class=\'d-ib ta-c fs-12\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"站点","ctn3":"站点名称站点名","ctn4":"<a class=\'d-ib ta-c fs-12\'>修改</a><a class=\'d-ib ta-c fs-12\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"站点","ctn3":"站点名称站点名","ctn4":"<a class=\'d-ib ta-c fs-12\'>修改</a><a class=\'d-ib ta-c fs-12\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: "15"},
        { label: '名称', name: 'ctn2', align: "center", width: "15"},
        { label: '备注', name: 'ctn3', align: "center", width: "15"},
        { label: '操作', name: 'ctn4', align: "center", width: "23"},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,

});



