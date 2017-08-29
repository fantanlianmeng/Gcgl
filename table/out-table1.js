
$("#out1").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#out1")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"裴振佳","ctn3":"张晓宇","ctn4":"已完成","ctn5":"2017-8-27","ctn6":"江苏老CMA图片设备项目","ctn7":"江苏","ctn8":"南京","ctn9":"2016-05-30 09：00","ctn10":"5","ctn11":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'review-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"裴振佳","ctn3":"张晓宇","ctn4":"已完成","ctn5":"2017-8-27","ctn6":"江苏老CMA图片设备项目","ctn7":"江苏","ctn8":"南京","ctn9":"2016-05-30 09：00","ctn10":"5","ctn11":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'review-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"裴振佳","ctn3":"张晓宇","ctn4":"已完成","ctn5":"2017-8-27","ctn6":"江苏老CMA图片设备项目","ctn7":"江苏","ctn8":"南京","ctn9":"2016-05-30 09：00","ctn10":"5","ctn11":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'review-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"裴振佳","ctn3":"张晓宇","ctn4":"已完成","ctn5":"2017-8-27","ctn6":"江苏老CMA图片设备项目","ctn7":"江苏","ctn8":"南京","ctn9":"2016-05-30 09：00","ctn10":"5","ctn11":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'review-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"裴振佳","ctn3":"张晓宇","ctn4":"已完成","ctn5":"2017-8-27","ctn6":"江苏老CMA图片设备项目","ctn7":"江苏","ctn8":"南京","ctn9":"2016-05-30 09：00","ctn10":"5","ctn11":"<a class=\'details-a d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'review-a d-ib\'>审核</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 12},
        { label: '出差人', name: 'ctn2', align: "center", width: 15},
        { label: '出差申请人', name: 'ctn3', align: "center", width: 20},
        { label: '当前状态', name: 'ctn4', align: "center", width: 20},
        { label: '出差申请时间', name: 'ctn5', align: "center", width: 25},
        { label: '项目名称', name: 'ctn6', align: "center", width: 55},
        { label: '省份', name: 'ctn7', align: "center", width: 14},
        { label: '市', name: 'ctn8', align: "center", width: 15},
        { label: '出差结束时间', name: 'ctn9', align: "center", width: 40},
        { label: '总计出差天数', name: 'ctn10', align: "center", width: 30},
        { label: '操作', name: 'ctn11', align: "center", width: 60},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#out1-pager"
});
