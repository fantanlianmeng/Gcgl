
$("#operation2").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#operation2")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"保定扬尘在线监测仪项目","ctn3":"裴振佳","ctn4":"故障运维","ctn5":"2","ctn6":"2016-5-25 08：20","ctn7":"2016-5-25 08：20","ctn8":"3","ctn9":"5","ctn10":"50","ctn11":"已完成","ctn12":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'examine-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"1","ctn2":"保定扬尘在线监测仪项目","ctn3":"裴振佳","ctn4":"故障运维","ctn5":"2","ctn6":"2016-5-25 08：20","ctn7":"2016-5-25 08：20","ctn8":"3","ctn9":"5","ctn10":"50","ctn11":"已完成","ctn12":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'examine-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"1","ctn2":"保定扬尘在线监测仪项目","ctn3":"裴振佳","ctn4":"故障运维","ctn5":"2","ctn6":"2016-5-25 08：20","ctn7":"2016-5-25 08：20","ctn8":"3","ctn9":"5","ctn10":"50","ctn11":"已完成","ctn12":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'examine-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"1","ctn2":"保定扬尘在线监测仪项目","ctn3":"裴振佳","ctn4":"故障运维","ctn5":"2","ctn6":"2016-5-25 08：20","ctn7":"2016-5-25 08：20","ctn8":"3","ctn9":"5","ctn10":"50","ctn11":"已完成","ctn12":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'examine-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 12},
        { label: '项目名称', name: 'ctn2', align: "center", width: 40},
        { label: '运维人', name: 'ctn3', align: "center", width: 11},
        { label: '运维类型', name: 'ctn4', align: "center", width: 17},
        { label: '运维批次', name: 'ctn5', align: "center", width: 12},
        { label: '&nbsp&nbsp计划开始时间&nbsp&nbsp', name: 'ctn6', align: "center", width: 22},
        { label: '&nbsp&nbsp计划结束时间&nbsp&nbsp', name: 'ctn7', align: "center", width: 22},
        { label: '站点数量', name: 'ctn8', align: "center", width: 12},
        { label: '运维天数', name: 'ctn9', align: "center", width: 15},
		{ label: '运维费用', name: 'ctn10', align: "center", width: 12},
		{ label: '当前状态', name: 'ctn11', align: "center", width: 12},
		{ label: ' 操作', name: 'ctn12', align: "center", width:25},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
