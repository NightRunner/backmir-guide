package org.nr.backmir.guide.tools;

import org.nr.backmir.guide.tools.domain.TR;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by NightRunner on 2017-02-25.
 */
public class MultiRowTextToTrTd {
    static String string = "1\n" +
            " 每个装备都有其对应的阶级，分解后能出产其对应阶级-1的精华石。PS：详细请参考《鉴定与合成系统>装备阶级速查（2-7阶）》\n" +
            " \n" +
            " \n" +
            "  \n" +
            " \n" +
            "2\n" +
            " 每个战意精华石可使同阶段装备攻击属性+1，八卦精华石对应道术，聚魔精华石对应魔法。\n" +
            " \n" +
            " \n" +
            "  \n" +
            " \n" +
            "3\n" +
            " 目前只有极品属性有额外的攻道法三种属性的极品装备可以被分解，极品属性每多一点可以多分解出相应属性的一枚精华石。\n" +
            " \n" +
            " \n" +
            "  \n" +
            " \n" +
            "4\n" +
            " 每次强化装备需要其装备阶级相对应的精华石1个，最多能升到+5属性（即卓越品质），+6~+8的极品装备需要自己通过打怪物爆出。\n" +
            " \n" +
            " \n" +
            "  \n" +
            " \n" +
            "5\n" +
            " 每20个相同精华石可以向上合并成一个高等级的精华石。\n" +
            " \n" +
            " \n" +
            "  \n" +
            " \n" +
            "6\n" +
            " 2.06_03版本开放的乾坤石适用于极品装备，会将所加的极品点数随机再分配一次。\n" +
            " \n" +
            " \n" +
            "  \n" +
            " \n" +
            "7\n" +
            " 分解、强化和用乾坤石洗装备都需要支出手续费，操作前请注意包裹里的银两是否充足。\n" +
            " \n" +
            " \n" +
            "  \n" +
            " \n" +
            "8\n" +
            " 友情提示：撸极品强装备也要多注意休息，多备份存档是好习惯。\n" +
            " \n";

    public static void main(String[] args) {
        List<String> rows = Utils.getLineList(string);
        List<TR> trs = new ArrayList<>();

        TR currentTr = null;

        for (String row : rows) {
            if (currentTr == null) {
                currentTr = new TR();
                trs.add(currentTr);
            }

            if (StringUtils.isEmpty(row.trim())) {
                if(currentTr.isNotEmpty()) {
                    currentTr = null;
                }
                continue;
            }

            currentTr.addTd(row);
        }

        System.out.println(trs);
    }
}
