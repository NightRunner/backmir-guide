package org.nr.backmir.guide.tools;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by NightRunner on 2017-02-25.
 */
public class Utils {
    public static List<String> getLineList(String string) {
        return Lists.newArrayList(string.split("\n"));
    }
}
