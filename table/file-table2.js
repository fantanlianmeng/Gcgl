
$("#file2").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#file2")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"厂商联系方式/技术资料","ctn3":"文件名文件名文件名","ctn4":"李李李","ctn5":"2017-5-25 08：20","ctn6":"<a class=\'d-ib\'>下载</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"2","ctn2":"厂商联系方式/技术资料","ctn3":"文件名文件名文件名","ctn4":"李李李","ctn5":"2017-5-25 08：20","ctn6":"<a class=\'d-ib\'>下载</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"3","ctn2":"厂商联系方式/技术资料","ctn3":"文件名文件名文件名","ctn4":"李李李","ctn5":"2017-5-25 08：20","ctn6":"<a class=\'d-ib\'>下载</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"4","ctn2":"厂商联系方式/技术资料","ctn3":"文件名文件名文件名","ctn4":"李李李","ctn5":"2017-5-25 08：20","ctn6":"<a class=\'d-ib\'>下载</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"5","ctn2":"厂商联系方式/技术资料","ctn3":"文件名文件名文件名","ctn4":"李李李","ctn5":"2017-5-25 08：20","ctn6":"<a class=\'d-ib\'>下载</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"6","ctn2":"厂商联系方式/技术资料","ctn3":"文件名文件名文件名","ctn4":"李李李","ctn5":"2017-5-25 08：20","ctn6":"<a class=\'d-ib\'>下载</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"7","ctn2":"厂商联系方式/技术资料","ctn3":"文件名文件名文件名","ctn4":"李李李","ctn5":"2017-5-25 08：20","ctn6":"<a class=\'d-ib\'>下载</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 20},
        { label: '成果物', name: 'ctn2', align: "center", width: 30},
        { label: '文件名', name: 'ctn3', align: "center", width: 30},
        { label: '上传人员', name: 'ctn4', align: "center", width: 20},
        { label: '上传日期', name: 'ctn5', align: "center", width: 25},
		{ label: '操作', name: 'ctn6', align: "center", width: 25},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#file2-pager"
});
