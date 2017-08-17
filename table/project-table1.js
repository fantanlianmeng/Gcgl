
var F3_form_width = $('.data-table').width();
var F3_form_height = $('.data-table').height() -80;
$("#project-table1").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#project-table1")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"2017-04-28","ctn2":"通州油烟三期","ctn3":"WWKJ-20170402-01","ctn4":"SEORD-17-04-264-OK","ctn5":"通州环保局","ctn6":"张雪峰","ctn7":"油烟产品","ctn8":"1","ctn9":"<a>处理</a>"}'
            +',{"ctn1":"2","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>,<a>处理</a>"}'
            +',{"ctn1":"3","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"4","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"5","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"6","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"7","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            +',{"ctn1":"8","ctn2":"荣成纸业","ctn3":"污水出口","ctn4":"数据超标报警","ctn5":"荣成纸业有限公司报警","ctn6":"2017-02-12 12:00:00","ctn7":"","ctn8":"1","ctn9":"","ctn10":"","ctn11":"未解除","ctn12":"<a>处理</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '建档时间', name: 'ctn1'},
        { label: '项目名称', name: 'ctn2'},
        { label: '合同编号', name: 'ctn3'},
        { label: '订单编号', name: 'ctn4'},
        { label: '客户名称', name: 'ctn5'},
        { label: '项目经理', name: 'ctn6'},
        { label: '产品类型', name: 'ctn7'},
        { label: '设备数量', name: 'ctn8'},
        { label: '操作', name: 'ctn9'}
    ],
    viewrecords: true,
    width: F3_form_width,
    height: F3_form_height,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#project-table1-pager"
});
