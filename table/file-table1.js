
$("#file1").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#file1")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"安徽60套老CMA图片设备项目","ctn2":"2016-12-12","ctn3":"WWKJ-20170402-01","ctn4":"<select class=\'js-select125 select-normal\'><option>售前支持</option><option>请选择</option></select>","ctn5":"<a class=\'see d-ib\'>查看</a>"}'
			+',{"ctn1":"安徽60套老CMA图片设备项目","ctn2":"2016-12-12","ctn3":"WWKJ-20170402-01","ctn4":"<select class=\'js-select125 select-normal\'><option>售前支持</option><option>请选择</option></select>","ctn5":"<a class=\'see d-ib\'>查看</a>"}'
			+',{"ctn1":"安徽60套老CMA图片设备项目","ctn2":"2016-12-12","ctn3":"WWKJ-20170402-01","ctn4":"<select class=\'js-select125 select-normal\'><option>售前支持</option><option>请选择</option></select>","ctn5":"<a class=\'see d-ib\'>查看</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '项目名称', name: 'ctn1', align: "center", width: 30},
        { label: '立项日期', name: 'ctn2', align: "center", width: 20},
        { label: '合同编号', name: 'ctn3', align: "center", width: 35},
        { label: '类型', name: 'ctn4', align: "center", width: 30},
        { label: '操作', name: 'ctn5', align: "center", width: 20},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#file1-pager"
});
