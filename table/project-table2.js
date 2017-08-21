
$("#table2").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table2")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"李三三","ctn2":"经理","ctn3":"理经理经理经理理经理经理经理","ctn4":"18311112222","ctn5":"15722363322@163.com","ctn6":"426212323","ctn7":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"李三三","ctn2":"经理","ctn3":"理经理经理经理理经理经理经理","ctn4":"18311112222","ctn5":"15722363322@163.com","ctn6":"426212323","ctn7":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            +',{"ctn1":"李三三","ctn2":"经理","ctn3":"理经理经理经理理经理经理经理","ctn4":"18311112222","ctn5":"15722363322@163.com","ctn6":"426212323","ctn7":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '客户联系人', name: 'ctn1', align: "center", width: 20},
        { label: '职位', name: 'ctn2', align: "center", width: 30},
        { label: '职责', name: 'ctn3', align: "center", width: 38},
        { label: '手机号', name: 'ctn4', align: "center", width: 25},
        { label: '邮箱', name: 'ctn5', align: "center", width: 30},
        { label: '座机', name: 'ctn6', align: "center", width: 25},
        { label: '操作', name: 'ctn7', align: "center", width: 30},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
