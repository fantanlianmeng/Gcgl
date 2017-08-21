
$("#table8").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table8")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"","ctn2":"","ctn3":"","ctn4":"15722363322@163.com","ctn5":"18311112222","ctn6":"","ctn7":""}'
            +',{"ctn1":"","ctn2":"","ctn3":"","ctn4":"15722363322@163.com","ctn5":"18311112222","ctn6":"","ctn7":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '发货日期', name: 'ctn1', align: "center", width: 20},
        { label: '发货地址', name: 'ctn2', align: "center", width: 30},
        { label: '收货人', name: 'ctn3', align: "center", width: 20},
        { label: '收货人联系方式', name: 'ctn4', align: "center", width: 40},
        { label: '发货件数', name: 'ctn5', align: "center", width: 25},
        { label: '快递公司', name: 'ctn6', align: "center", width: 20},
        { label: '快递单号', name: 'ctn7', align: "center", width: 30},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
