
$("#operation3").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#operation3")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"2017-04-28","ctn2":"张晓宇","ctn3":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn4":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn5":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作"}'
			+',{"ctn1":"2017-04-28","ctn2":"张晓宇","ctn3":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn4":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn5":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作"}'
			+',{"ctn1":"2017-04-28","ctn2":"张晓宇","ctn3":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn4":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn5":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '运维日期', name: 'ctn1', align: "center", width: 10},
        { label: '汇报人', name: 'ctn2', align: "center", width: 10},
        { label: '工作计划', name: 'ctn3', align: "center", width: 35},
        { label: '工作内容', name: 'ctn4', align: "center", width: 35},
        { label: '存在问题', name: 'ctn5', align: "center", width: 35},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
