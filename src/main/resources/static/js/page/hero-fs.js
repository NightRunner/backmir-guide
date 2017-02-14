$(document).ready(function () {
    var html = '';
    var zsActiveSkills = getSkills("fs", "active")
    for (var i = 0; i < zsActiveSkills.length; i++) {
        html += getSkillRow(zsActiveSkills[i]);
    }
    $("#active-skill-table-body").html(html);
});