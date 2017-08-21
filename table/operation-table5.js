
$("#operation5").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#operation5")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"正兴鑫苑住宅楼","ctn3":"2017-08-08","ctn4":"W6100V死机 	","ctn5":"升级最新程序","ctn6":"正常","ctn7":"已完成","ctn8":"W6100V 1个","ctn9":"探头反应异常"}'
			+',{"ctn1":"1","ctn2":"正兴鑫苑住宅楼","ctn3":"2017-08-08","ctn4":"W6100V死机 	","ctn5":"升级最新程序","ctn6":"正常","ctn7":"已完成","ctn8":"W6100V 1个","ctn9":"探头反应异常"}'
			+',{"ctn1":"1","ctn2":"正兴鑫苑住宅楼","ctn3":"2017-08-08","ctn4":"W6100V死机 	","ctn5":"升级最新程序","ctn6":"正常","ctn7":"已完成","ctn8":"W6100V 1个","ctn9":"探头反应异常"}'
			+',{"ctn1":"1","ctn2":"正兴鑫苑住宅楼","ctn3":"2017-08-08","ctn4":"W6100V死机 	","ctn5":"升级最新程序","ctn6":"正常","ctn7":"已完成","ctn8":"W6100V 1个","ctn9":"探头反应异常"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 10},
        { label: '站点名称', name: 'ctn2', align: "center", width: 25},
        { label: '处理日期', name: 'ctn3', align: "center", width: 20},
        { label: '现场问题描述', name: 'ctn4', align: "center", width: 25},
        { label: '解决方法', name: 'ctn5', align: "center", width: 25},
		{ label: '当前状态', name: 'ctn6', align: "center", width: 25},
		{ label: '完成情况', name: 'ctn7', align: "center", width: 25},
		{ label: '备件耗材', name: 'ctn8', align: "center", width: 25},
		{ label: '备注', name: 'ctn9', align: "center", width: 25},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
