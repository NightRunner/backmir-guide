$(document).ready(function () {

    var html = '';
    var zsPassiveSkills = getSkills("ds", "passive")
    for (var i = 0; i < zsPassiveSkills.length; i++) {
        html += getSkillRow(zsPassiveSkills[i]);
    }
    $("#passive-skill-table-body").html(html);

    html = '';
    var zsActiveSkills = getSkills("ds", "active")
    for (var i = 0; i < zsActiveSkills.length; i++) {
        html += getSkillRow(zsActiveSkills[i]);
    }

    $("#active-skill-table-body").html(html);
});