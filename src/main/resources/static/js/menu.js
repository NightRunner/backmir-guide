function initMenu() {
    var menuHtml = '<div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span>    <span class="icon-bar"></span>        <span class="icon-bar"></span>        <span class="icon-bar"></span>        </button>        <a class="navbar-brand" href="' + ctx + '">BackMir攻略</a>        </div>        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">        ' +
        '<ul class="nav navbar-nav">  ';

    for (var i = 0; i < menu.length; i++) {

        if (menu[i].children) {
            menuHtml += '<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' + menu[i].name + ' <span class="caret"></span></a>';

            menuHtml += '<ul class="dropdown-menu">';
            for (var j = 0; j < menu[i].children.length; j++) {
                menuHtml += getMenuA(menu[i].children[j]);
            }
            menuHtml += '</ul></li>';
        } else {
            menuHtml += getMenuA(menu[i]);
        }
    }

    menuHtml += ' </ul>   </div><!-- /.navbar-collapse -->    </div><!-- /.container-fluid -->';
    $(".navbar").html(menuHtml);
}

function getMenuA(obj) {
    return '<li><a href="/' + obj.url + '">' + obj.name + '</a></li>';
}

var menu = [
    {url: 'index', name: '目录'},
    {
        name: '职业',
        url: 'hero',
        children: [{name: '战士', url: 'hero-zs'}, {name: '法师', url: 'hero-fs'}, {
            name: '道士',
            url: 'hero-ds'
        }]
    },
    {
        name: '任务',
        url: 'task',
        children: [{name: '主线', url: 'task-main'}, {name: '支线', url: 'task-secondary'}]
    },
    {
        name: '新人指南',
        url: 'beginner-guide',
        children: [
            {name: '升级经验表', url: 'level-up-exp'},
            {name: '地图坐标传送', url: 'map-point'},
            {name: '游戏中无法保存的物品', url: 'can-not-save-item'},
            {name: '联机组队和查看装备教程', url: 'team-and-view-other-hero-guide'},
            {name: '新地图的进入方法', url: 'new-map-join-method'},
            {name: '所有套装掉落集合', url: 'all-suite-item-drop'},
            {name: '常见问题', url: 'faq'},
            {name: '特殊装备', url: 'special-item'},
            {name: '无伤点', url: 'monster-can-not-attack'},
            {name: '有趣的说明', url: 'interesting-note'}
        ]
    },
    {
        name: '装备强化',
        children: [
            {name: '红字装备鉴定', url: 'item-red-enhance-identify'},
            {name: '混元石用法', url: 'stone-yellow-enhance-level-up-desc'},
            {name: '混沌石用法', url: 'stone-red-enhance-transfer-desc'},
            {name: '装备阶级速查(2-7阶)', url: 'item-level-query'},
            {name: '分解与精华石说明', url: 'split-and-stone-yellow-enhance-desc'},
            {name: '装备激活增强攻击说明', url: 'item-yellow-enhance-suite-desc'},
            {name: '钢铁腰带和避魂靴强化说明', url: 'gtyd-and-bhx-yellow-enhance-desc'},
            {name: '乾坤石用法', url: 'stone-yellow-enhance-change-desc'}
        ]
    }
];

$(document).ready(function () {
    initMenu();
});