
$("#table3").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table3")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"2017-01-01","ctn2":"浙江省杭州市","ctn3":"李三三","ctn4":"13366665212","ctn5":"226","ctn6":"顺丰快递","ctn7":"35623124665412","ctn8":"200","ctn9":"出厂发货","ctn10":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"2017-01-01","ctn2":"浙江省杭州市","ctn3":"李三三","ctn4":"13366665212","ctn5":"226","ctn6":"顺丰快递","ctn7":"35623124665412","ctn8":"200","ctn9":"出厂发货","ctn10":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"2017-01-01","ctn2":"浙江省杭州市","ctn3":"李三三","ctn4":"13366665212","ctn5":"226","ctn6":"顺丰快递","ctn7":"35623124665412","ctn8":"200","ctn9":"出厂发货","ctn10":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '发货日期', name: 'ctn1', align: "center", width: 20},
        { label: '发货地址', name: 'ctn2', align: "center", width: 22},
        { label: '收货人', name: 'ctn3', align: "center", width: 20},
        { label: '收货人联系方式', name: 'ctn4', align: "center", width: 25},
        { label: '发货件数', name: 'ctn5', align: "center", width: 20},
        { label: '快递公司', name: 'ctn6', align: "center", width: 20},
        { label: '快递单号', name: 'ctn7', align: "center", width: 30},
        { label: '发货费', name: 'ctn8', align: "center", width: 20},
        { label: '发货类别', name: 'ctn9', align: "center", width: 20},
        { label: '操作', name: 'ctn10', align: "center", width: 30},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
