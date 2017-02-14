var skills = [
    {
        type: "passive",
        hero: "zs",
        name: "基本剑法",
        desc: "为战士主要的击杀手段，无视防御，隔位有效",
        minRequiredLevel: 7,
        levels: [
            {desc: "", requiredLevel: 7, level: 1},
            {desc: "", requiredLevel: 9, level: 2},
            {desc: "", requiredLevel: 11, level: 3}],
        froms: [{name: "所有小僵尸", isEasy: false}, {name: "尸王", isEasy: false}],
        img: "/hero-zs/csjf.gif"
    },
    {hero: "zs", name: "攻杀剑法", desc: "", level: [7, 9, 11], gets: [{type: "monster", name: "尸王", easy: true}], img: ""}
];

var monsters = [
    {id: 10001, name: "鸡", hp: 5, minAC: 1, maxAC: 3, drops: [20001]}
];

var items = [
    {id: 20001, name: "鸡肉", gold: "todo", desc: "todo"}
];

var tasks = [{id: 801, desc: "todo", rewards: [{type: "exp", amount: 0}]}];

var maps = [{id: 901, name: "落霞山谷", npcs: [{name: "新手指导员", x: 10, y: 10, img: "todo", task: []}]}];
