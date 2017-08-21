
$("#table5").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table5")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 20},
        { label: '阶段总结日期', name: 'ctn2', align: "center", width: 25 },
        { label: '项目最新进展', name: 'ctn3', align: "center", width: 35},
        { label: '项目遗留问题', name: 'ctn4', align: "center", width: 30 },
        { label: '客户反馈/评价', name: 'ctn5', align: "center", width: 24},
        { label: '备注', name: 'ctn6', align: "center", width: 20 },
        { label: '操作', name: 'ctn7', align: "center", width: 20 },
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
