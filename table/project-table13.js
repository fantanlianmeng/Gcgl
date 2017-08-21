
$("#table13").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table13")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"2017-04-27","ctn2":"周四","ctn3":"张晓宇：周一日常工作周一日常工作周一日常工作张雪峰：周一日常工作周一日常工作周一日常工作","ctn4":"8","ctn5":"遗留问题遗留问题遗留问题遗留问题遗留问题遗留问题遗留问题问题","ctn6":"客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈"}'
            +',{"ctn1":"2017-04-27","ctn2":"周四","ctn3":"张晓宇：周一日常工作周一日常工作周一日常工作张雪峰：周一日常工作周一日常工作周一日常工作","ctn4":"8","ctn5":"遗留问题遗留问题遗留问题遗留问题遗留问题遗留问题遗留问题问题","ctn6":"客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈"}'
            +',{"ctn1":"2017-04-27","ctn2":"周四","ctn3":"张晓宇：周一日常工作周一日常工作周一日常工作张雪峰：周一日常工作周一日常工作周一日常工作","ctn4":"8","ctn5":"遗留问题遗留问题遗留问题遗留问题遗留问题遗留问题遗留问题问题","ctn6":"客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈客户反馈"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '日期', name: 'ctn1', align: "center", width: 25},
        { label: '星期', name: 'ctn2', align: "center", width: 20},
        { label: '工作内容', name: 'ctn3', align: "center", width: 50},
        { label: '工作时间', name: 'ctn4', align: "center", width: 20},
        { label: '遗留问题', name: 'ctn5', align: "center", width: 50},
        { label: '客户反馈/评价', name: 'ctn6', align: "center", width:50},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
