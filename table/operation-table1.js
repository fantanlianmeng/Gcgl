
$("#operation1").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#operation1")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"正兴鑫苑住宅楼","ctn3":"2017-08-08","ctn4":"现场问题描述现场...","ctn5":"解决方法解决方法...","ctn6":"正常","ctn7":"备注备注备注备注...","ctn8":"已完成","ctn9":"某某耗材 15个","ctn10":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
       		+',{"ctn1":"1","ctn2":"正兴鑫苑住宅楼","ctn3":"2017-08-08","ctn4":"现场问题描述现场...","ctn5":"解决方法解决方法...","ctn6":"正常","ctn7":"备注备注备注备注...","ctn8":"已完成","ctn9":"某某耗材 15个","ctn10":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"1","ctn2":"正兴鑫苑住宅楼","ctn3":"2017-08-08","ctn4":"现场问题描述现场...","ctn5":"解决方法解决方法...","ctn6":"正常","ctn7":"备注备注备注备注...","ctn8":"已完成","ctn9":"某某耗材 15个","ctn10":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 20},
        { label: '站点名称', name: 'ctn2', align: "center", width: 30},
        { label: '处理日期', name: 'ctn3', align: "center", width: 38},
        { label: '现场问题描述', name: 'ctn4', align: "center", width: 25},
        { label: '解决方法', name: 'ctn5', align: "center", width: 30},
        { label: '当前状态', name: 'ctn6', align: "center", width: 25},
        { label: '备注', name: 'ctn7', align: "center", width: 30},
		{ label: '完成情况', name: 'ctn8', align: "center", width: 30},
		{ label: '备件耗材', name: 'ctn9', align: "center", width: 30},
		{ label: '操作', name: 'ctn10', align: "center", width: 30},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
