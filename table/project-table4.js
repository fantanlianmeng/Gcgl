
$("#table4").jqGrid({
    url: '',
    datatype: function (data) {
        var thegrid = jQuery("#table4")[0];
        data = eval("(" +'{"page":1,"total":2,"records":13,"rows":['
            +' {"ctn1":"<img src=\'img/icon13.png\' class=\'dot\'>","ctn2":"安徽60套老CMA 图片设备项目","ctn3":"国网富达","ctn4":"视频产品","ctn5":"60","ctn6":"张雪峰","ctn7":"尹永海","ctn8":"项目运维","ctn9":"<span class=\'essay\'>已安装20套设备</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn10":"<span class=\'essay\'>客户临时通知现场杆知现场知现知现场场知现场塔变更，常规安… </span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn11":"<span class=\'essay\'>设备运行不稳定</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn12":"<a class=\'d-ib\'>查看详情</a><a class=\'sitea d-ib\'>站点管理</a><div class=\'manage-abox d-ib d-n\'style=\'display: block;\'><a href=\'javascript:;\' class=\'d-ib\'>日志管理</a><a href=\'javascript:;\' class=\'d-ib\'>出差汇报</a><a href=\'javascript:;\' class=\'d-ib\'>运维汇报</a><a href=\'javascript:;\' class=\'d-ib\'>文档管理</a><a href=\'javascript:;\' class=\'stage d-ib\'>阶段总结</a></div><i class=\'manage-i d-b c-p\'></i>"}'
            +',{"ctn1":"<img src=\'img/icon14.png\' class=\'dot\'>","ctn2":"安徽60套老CMA 图片设备项目","ctn3":"国网富达","ctn4":"视频产品","ctn5":"60","ctn6":"张雪峰","ctn7":"尹永海","ctn8":"项目运维","ctn9":"<span class=\'essay\'>已安装20套设备</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn10":"<span class=\'essay\'>客户临时通知现场杆 塔变更，常规安… </span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn11":"<span class=\'essay\'>设备运行不稳定</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn12":"<a class=\'d-ib\'>查看详情</a><a class=\'sitea d-ib\'>站点管理</a><div class=\'manage-abox d-ib d-n\'style=\'display: block;\'><a href=\'javascript:;\' class=\'d-ib\'>日志管理</a><a href=\'javascript:;\' class=\'d-ib\'>出差汇报</a><a href=\'javascript:;\' class=\'d-ib\'>运维汇报</a><a href=\'javascript:;\' class=\'d-ib\'>文档管理</a><a href=\'javascript:;\' class=\'stage d-ib\'>阶段总结</a></div><i class=\'manage-i d-b c-p\'></i>"}'
            +',{"ctn1":"<img src=\'img/icon13.png\' class=\'dot\'>","ctn2":"安徽60套老CMA 图片设备项目","ctn3":"国网富达","ctn4":"视频产品","ctn5":"60","ctn6":"张雪峰","ctn7":"尹永海","ctn8":"项目运维","ctn9":"<span class=\'essay\'>已安装20套设备</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn10":"<span class=\'essay\'>客户临时通知现场杆 塔变更，常规安… </span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn11":"<span class=\'essay\'>设备运行不稳定</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn12":"<a class=\'d-ib\'>查看详情</a><a class=\'sitea d-ib\'>站点管理</a><div class=\'manage-abox d-ib d-n\'style=\'display: block;\'><a href=\'javascript:;\' class=\'d-ib\'>日志管理</a><a href=\'javascript:;\' class=\'d-ib\'>出差汇报</a><a href=\'javascript:;\' class=\'d-ib\'>运维汇报</a><a href=\'javascript:;\' class=\'d-ib\'>文档管理</a><a href=\'javascript:;\' class=\'stage d-ib\'>阶段总结</a></div><i class=\'manage-i d-b c-p\'></i>"}'
            +',{"ctn1":"<img src=\'img/icon13.png\' class=\'dot\'>","ctn2":"安徽60套老CMA 图片设备项目","ctn3":"国网富达","ctn4":"视频产品","ctn5":"60","ctn6":"张雪峰","ctn7":"尹永海","ctn8":"项目运维","ctn9":"<span class=\'essay\'>已安装20套设备</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn10":"<span class=\'essay\'>客户临时通知现场杆 塔变更，常规安… </span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn11":"<span class=\'essay\'>设备运行不稳定</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn12":"<a class=\'d-ib\'>查看详情</a><a class=\'sitea d-ib\'>站点管理</a><div class=\'manage-abox d-ib d-n\'style=\'display: block;\'><a href=\'javascript:;\' class=\'d-ib\'>日志管理</a><a href=\'javascript:;\' class=\'d-ib\'>出差汇报</a><a href=\'javascript:;\' class=\'d-ib\'>运维汇报</a><a href=\'javascript:;\' class=\'d-ib\'>文档管理</a><a href=\'javascript:;\' class=\'stage d-ib\'>阶段总结</a></div><i class=\'manage-i d-b c-p\'></i>"}'
            +',{"ctn1":"<img src=\'img/icon13.png\' class=\'dot\'>","ctn2":"安徽60套老CMA 图片设备项目","ctn3":"国网富达","ctn4":"视频产品","ctn5":"60","ctn6":"张雪峰","ctn7":"尹永海","ctn8":"项目运维","ctn9":"<span class=\'essay\'>已安装20套设备</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn10":"<span class=\'essay\'>客户临时通知现场杆 塔变更，常规安… </span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn11":"<span class=\'essay\'>设备运行不稳定</span><i class=\'essayBtn manage-i d-b c-p\'></i>","ctn12":"<a class=\'d-ib\'>查看详情</a><a class=\'sitea d-ib\'>站点管理</a><div class=\'manage-abox d-ib d-n\'style=\'display: block;\'><a href=\'javascript:;\' class=\'d-ib\'>日志管理</a><a href=\'javascript:;\' class=\'d-ib\'>出差汇报</a><a href=\'javascript:;\' class=\'d-ib\'>运维汇报</a><a href=\'javascript:;\' class=\'d-ib\'>文档管理</a><a href=\'javascript:;\' class=\'stage d-ib\'>阶段总结</a></div><i class=\'manage-i d-b c-p\'></i>"}'
            + "]})");
        thegrid.addJSONData(data);//给div添加json格式的数据
    },
    mtype: "GET",
    styleUI : 'Bootstrap',
    colModel: [
        { label: '状态', name: 'ctn1', align: "center", width: 20},
        { label: '项目名称', name: 'ctn2', align: "center", width: 25 },
        { label: '客户名称', name: 'ctn3', align: "center", width: 35},
        { label: '产品类型', name: 'ctn4', align: "center", width: 30 },
        { label: '设备数量', name: 'ctn5', align: "center", width: 24},
        { label: '项目经理', name: 'ctn6', align: "center", width: 20 },
        { label: '业务经理', name: 'ctn7', align: "center", width: 20 },
        { label: '项目阶段', name: 'ctn8', align: "center", width: 20 },
        { label: '项目最新进展', name: 'ctn9', align: "center", width: 30 },
        { label: '项目遗留问题', name: 'ctn10', align: "center", width: 30 },
        { label: '客户反馈/评价', name: 'ctn11', align: "center", width: 30 },
        { label: '操作', name: 'ctn12', align: "center", width: 30 },
    ],
    viewrecords: true,
    rowNum: 20,
    rowList: [20,50,100],
    shrinkToFit: true,
    pager: "#table4-pager"
});
