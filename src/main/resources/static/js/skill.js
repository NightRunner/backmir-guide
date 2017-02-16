var skills = [
    {
        type: "passive",
        hero: "zs",
        name: "基本剑法",
        desc: "提高剑术的熟练度和准确率【第一本任务给予】",
        levels: [
            {desc: "", requiredLevel: 7, level: 1},
            {desc: "", requiredLevel: 9, level: 2},
            {desc: "", requiredLevel: 11, level: 3}],
        froms: [{name: "所有小僵尸", isEasy: true}, {name: "尸王", isEasy: true}],
        img: null
    },
    {
        type: "passive",
        hero: "zs",
        name: "狂战士",
        desc: "百分比增加攻击（3级狂战士下限增加30%，上限增加50%），3级增加6点防御，3点攻速",
        levels: [
            {desc: "", requiredLevel: 30, level: 1},
            {desc: "", requiredLevel: 35, level: 2},
            {desc: "", requiredLevel: 42, level: 3}],
        froms: [{name: "白野猪", isEasy: true}, {name: "沃玛教主", isEasy: true}, {name: "巨型钳虫", isEasy: false}],
        img: null
    },
    {
        type: "passive",
        hero: "zs",
        name: "稳如泰山",
        desc: "增加防后仰率，3级增加60%防后仰",
        levels: [
            {desc: "", requiredLevel: 33, level: 1},
            {desc: "", requiredLevel: 36, level: 2},
            {desc: "", requiredLevel: 40, level: 3}],
        froms: [{name: "白野猪", isEasy: true}, {name: "沃玛教主", isEasy: true}, {name: "巨型钳虫", isEasy: false}],
        img: null
    },
    {
        type: "passive",
        hero: "zs",
        name: "开天斩",
        desc: "发出一道剑气，攻击身前直线上的所有敌人",
        levels: [
            {desc: "", requiredLevel: 33, level: 1},
            {desc: "", requiredLevel: 36, level: 2},
            {desc: "", requiredLevel: 40, level: 3}],
        froms: [
            {name: "魔龙教主", isEasy: true},
            {name: "暗之触龙神", isEasy: true},
            {name: "魔龙树妖", isEasy: false}],
        img: '/hero-zs/ktz.jpg'
    },
    {
        type: "active",
        hero: "zs",
        name: "刺杀剑法",
        desc: "为战士主要的击杀手段，无视防御，隔位有效",
        levels: [
            {desc: "", requiredLevel: 25, level: 1},
            {desc: "", requiredLevel: 27, level: 2},
            {desc: "", requiredLevel: 29, level: 3}],
        froms: [
            {name: "尸王", isEasy: true},
            {name: "所有小僵尸", isEasy: false}],
        img: '/hero-zs/csjf.gif'
    },
    {
        type: "active",
        hero: "zs",
        name: "半月弯刀",
        desc: "运用刀光攻击前身所有敌人",
        levels: [
            {desc: "", requiredLevel: 28, level: 1},
            {desc: "", requiredLevel: 31, level: 2},
            {desc: "", requiredLevel: 34, level: 3}],
        froms: [
            {name: "尸王", isEasy: true},
            {name: "触龙神", isEasy: true},
            {name: "巨型钳虫", isEasy: false},
            {name: "白野猪", isEasy: false}
        ],
        img: '/hero-zs/bywd.gif'
    },
    {
        type: "active",
        hero: "zs",
        name: "烈火剑法",
        desc: "凝聚火精灵的力量给敌人致命一击",
        levels: [
            {desc: "", requiredLevel: 35, level: 1},
            {desc: "", requiredLevel: 37, level: 2},
            {desc: "", requiredLevel: 34, level: 3}],
        froms: [
            {name: "尸王", isEasy: true},
            {name: "沃玛卫士", isEasy: false},
            {name: "沃玛教主", isEasy: false},
            {name: "巨型钳虫", isEasy: false},
            {name: "虹魔猪卫", isEasy: false},
            {name: "虹魔蝎卫", isEasy: false}
        ],
        img: '/hero-zs/lhjf.gif'
    },
    {
        type: "active",
        hero: "zs",
        name: "狮子吼",
        desc: "采用内功吼住周围一定范围敌人，使敌人麻痹。【技能等级决定麻痹时间，3级可麻痹5秒】",
        levels: [
            {desc: "", requiredLevel: 40, level: 1},
            {desc: "", requiredLevel: 42, level: 2},
            {desc: "", requiredLevel: 44, level: 3}],
        froms: [
            {name: "沃玛教主", isEasy: true},
            {name: "虹魔猪卫", isEasy: true},
            {name: "虹魔蝎卫", isEasy: true},
            {name: "藏宝图宝箱", isEasy: false}
        ],
        img: '/hero-zs/szh.gif'
    },
    {
        type: "active",
        hero: "zs",
        name: "炙炎剑法",
        desc: "凝聚火精灵的力量给身前直线上的敌人致命一击。",
        levels: [
            {desc: "", requiredLevel: 42, level: 1},
            {desc: "", requiredLevel: 44, level: 2},
            {desc: "", requiredLevel: 46, level: 3}],
        froms: [
            {name: "魔龙力士", isEasy: true},
            {name: "魔龙巨蛾", isEasy: true},
            {name: "魔龙战将", isEasy: true},
            {name: "魔龙树妖", isEasy: false}
        ],
        img: '/hero-zs/zyjf.gif'
    },
    {
        type: "active",
        hero: "zs",
        name: "强化刺杀剑法",
        desc: "刺杀剑法的强化技能。",
        levels: [
            {desc: "", requiredLevel: 40, level: 1},
            {desc: "", requiredLevel: 52, level: 2},
            {desc: "", requiredLevel: 54, level: 3}],
        froms: [
            {name: "雪域所有怪物", isEasy: true}
        ],
        img: '/hero-zs/csjf.gif'
    },
    {
        type: "active",
        hero: "zs",
        name: "血龙剑法",
        desc: "3级血龙50%几率发挥1.6倍攻击。",
        levels: [
            {desc: "", requiredLevel: 50, level: 1},
            {desc: "", requiredLevel: 53, level: 2},
            {desc: "", requiredLevel: 55, level: 3}],
        froms: [
            {name: "凌霄天界所有怪物", isEasy: false}
        ],
        img: '/hero-zs/xljf.gif'
    },
    {
        type: "active",
        hero: "zs",
        name: "金刚不坏",
        desc: "主动：运用真气保护肉身，一定几率反弹伤害和吸收伤害.<br/>被动：永久增加魔域和防御，每一级增加10-10的双防御.",
        levels: [
            {desc: "", requiredLevel: 55, level: 1},
            {desc: "", requiredLevel: 57, level: 2},
            {desc: "", requiredLevel: 59, level: 3}],
        froms: [
            {name: "暗之触龙神", isEasy: false},
            {name: "月氏兽王", isEasy: false},
            {name: "伏魔令(赤)宝箱", isEasy: false},
            {name: "伏魔令(破)宝箱", isEasy: true},
            {name: "伏魔令(阎)宝箱", isEasy: false}
        ],
        img: '/hero-zs/jgbh.gif'
    },
    {
        type: "active",
        hero: "fs",
        name: "小火球",
        desc: "最基本的魔法，因此基本是练习法师的玩家必学的",
        levels: [
            {desc: "", requiredLevel: 7, level: 1},
            {desc: "", requiredLevel: 9, level: 2},
            {desc: "", requiredLevel: 11, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-fs/xhq.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "大火球",
        desc: "加强版火球术，但是法师使用它的确实寥寥数计",
        levels: [
            {desc: "", requiredLevel: 19, level: 1},
            {desc: "", requiredLevel: 21, level: 2},
            {desc: "", requiredLevel: 23, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-fs/dhq.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "爆裂火焰",
        desc: "一种能够产生高热能量的法术，攻击范围3*3",
        levels: [
            {desc: "", requiredLevel: 22, level: 1},
            {desc: "", requiredLevel: 24, level: 2},
            {desc: "", requiredLevel: 27, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-fs/blhy.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "诱惑之光",
        desc: "可以诱惑3只非精英非首领怪物(1级1只，2级3只，3级3只，诱惑怪物初始等级均为0级)，诱惑怪物可以升到3级，新版本无叛变。{诱惑怪物参考最下方}",
        levels: [
            {desc: "", requiredLevel: 13, level: 1},
            {desc: "", requiredLevel: 15, level: 2},
            {desc: "", requiredLevel: 18, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-fs/yhzg.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "雷电术",
        desc: "召唤一道巨大的蓝色闪电攻击敌人",
        levels: [
            {desc: "", requiredLevel: 17, level: 1},
            {desc: "", requiredLevel: 19, level: 2},
            {desc: "", requiredLevel: 22, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-fs/lds.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "火墙",
        desc: "一种能够产生高热能量的法术，比爆裂火焰时间长，持续性攻击",
        levels: [
            {desc: "", requiredLevel: 24, level: 1},
            {desc: "", requiredLevel: 28, level: 2},
            {desc: "", requiredLevel: 32, level: 3}],
        froms: [
            {name: "沃玛卫士", isEasy: false},
            {name: "沃玛教主", isEasy: false},
            {name: "巨型钳虫", isEasy: false},
            {name: "触龙神", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-fs/hq.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "地狱雷光",
        desc: "召唤一股强大的雷光风暴，伤害周围所有围着自己的敌人，攻击威力以核心最高",
        levels: [
            {desc: "", requiredLevel: 30, level: 1},
            {desc: "", requiredLevel: 33, level: 2},
            {desc: "", requiredLevel: 36, level: 3}],
        froms: [
            {name: "尸王", isEasy: false},
            {name: "白野猪", isEasy: false}
        ],
        img: '/hero-fs/dylg.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "魔法盾",
        desc: "俗称：蛋蛋，产生一个魔法护盾来保护施法者，降低攻击伤害，非常非常重要",
        levels: [
            {desc: "", requiredLevel: 33, level: 1},
            {desc: "", requiredLevel: 35, level: 2},
            {desc: "", requiredLevel: 37, level: 3}],
        froms: [
            {name: "尸王", isEasy: true},
            {name: "白野猪", isEasy: true},
            {name: "巨型钳虫", isEasy: false}
        ],
        img: '/hero-fs/mfd.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "冰咆哮",
        desc: "召唤冰雪对大范围敌人造成大量伤害",
        levels: [
            {desc: "", requiredLevel: 35, level: 1},
            {desc: "", requiredLevel: 37, level: 2},
            {desc: "", requiredLevel: 40, level: 3}],
        froms: [
            {name: "尸王", isEasy: true},
            {name: "沃玛卫士", isEasy: false},
            {name: "沃玛教主", isEasy: false},
            {name: "巨型钳虫", isEasy: false},
            {name: "虹魔猪卫", isEasy: false},
            {name: "虹魔蝎卫", isEasy: false}
        ],
        img: '/hero-fs/bpx.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "寒冰掌",
        desc: "带有少量攻击，有几率降低敌人移动速度和攻击速度，敌人带有减速效果时候火系魔法对其有50%加成伤害",
        levels: [
            {desc: "", requiredLevel: 40, level: 1},
            {desc: "", requiredLevel: 42, level: 2},
            {desc: "", requiredLevel: 44, level: 3}],
        froms: [
            {name: "虹魔蝎卫", isEasy: true},
            {name: "虹魔猪卫", isEasy: true},
            {name: "藏宝图宝箱", isEasy: false},
            {name: "沃玛教主", isEasy: false}
        ],
        img: '/hero-fs/hbz.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "灭天火",
        desc: "召唤火龙攻击单个怪物，忽视敌人部分魔防，伤害比较高",
        levels: [
            {desc: "", requiredLevel: 42, level: 1},
            {desc: "", requiredLevel: 44, level: 2},
            {desc: "", requiredLevel: 46, level: 3}],
        froms: [
            {name: "魔龙战将", isEasy: true},
            {name: "魔龙树妖", isEasy: true},
            {name: "魔龙力士", isEasy: false},
            {name: "魔龙巨蛾", isEasy: false}
        ],
        img: '/hero-fs/mth.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "火流星",
        desc: "召唤炙炎的流星雨连续攻击处于锁定魔法阵中的所有怪物，造成3次较高伤害",
        levels: [
            {desc: "", requiredLevel: 44, level: 1},
            {desc: "", requiredLevel: 46, level: 2},
            {desc: "", requiredLevel: 48, level: 3}],
        froms: [
            {name: "魔龙树妖", isEasy: false},
            {name: "魔龙教主", isEasy: true},
            {name: "暗之触龙神", isEasy: true},
            {name: "伏魔令（破、赤、阎）宝箱", isEasy: true}
        ],
        img: '/hero-fs/hlx.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "冰焰术",
        desc: "可以看作群体版的寒冰掌并且比寒冰掌伤害更高，对于某些高魔防怪物寒冰掌是无法造成伤害无法触发减速效果的，冰焰术就可以，跟火流星一样有CD，对火系魔法加成效果等同于相应等级的寒冰掌，同样具备魔法锁定，学习3级以后可以取代寒冰掌",
        levels: [
            {desc: "", requiredLevel: 50, level: 1},
            {desc: "", requiredLevel: 53, level: 2},
            {desc: "", requiredLevel: 56, level: 3}],
        froms: [
            {name: "凌霄天界所有怪物", isEasy: false}
        ],
        img: '/hero-fs/bys.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "强化雷电术",
        desc: "指尖发出微弱的蓝色亮光，召唤一道巨大的蓝色闪电攻击敌人，雷电术的加强版，攻击更可观",
        levels: [
            {desc: "", requiredLevel: 50, level: 1},
            {desc: "", requiredLevel: 52, level: 2},
            {desc: "", requiredLevel: 54, level: 3}],
        froms: [
            {name: "雪域所有怪物", isEasy: false}
        ],
        img: '/hero-fs/qhlds.gif'
    },
    {
        type: "active",
        hero: "fs",
        name: "护体神盾",
        desc: "魔法盾加强版，限制收到的伤害更多，当血量低于一定比例后，一定几率无视伤害",
        levels: [
            {desc: "", requiredLevel: 55, level: 1},
            {desc: "", requiredLevel: 58, level: 2},
            {desc: "", requiredLevel: 62, level: 3}],
        froms: [
            {name: "破龙教主", isEasy: false},
            {name: "火龙教主", isEasy: false},
            {name: "破天魔龙", isEasy: false},
            {name: "破天邪龙", isEasy: false},
            {name: "伏魔令(破、赤、阎)宝箱", isEasy: false}
        ],
        img: '/hero-fs/htsd.gif'
    }, {
        type: "active",
        hero: "fs",
        name: "火龙气焰",
        desc: "在一定时间内灼伤周围所有敌人，攻击伤害受寒冰掌和冰焰术冰后加成",
        levels: [
            {desc: "", requiredLevel: 62, level: 1},
            {desc: "", requiredLevel: 65, level: 2},
            {desc: "", requiredLevel: 68, level: 3}],
        froms: [
            {name: "破龙教主", isEasy: false},
            {name: "火龙教主", isEasy: false},
            {name: "破天魔龙", isEasy: false},
            {name: "破天邪龙", isEasy: false},
            {name: "伏魔令(破、赤、阎)宝箱", isEasy: false}
        ],
        img: '/hero-fs/hlqy.gif'
    }, {
        type: "passive",
        hero: "ds",
        name: "精神力战法",
        desc: "3级增加2点躲避及3点准确",
        levels: [
            {desc: "", requiredLevel: 9, level: 1},
            {desc: "", requiredLevel: 11, level: 2},
            {desc: "", requiredLevel: 14, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: false}
        ],
        img: null
    }, {
        type: "active",
        hero: "ds",
        name: "治愈术",
        desc: "回复自身和他人（包括自己的宠物）少量HP，回复量根据自己的道术决定",
        levels: [
            {desc: "", requiredLevel: 7, level: 1},
            {desc: "", requiredLevel: 9, level: 2},
            {desc: "", requiredLevel: 11, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: false}
        ],
        img: '/hero-ds/zys.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "施毒术",
        desc: "无需毒药即可释放，固定减少中毒敌人2/4/6点HP/秒（依照技能等级）续时间和技能等级道术相关，有降低怪物防御的效果",
        levels: [
            {desc: "", requiredLevel: 14, level: 1},
            {desc: "", requiredLevel: 16, level: 2},
            {desc: "", requiredLevel: 18, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: false}
        ],
        img: '/hero-ds/sds.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "灵魂火符",
        desc: "通过驱使护身符来攻击敌人，无需符即可释放，伤害和技能等级道术相关",
        levels: [
            {desc: "", requiredLevel: 18, level: 1},
            {desc: "", requiredLevel: 21, level: 2},
            {desc: "", requiredLevel: 24, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: false}
        ],
        img: '/hero-ds/lhhf.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "隐身术",
        desc: "无需符即可释放，隐身时间和技能等级道术有关，部分怪物有破隐效果，例如月魔蜘蛛、各类大小BOSS等",
        levels: [
            {desc: "", requiredLevel: 20, level: 1},
            {desc: "", requiredLevel: 22, level: 2},
            {desc: "", requiredLevel: 24, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: false}
        ],
        img: '/hero-ds/yss.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "神圣战甲术",
        desc: "无需符即可释放，增加防御魔防，不在面板显示，实际有效，持续时间和技能等级道术相关（具体时间看右上角面板显示）给别人加的防御魔防是自己的一半，最新版加强了己方，道士生存能力更强，并且可以给宝宝使用",
        levels: [
            {desc: "", requiredLevel: 22, level: 1},
            {desc: "", requiredLevel: 24, level: 2},
            {desc: "", requiredLevel: 26, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-ds/sszjs.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "召唤骷髅",
        desc: "3级可召唤两只（1级召唤初始1级，2级初始2级，3级初始3级，血量固定300），每下攻击和道术即时挂钩，主动攻击，吸引仇恨",
        levels: [
            {desc: "", requiredLevel: 19, level: 1},
            {desc: "", requiredLevel: 21, level: 2},
            {desc: "", requiredLevel: 24, level: 3}],
        froms: [
            {name: "所有小僵尸", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-ds/zhkl.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "召唤术",
        desc: "3级可召唤2只（1级召唤初始1级，2级初始2级，3级初始3级，血量固定800），可先招神兽再招骷髅，每下攻击和道术即时挂钩",
        levels: [
            {desc: "", requiredLevel: 35, level: 1},
            {desc: "", requiredLevel: 37, level: 2},
            {desc: "", requiredLevel: 40, level: 3}],
        froms: [
            {name: "沃玛卫士", isEasy: false},
            {name: "沃玛卫士", isEasy: false},
            {name: "沃玛教主", isEasy: false},
            {name: "虹魔猪卫", isEasy: false},
            {name: "虹魔蝎卫", isEasy: false},
            {name: "巨型钳虫", isEasy: true},
            {name: "尸王", isEasy: true}
        ],
        img: '/hero-ds/zhs.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "进阶召唤",
        desc: "3级可召唤2只（1级召唤初始1级，2级初始2级，3级初始3级，血量固定1000），可先招上古神兽再招骷髅，每下攻击和道术即时挂钩",
        levels: [
            {desc: "", requiredLevel: 40, level: 1},
            {desc: "", requiredLevel: 42, level: 2},
            {desc: "", requiredLevel: 44, level: 3}],
        froms: [
            {name: "沃玛教主", isEasy: false},
            {name: "虹魔猪卫", isEasy: false},
            {name: "虹魔蝎卫", isEasy: false},
            {name: "藏宝图宝箱", isEasy: true}
        ],
        img: '/hero-ds/jjzh.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "神兽天御",
        desc: "使用后上古神兽肩上增加盔甲效果（先招出上古再使用此技能），大幅增加上古神兽防御、增加部分魔域，名字变为圣兽，此技能非常重要",
        levels: [
            {desc: "", requiredLevel: 42, level: 1},
            {desc: "", requiredLevel: 44, level: 2},
            {desc: "", requiredLevel: 46, level: 3}],
        froms: [
            {name: "魔龙力士", isEasy: false},
            {name: "魔龙巨蛾", isEasy: false},
            {name: "魔龙战将", isEasy: true},
            {name: "魔龙树妖", isEasy: true}
        ],
        img: '/hero-ds/ssty.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "先天气功",
        desc: "使用后人物道术百分比增加，3级增加30%道术上限，右上角显示时间，持续时间和道术、技能等级相关，增加道士伤害吸收（即减少部分所受伤害），非常重要技能，宠物可以享用增加的道术",
        levels: [
            {desc: "", requiredLevel: 44, level: 1},
            {desc: "", requiredLevel: 46, level: 2},
            {desc: "", requiredLevel: 48, level: 3}],
        froms: [
            {name: "魔龙树妖", isEasy: false},
            {name: "魔龙教主", isEasy: true},
            {name: "暗之触龙神", isEasy: true}
        ],
        img: '/hero-ds/xtqg.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "召唤白虎",
        desc: "召唤出的白虎是特殊攻击方式，并且双防和血量都比之前的召唤兽提升跨度较大，固定血量2500",
        levels: [
            {desc: "", requiredLevel: 50, level: 1},
            {desc: "", requiredLevel: 53, level: 2},
            {desc: "", requiredLevel: 55, level: 3}],
        froms: [
            {name: "凌霄天界所有怪物", isEasy: true},
            {name: "白虎", isEasy: true}
        ],
        img: '/hero-ds/zhbh.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "强化召唤白虎",
        desc: "最好等级在62的时候把三本书一起学习，这样能召唤2个白虎，若是57学习1本之后就会出现只能召唤一只白虎了，应该是游戏本身就这样设计的",
        levels: [
            {desc: "", requiredLevel: 57, level: 1},
            {desc: "", requiredLevel: 59, level: 2},
            {desc: "", requiredLevel: 62, level: 3}],
        froms: [
            {name: "白虎", isEasy: true}
        ],
        img: '/hero-ds/zhbh.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "索命毒雾",
        desc: "通过驱使护身符散播毒雾，使一定范围内怪物持续性攻击，一定几率使怪物中毒",
        levels: [
            {desc: "", requiredLevel: 52, level: 1},
            {desc: "", requiredLevel: 54, level: 2},
            {desc: "", requiredLevel: 56, level: 3}],
        froms: [
            {name: "怨恶巨兽", isEasy: true},
            {name: "突变人面蛛妖", isEasy: true}
        ],
        img: '/hero-ds/smdw.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "强化灵魂火符",
        desc: "灵魂火符的强化技能，增加灵魂火符的攻击，伤害和技能等级道术相关",
        levels: [
            {desc: "", requiredLevel: 53, level: 1},
            {desc: "", requiredLevel: 55, level: 2},
            {desc: "", requiredLevel: 57, level: 3}],
        froms: [
            {name: "天界守护神", isEasy: false}
        ],
        img: '/hero-ds/qhlhhf.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "群体治愈术",
        desc: "回复自身和周围他人（包括自己的宠物）HP，回复量根据自己的道术决定",
        levels: [
            {desc: "", requiredLevel: 33, level: 1},
            {desc: "", requiredLevel: 35, level: 2},
            {desc: "", requiredLevel: 37, level: 3}],
        froms: [
            {name: "虹魔猪卫", isEasy: false},
            {name: "虹魔蝎卫", isEasy: false},
            {name: "白野猪", isEasy: false}

        ],
        img: '/hero-ds/qtzys.gif'
    }, {

        type: "active",
        hero: "ds",
        name: "强化施毒术",
        desc: "顾名思义，在原有的施毒术技能上加强，固定减少中毒敌人8/10/12点HP/秒（依照技能等级），有降低怪物防御的效果",
        levels: [
            {desc: "", requiredLevel: 50, level: 1},
            {desc: "", requiredLevel: 52, level: 2},
            {desc: "", requiredLevel: 54, level: 3}],
        froms: [
            {name: "雪域所有怪物", isEasy: false}
        ],
        img: '/hero-ds/sds.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "召唤月灵",
        desc: "召唤一个强而有力的帮手，远程攻击，固定血量4000，攻击不错，防御极强",
        levels: [
            {desc: "", requiredLevel: 62, level: 1},
            {desc: "", requiredLevel: 65, level: 2},
            {desc: "", requiredLevel: 68, level: 3}],
        froms: [
            {name: "破天邪龙", isEasy: true},
            {name: "破天魔龙", isEasy: true},
            {name: "火龙教主", isEasy: true},
            {name: "破龙教主", isEasy: true}
        ],
        img: '/hero-ds/zhyl.gif'
    }, {
        type: "active",
        hero: "ds",
        name: "先天罡气",
        desc: "先天气功的进阶之术，使用后人物道术百分比增加，右上角显示时间，持续时间和道术、技能等级相关，非常重要技能，宠物可以享用增加的道术,4级增加35%道术上限，5级增加40%道术上限，6级增加45%道术上限",
        levels: [
            {desc: "", requiredLevel: 62, level: 1},
            {desc: "", requiredLevel: 68, level: 2},
            {desc: "", requiredLevel: 74, level: 3}],
        froms: [
            {name: "月氏战魔", isEasy: true},
            {name: "月氏兽王", isEasy: true}
        ],
        img: '/hero-ds/xtqg.gif'
    }
];

function getSkills(hero, type) {
    var result = [];

    for (var i = 0; i < skills.length; i++) {
        if (skills[i].hero == hero && skills[i].type == type) {
            result.push(skills[i]);
        }
    }

    return result;
}
