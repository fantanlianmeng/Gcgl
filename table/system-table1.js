
$("#system1").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#system1")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"吴王芳","ctn3":"系统管理员","ctn4":"工程中心","ctn5":"13333333333","ctn6":"<a class=\'d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"2","ctn2":"吴王芳","ctn3":"系统管理员","ctn4":"工程中心","ctn5":"13333333333","ctn6":"<a class=\'d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"3","ctn2":"吴王芳","ctn3":"系统管理员","ctn4":"工程中心","ctn5":"13333333333","ctn6":"<a class=\'d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"4","ctn2":"吴王芳","ctn3":"系统管理员","ctn4":"工程中心","ctn5":"13333333333","ctn6":"<a class=\'d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"5","ctn2":"吴王芳","ctn3":"系统管理员","ctn4":"工程中心","ctn5":"13333333333","ctn6":"<a class=\'d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"6","ctn2":"吴王芳","ctn3":"系统管理员","ctn4":"工程中心","ctn5":"13333333333","ctn6":"<a class=\'d-ib\'>详情</a><a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 20},
        { label: '用户名', name: 'ctn2', align: "center", width: 25 },
        { label: '角色名称', name: 'ctn3', align: "center", width: 35},
        { label: '所属部门', name: 'ctn4', align: "center", width: 30 },
        { label: '联系方式', name: 'ctn5', align: "center", width: 24},
        { label: '操作', name: 'ctn6', align: "center", width: 30 },
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#system1-pager"
});
