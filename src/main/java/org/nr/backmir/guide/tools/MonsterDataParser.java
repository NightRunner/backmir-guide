package org.nr.backmir.guide.tools;

import org.nr.backmir.guide.domain.Monster;
import org.nr.backmir.guide.domain.NameValuePair;
import org.nr.backmir.guide.service.JsonService;
import org.nr.backmir.guide.service.JsonServiceFastJsonImpl;
import org.springframework.util.StringUtils;

import java.io.*;
import java.util.LinkedList;
import java.util.List;

/**
 * @author chenhaiyang <690732060@qq.com>
 */
public class MonsterDataParser {
    private static JsonService jsonService = new JsonServiceFastJsonImpl();

    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new FileReader(new File("C:/Users/NightRunner/IdeaProjects/backmir-guide/src/main/resources/monsa.ini")));

        List<String> list = new LinkedList<>();
        String line = null;
        while ((line = bufferedReader.readLine()) != null) {
            list.add(line);
        }
        bufferedReader.close();

        List<Monster> monsters = new LinkedList<>();

        Monster monster = null;
        for (String row : list) {

            if (StringUtils.isEmpty(row)) {
                continue;
            }


            if (row.startsWith("[")) {
                if (monster != null) {
                    monsters.add(monster);
                }
                monster = new Monster();
                monster.setId(getId(row));
                continue;
            }

            System.out.println(row);
            getAndFill(row, monster);

        }

        PrintWriter printWriter = new PrintWriter("C:/Users/NightRunner/IdeaProjects/backmir-guide/src/main/resources/static/js/monster.json");
        printWriter.println(jsonService.toJson(monsters));
        printWriter.close();

    }

    private static void getAndFill(String row, Monster monster) {
        NameValuePair nameValuePair = getNameValuePair(row);
        String name = nameValuePair.getName();
        String value = nameValuePair.getValue();
        if ("name".equals(name)) {
            monster.setName(value);
        } else if ("HP".equals(name)) {
            monster.setHp(getInteger(value));
        } else if ("level".equals(name)) {
            monster.setLevel(getInteger(value));
        } else if ("AC".equals(name)) {
            monster.setPhysicalDefense(getInteger(value));
        } else if ("MAC".equals(name)) {
            monster.setMagicDefense(getInteger(value));
        } else if ("accuracy".equals(name)) {
            monster.setAccuracy(getInteger(value));
        } else if ("expr".equals(name)) {
            monster.setExp(getInteger(value));
        } else if ("DC".equals(name)) {
            monster.setAttack(getInteger(value));
        } else if ("MC".equals(name)) {
            monster.setMoveInterval(getInteger(value));
        } else if ("maxMC".equals(name)) {
            monster.setAttackInterval(getInteger(value));
        } else if ("SC".equals(name)) {
            monster.setVision(getInteger(value));
        } else if ("maxSC".equals(name)) {
            monster.setAttackDistance(getInteger(value));
        }
    }

    private static int getInteger(String value) {
        return Integer.parseInt(value);
    }

    private static NameValuePair getNameValuePair(String row) {
        String splits[] = row.split("=");
        NameValuePair nameValuePair = new NameValuePair();
        nameValuePair.setName(splits[0].trim());
        nameValuePair.setValue(splits[1].trim());
        return nameValuePair;
    }

    private static Integer getId(String line) {
        return getInteger(line.substring(line.indexOf("[") + 1, line.indexOf("]")).trim());
    }
}
