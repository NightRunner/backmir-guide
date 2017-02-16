function getSkillRow(skill) {
    var html = '';
    html += '<tr><td>' + skill.name + '</td><td>' + skill.desc + '</td><td>';
    for (var j = 0; j < skill.froms.length; j++) {
        if (skill.froms[j].isEasy) {
            html += '<btn class="btn btn-xs btn-success">' + skill.froms[j].name + '</btn>';
        } else {
            html += '<btn class="btn btn-xs btn-danger">' + skill.froms[j].name + '</btn>';
        }
        html += '&nbsp;';
    }
    html += '</td><td>';
    for (var k = 0; k < skill.levels.length; k++) {
        html += skill.levels[k].requiredLevel + '&nbsp;';
    }
    html += '</td><td>' + (skill.img == null ? "无" : '<img class="img-thumbnail" src="' + (imgCtx + skill.img) + '"/>') + '</td></tr>';

    return html;
}
