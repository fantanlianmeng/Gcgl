
$("#journal2").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#journal2")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"2017-04-25","ctn2":"周二","ctn3":"日常工作","ctn4":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn5":"8","ctn6":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题","ctn7":"客户反馈客户反馈客户反馈客户反馈"}'
            +',{"ctn1":"2017-04-25","ctn2":"周二","ctn3":"项目工作","ctn4":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn5":"8","ctn6":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题","ctn7":"客户反馈客户反馈客户反馈客户反馈"}'
            +',{"ctn1":"2017-04-26","ctn2":"周三","ctn3":"日常工作","ctn4":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn5":"8","ctn6":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题","ctn7":"客户反馈客户反馈客户反馈客户反馈"}'
            +',{"ctn1":"2017-04-26","ctn2":"周三","ctn3":"日常工作","ctn4":"周一日常工作周一日常工作周一日常工作 周一日常工作周一日常工作周一日常工作","ctn5":"8","ctn6":"遗留问题遗留问题遗留问题遗留问 题遗留问题遗留问题遗留问题问题","ctn7":"客户反馈客户反馈客户反馈客户反馈"}'
            +',{"ctn1":"上周工作计划","ctn2":"<span class=\'colspan f-l\'>周一日常工作周一日常工作周一日常工作周一日常工作周一日常工作周一日常工作<span>","ctn3":"<span class=\'remove\'></span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'remove\'></span>","ctn6":"<span class=\'remove\'></span>","ctn7":"<span class=\'remove\'></span>"}'
            +',{"ctn1":"本周工作总结","ctn2":"<textarea class=\'colspan f-l\' data-text=\'1\'>周一日常工作周一日常工作周一日常工作周一日常工作周一日常工作周一日常工作</textarea>","ctn3":"<span class=\'remove\'></span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'remove\'></span>","ctn6":"<span class=\'remove\'></span>","ctn7":"<span class=\'remove\'></span>"}'
            +',{"ctn1":"下周工作计划","ctn2":"<textarea class=\'colspan f-l\' data-text=\'2\'>周一日常工作周一日常工作周一日常工作周一日常工作周一日常工作周一日常工作</textarea>","ctn3":"<span class=\'remove\'></span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'remove\'></span>","ctn6":"<span class=\'remove\'></span>","ctn7":"<span class=\'remove\'></span>"}'
            +',{"ctn1":"任务完成良好","ctn2":"<div class=\'colspan f-l ta-l\'><p>周三</p><p>张雪峰    2017-10-25    10:00</p></div>","ctn3":"<span class=\'remove\'></span>","ctn4":"<span class=\'remove\'></span>","ctn5":"<span class=\'remove\'></span>","ctn6":"<span class=\'remove\'></span>","ctn7":"<span class=\'remove\'></span>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '日期', name: 'ctn1', align: "center", width: "14",
            cellattr: function(rowId) {//合并单元格
                return 'id=\'ctn1' + rowId +"\'";
            }
        },
        { label: '星期', name: 'ctn2', align: "center", width: "15",
            cellattr: function(rowId) {//合并单元格
                return 'id=\'ctn2' + rowId +"\'";
            }

        },
        { label: '工作类型', name: 'ctn3', align: "center", width: "15"},
        { label: '工作内容', name: 'ctn4', align: "center", width: "45"},
        { label: '工作时间', name: 'ctn5', align: "center", width: "15"},
        { label: '遗留问题', name: 'ctn6', align: "center", width: "25"},
        { label: '客户反馈/评价', name: 'ctn7', align: "center", width: "25"},
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,

    gridComplete: function() {
        //②在gridComplete调用合并方法
        var gridName = "journal2";
        Merger(gridName, 'ctn1');
        Merger(gridName, 'ctn2');
    }
});
function Merger(gridName, CellName) {
    //得到显示到界面的id集合
    var mya = $("#" + gridName + "").getDataIDs();
    //当前显示多少条
    var length = mya.length;
    for (var i = 0; i < length; i++) {
        //从上到下获取一条信息
        var before = $("#" + gridName + "").jqGrid('getRowData', mya[i]);
        //定义合并行数
        var rowSpanTaxCount = 1;
        for (j = i + 1; j <= length; j++) {
            //和上边的信息对比 如果值一样就合并行数+1 然后设置rowspan 让当前单元格隐藏
            var end = $("#" + gridName + "").jqGrid('getRowData', mya[j]);
            if (before[CellName] == end[CellName]) {
                rowSpanTaxCount++;
                $("#" + gridName + "").setCell(mya[j], CellName, '', {
                    display: 'none'
                });
            } else {
                rowSpanTaxCount = 1;
                break;
            }
            $("#" + CellName + "" + mya[i] + "").attr("rowspan", rowSpanTaxCount);
        }
    }
}

$(".remove").parent("td").remove();
$(".colspan").parent("td").attr("colspan","6")


