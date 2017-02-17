function initMenu() {
    var menuHtml = '<div class="container-fluid"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> <span class="sr-only">Toggle navigation</span>    <span class="icon-bar"></span>        <span class="icon-bar"></span>        <span class="icon-bar"></span>        </button>        <a class="navbar-brand" href="#">BackMir攻略</a>        </div>        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">        ' +
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
        children: [{name: '战士(已完成)', url: 'hero-zs'}, {name: '法师(已完成)', url: 'hero-fs'}, {
            name: '道士(已完成)',
            url: 'hero-ds'
        }]
    },
    {name: '任务', url: 'task', children: [{name: '主线(已完成)', url: 'task-main'}, {name: '支线', url: 'task-secondary'}]}
];

$(document).ready(function () {
    initMenu();
});