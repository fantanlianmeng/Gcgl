
$("#table6").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table6")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":"","ctn10":"","ctn11":"<a class=\'sitedetails d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":"","ctn10":"","ctn11":"<a class=\'sitedetails d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":"","ctn10":"","ctn11":"<a class=\'sitedetails d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"2017-04-28","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":"","ctn10":"","ctn11":"<a class=\'sitedetails d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'

            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 12},
        { label: '省份', name: 'ctn2', align: "center", width: 25},
        { label: '地区', name: 'ctn3', align: "center", width: 33},
        { label: '站点名称', name: 'ctn4', align: "center", width: 27},
        { label: '设备MN号', name: 'ctn5', align: "center", width: 30},
        { label: '安装人员', name: 'ctn6', align: "center", width: 25},
        { label: '安装日期', name: 'ctn7', align: "center", width: 30},
        { label: '通讯网络', name: 'ctn8', align: "center", width: 30},
        { label: '设备SIM卡号', name: 'ctn9', align: "center", width: 30},
        { label: 'SIM网络', name: 'ctn10', align: "center", width: 20},
        { label: '操作', name: 'ctn11', align: "center", width: 35},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
