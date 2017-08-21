
$("#journal1").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#journal1")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"<a class=\'my-work d-ib\'>我的工作日志</a>","ctn3":"8","ctn4":"8","ctn5":"8","ctn6":"8","ctn7":"","ctn8":"","ctn9":"","ctn10":"系统集成部","ctn11":"2017-04-17 19:00"}'
            +',{"ctn1":"2","ctn2":"<a class=\'my-work d-ib\'>裴振佳的工作日志</a>","ctn3":"8","ctn4":"8","ctn5":"8","ctn6":"8","ctn7":"","ctn8":"","ctn9":"","ctn10":"系统集成部","ctn11":"2017-04-17 19:00"}'
            +',{"ctn1":"3","ctn2":"<a class=\'my-work d-ib\'>吴王芳的工作日志</a>","ctn3":"8","ctn4":"8","ctn5":"8","ctn6":"8","ctn7":"","ctn8":"","ctn9":"","ctn10":"系统集成部","ctn11":"2017-04-17 19:00"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 15},
        { label: '名称', name: 'ctn2', align: "center", width: 45},
        { label: '周一', name: 'ctn3', align: "center", width: 15},
        { label: '周二', name: 'ctn4', align: "center", width: 15},
        { label: '周三', name: 'ctn5', align: "center", width: 15},
        { label: '周四', name: 'ctn6', align: "center", width: 15},
        { label: '周五', name: 'ctn7', align: "center", width: 15},
        { label: '周六', name: 'ctn8', align: "center", width: 15},
        { label: '周日', name: 'ctn9', align: "center", width: 15},
        { label: '所属部门', name: 'ctn10', align: "center", width: 30},
        { label: '最近更新日期', name: 'ctn11', align: "center", width: 40},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
