
$("#system2").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#system2")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"系统管理员","ctn3":"工程中心","ctn4":"工程中心工程中心工程中心工程中心工程中心工程中心","ctn5":"<a class=\'assign-a d-ib\'>分配权限</a>","ctn6":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"1","ctn2":"系统管理员","ctn3":"工程中心","ctn4":"工程中心工程中心工程中心工程中心工程中心工程中心","ctn5":"<a class=\'assign-a d-ib\'>分配权限</a>","ctn6":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"1","ctn2":"系统管理员","ctn3":"工程中心","ctn4":"工程中心工程中心工程中心工程中心工程中心工程中心","ctn5":"<a class=\'assign-a d-ib\'>分配权限</a>","ctn6":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
			+',{"ctn1":"1","ctn2":"系统管理员","ctn3":"工程中心","ctn4":"工程中心工程中心工程中心工程中心工程中心工程中心","ctn5":"<a class=\'assign-a d-ib\'>分配权限</a>","ctn6":"<a class=\'d-ib\'>编辑</a><a class=\'d-ib\'>删除</a>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: 10},
        { label: '角色名称', name: 'ctn2', align: "center", width: 20},
        { label: '所属部门', name: 'ctn3', align: "center", width: 20},
        { label: '备注信息', name: 'ctn4', align: "center", width: 40},
        { label: '分配菜单权限', name: 'ctn5', align: "center", width: 25},
        { label: '操作', name: 'ctn6', align: "center", width: 30 },
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
});
