package org.nr.backmir.guide.tools;

import com.google.common.collect.Lists;
import org.springframework.util.StringUtils;

import java.util.List;

/**
 * Created by NightRunner on 2017-02-25.
 */
public class MultiRowTextToTd {
    public static void main(String[] args) {
        String[] rows = new String[]{"鹤嘴锄*\n" +
                " 六角戒指\n" +
                " 无极棍\n" +
                " 力量戒指\n" +
                " 圣战保甲\n" +
                " 传送戒指\n" +
                " ",
                "短剑\n" +
                        " 蓝色水晶戒指\n" +
                        " 战神盔甲(男)\n" +
                        " 泰坦戒指\n" +
                        " 天尊道袍\n" +
                        " 护身戒指\n" +
                        " ", "  铁剑\n" +
                " 黑色水晶戒指\n" +
                " 战神盔甲(女)\n" +
                " 紫碧螺\n" +
                " 天师长袍\n" +
                " 复活戒指\n" +
                " ", "   青铜斧\n" +
                " 珍珠戒指\n" +
                " 幽灵战衣(男)\n" +
                " 骑士手镯\n" +
                " 法师披风\n" +
                " 风天魔甲\n" +
                " ", " 八荒\n" +
                " 蛇眼戒指\n" +
                " 幽灵战衣(女)\n" +
                " 三眼手镯\n" +
                " 霓裳羽衣\n" +
                " 凰天魔衣\n" +
                " ",
                " 半月\n" +
                        " 骷髅戒指\n" +
                        " 恶魔长袍(男)\n" +
                        " 龙之手镯\n" +
                        " 圣战头盔\n" +
                        " 雷霆战甲(男)\n" +
                        "  ",
                "海魂\n" +
                        " 道德戒指\n" +
                        " 恶魔长袍(女)\n" +
                        " 绿色项链\n" +
                        " 天尊头盔\n" +
                        " 雷霆战甲(女\n" +
                        "  ",
                " 凌风\n" +
                        " 魅力戒指\n" +
                        " 狂风戒指\n" +
                        " 灵魂项链\n" +
                        " 法神头盔\n" +
                        " 光芒道袍(男)\n" +
                        "  ",
                "  破魂\n" +
                        " 金戒指\n" +
                        " 珊瑚戒指\n" +
                        " 恶魔铃铛\n" +
                        " 圣战项链\n" +
                        " 光芒道袍(女)\n" +
                        " ",
                " 斩马刀\n" +
                        " 降妖除魔戒指\n" +
                        " 龙之戒指\n" +
                        " 攻击宝石\n" +
                        " 天尊项链\n" +
                        " 烈焰魔衣(男)\n" +
                        "  ",
                "  降魔\n" +
                        " 小手镯\n" +
                        " 铂金戒指\n" +
                        " 道术宝石\n" +
                        " 法神项链\n" +
                        " 烈焰魔衣(女)\n" +
                        " ",
                " 偃月\n" +
                        " 皮质手套\n" +
                        " 红宝石戒指\n" +
                        " 魔法宝石\n" +
                        " 圣战手镯\n" +
                        " 雷霆战靴\n" +
                        "  ",
                " 修罗\n" +
                        " 银手镯\n" +
                        " 心灵手镯\n" +
                        "  \n" +
                        " 天尊手镯\n" +
                        " 光芒道靴\n" +
                        "  ",
                " 罗刹\n" +
                        " 刚手镯\n" +
                        " 思贝儿手镯\n" +
                        "  \n" +
                        " 法神手镯\n" +
                        " 烈焰魔靴\n" +
                        "  ",
                "  凝霜\n" +
                        " 大手镯\n" +
                        " 阎罗手套\n" +
                        "  \n" +
                        " 圣战戒指\n" +
                        " 强化雷霆战靴\n" +
                        " ",
                "  布衣(男) (女)\n" +
                        " 坚固手套\n" +
                        " 幽灵项链\n" +
                        "  \n" +
                        " 天尊戒指\n" +
                        " 强化光芒道靴\n" +
                        " ",
                "  轻型盔甲(男)(女)\n" +
                        " 魔力手镯\n" +
                        " 天珠项链\n" +
                        "  \n" +
                        " 法神戒指\n" +
                        " 强化烈焰魔靴\n" +
                        " ",
                " 中型盔甲(男)(女)\n" +
                        " 道士手镯\n" +
                        " 生命项链\n" +
                        "  \n" +
                        " 狂风项链\n" +
                        " 雷霆、光芒、烈焰腰带\n" +
                        "  ",
                "重盔甲(男)(女)\n" +
                        " 黑檀手镯\n" +
                        " 记忆项链\n" +
                        "  \n" +
                        " 神圣攻击宝石\n" +
                        " 雷霆、光芒、烈焰护腕\n" +
                        "   ",
                "  灵魂战衣(男)(女)\n" +
                        " 金手镯\n" +
                        " 黑铁头盔\n" +
                        "  \n" +
                        " 神圣魔法宝石\n" +
                        " 强化雷霆、光芒、烈焰腰带\n" +
                        " ",
                " 魔法长袍(男)(女)\n" +
                        " 幽灵手套\n" +
                        " 虹膜项链\n" +
                        "  \n" +
                        " 神圣道术宝石\n" +
                        " 强化雷霆、光芒、烈焰护腕\n" +
                        "  ",
                " 兽皮腰带\n" +
                        " 死神手套\n" +
                        " 虹膜手镯\n" +
                        "  \n" +
                        " 圣龙盔\n" +
                        " 雷霆、光芒、烈焰项链\n" +
                        "  ",
                " 铁腰带\n" +
                        " 金项链\n" +
                        " 虹膜戒指\n" +
                        "  \n" +
                        " 魔龙盔\n" +
                        " 强化雷霆、光芒、烈焰项链\n" +
                        "  ",
                " 青铜腰带\n" +
                        " 魔法头盔\n" +
                        "  \n" +
                        "  \n" +
                        " 天龙盔\n" +
                        " 雷霆战戒\n" +
                        "  ",
                "钢铁腰带\n" +
                        " 道士头盔\n" +
                        "  \n" +
                        "  \n" +
                        "  \n" +
                        " 光芒道戒\n" +
                        "   ",
                "布鞋\n" +
                        " 竹笛\n" +
                        "  \n" +
                        "  \n" +
                        "  \n" +
                        " 烈焰魔戒\n" +
                        "   ",
                " 鹿皮靴\n" +
                        " 放大镜\n" +
                        "  \n" +
                        "  \n" +
                        "  \n" +
                        " 强化雷霆战戒\n" +
                        "  ",
                " 紫绸靴\n" +
                        " 蓝色翡翠项链\n" +
                        "  \n" +
                        "  \n" +
                        "  \n" +
                        " 强化光芒道戒\n" +
                        "  ",
                " 避魂靴\n" +
                        " 传统项链\n" +
                        "  \n" +
                        "  \n" +
                        "  \n" +
                        " 强化烈焰魔戒\n" +
                        "  "

        };
        for (String row : rows) {
            System.out.println(toTd(multiRowToList(row)));
        }
    }

    private static String toTd(List<String> rows) {
        StringBuilder builder = new StringBuilder();
        builder.append("<tr>");
        for (String row : rows) {
            if (StringUtils.isEmpty(row)) {
                continue;
            }
            builder.append("<td>");
            builder.append(row.trim());
            builder.append("</td>");
        }
        builder.append("</tr>");
        return builder.toString();
    }

    private static List<String> multiRowToList(String string) {
        return Lists.newArrayList(string.split("\n"));
    }
}
