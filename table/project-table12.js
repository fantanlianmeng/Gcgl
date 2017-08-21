
$("#table12").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table12")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"山东省","ctn2":"","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":"","ctn10":""}'
            +',{"ctn1":"山东省","ctn2":"","ctn3":"","ctn4":"","ctn5":"","ctn6":"","ctn7":"","ctn8":"","ctn9":"","ctn10":""}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '省份', name: 'ctn1', align: "center", width: 20},
        { label: '地区', name: 'ctn2', align: "center", width: 30},
        { label: '站点名称', name: 'ctn3', align: "center", width: 20},
        { label: '设备MN号', name: 'ctn4', align: "center", width: 40},
        { label: '安装人员', name: 'ctn5', align: "center", width: 25},
        { label: '安装日期', name: 'ctn6', align: "center", width: 20},
        { label: '通讯网络', name: 'ctn7', align: "center", width: 30},
        { label: '设备SIM卡号', name: 'ctn8', align: "center", width: 30},
        { label: 'SIM网络', name: 'ctn9', align: "center", width: 30},
        { label: '设备IP地址及端口', name: 'ctn10', align: "center", width: 30},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
