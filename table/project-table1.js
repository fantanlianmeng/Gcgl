
$("#table1").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table1")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"2017-04-28","ctn2":"通州油烟三期","ctn3":"WWKJ-20170402-01","ctn4":"SEORD-17-04-264-OK","ctn5":"通州环保局","ctn6":"张雪峰","ctn7":"油烟产品","ctn8":"200","ctn9":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"2017-04-28","ctn2":"通州油烟三期","ctn3":"WWKJ-20170402-01","ctn4":"SEORD-17-04-264-OK","ctn5":"通州环保局","ctn6":"张雪峰","ctn7":"油烟产品","ctn8":"200","ctn9":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"2017-04-28","ctn2":"通州油烟三期","ctn3":"WWKJ-20170402-01","ctn4":"SEORD-17-04-264-OK","ctn5":"通州环保局","ctn6":"张雪峰","ctn7":"油烟产品","ctn8":"200","ctn9":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"2017-04-28","ctn2":"通州油烟三期","ctn3":"WWKJ-20170402-01","ctn4":"SEORD-17-04-264-OK","ctn5":"通州环保局","ctn6":"张雪峰","ctn7":"油烟产品","ctn8":"200","ctn9":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"2017-04-28","ctn2":"通州油烟三期","ctn3":"WWKJ-20170402-01","ctn4":"SEORD-17-04-264-OK","ctn5":"通州环保局","ctn6":"张雪峰","ctn7":"油烟产品","ctn8":"200","ctn9":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '建档时间', name: 'ctn1', align: "center", width: 20},
        { label: '项目名称', name: 'ctn2', align: "center", width: 25 },
        { label: '合同编号', name: 'ctn3', align: "center", width: 35},
        { label: '订单编号', name: 'ctn4', align: "center", width: 30 },
        { label: '客户名称', name: 'ctn5', align: "center", width: 24},
        { label: '项目经理', name: 'ctn6', align: "center", width: 20 },
        { label: '产品类型', name: 'ctn7', align: "center", width: 20 },
        { label: '设备数量', name: 'ctn8', align: "center", width: 20 },
        { label: '操作', name: 'ctn9', align: "center", width: 30 },
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
