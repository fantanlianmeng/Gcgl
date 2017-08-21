
$("#out2").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#out2")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"2017-04-28","ctn2":"张晓宇","ctn3":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn4":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题","ctn5":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn6":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题"}'
            +',{"ctn1":"2017-04-28","ctn2":"张晓宇","ctn3":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn4":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题","ctn5":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn6":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题"}'
            +',{"ctn1":"2017-04-28","ctn2":"张晓宇","ctn3":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn4":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题","ctn5":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn6":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '出差日期', name: 'ctn1', align: "center", width: 20},
        { label: '汇报人', name: 'ctn2', align: "center", width: 20},
        { label: '工作计划', name: 'ctn3', align: "center", width: 35},
        { label: '工作内容', name: 'ctn4', align: "center", width: 35},
        { label: '存在问题', name: 'ctn5', align: "center", width: 35},
        { label: '客户反馈/评价', name: 'ctn6', align: "center", width: 35},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
