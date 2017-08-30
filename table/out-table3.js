
$("#out3").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#out3")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"1","ctn2":"C40混凝土","ctn3":"12","ctn4":"m³","ctn5":"350","ctn6":"4200","ctn7":"耗材费","ctn8":"<a class=\'d-ib ta-c fs-12\'>编辑</a><a class=\'d-ib ta-c fs-12\'>删除</a>"}'
            +',{"ctn1":"1","ctn2":"C40混凝土","ctn3":"12","ctn4":"m³","ctn5":"350","ctn6":"4200","ctn7":"耗材费","ctn8":"<a class=\'d-ib ta-c fs-12\'>编辑</a><a class=\'d-ib ta-c fs-12\'>删除</a>"}'
            +',{"ctn1":"<span class=\'colspan\'>金额总计","ctn2":"<span class=\'remove\'></span>","ctn3":"<span class=\'remove\'></span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'remove\'></span>","ctn6":"4250","ctn7":"<span class=\'colspan2\'></span>","ctn8":"<span class=\'remove\'></span>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '序号', name: 'ctn1', align: "center", width: "14"},
        { label: '费用品名', name: 'ctn2', align: "center", width: "15"},
        { label: '数量', name: 'ctn3', align: "center", width: "15"},
        { label: '单位', name: 'ctn4', align: "center", width: "45"},
        { label: '单价', name: 'ctn5', align: "center", width: "15"},
        { label: '总金额', name: 'ctn6', align: "center", width: "25"},
        { label: '费用类别', name: 'ctn7', align: "center", width: "25"},
        { label: '操作', name: 'ctn8', align: "center", width: "25"},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,

});

$(".remove").parent("td").remove();
$(".colspan").parent("td").attr("colspan","5")
$(".colspan2").parent("td").attr("colspan","2")


