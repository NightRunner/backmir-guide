package org.nr.backmir.guide.tools.domain;

import java.util.ArrayList;
import java.util.List;

public class TR {
    private List<String> tds = new ArrayList<>();

    public List<String> getTds() {
        return tds;
    }

    public void addTd(String tdText) {
        tds.add(tdText);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("<tr>");
        for (String td : tds) {
            builder.append("<td>");
            builder.append(td);
            builder.append("</td>");
        }
        builder.append("</tr>");
        return builder.toString();
    }

    public boolean isNotEmpty() {
        return !tds.isEmpty();
    }
}
