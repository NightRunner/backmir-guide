package org.nr.backmir.guide.domain;

/**
 * @author chenhaiyang <690732060@qq.com>
 */
public class Monster {
    private String name;//
    private Integer id;//
    private Integer hp = 0;//
    private Integer physicalDefense = 0;//
    private Integer magicDefense = 0;//
    private Integer level = 0;//
    private Integer accuracy = 0;//
    private Integer exp = 1;
    private Integer attackDistance = 1;
    private Integer vision = 5;
    private Integer attackInterval = 1000;
    private Integer moveInterval = 1000;
    private Integer attack = 0;

    public Integer getAttack() {
        return attack;
    }

    public void setAttack(Integer attack) {
        this.attack = attack;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getHp() {
        return hp;
    }

    public void setHp(Integer hp) {
        this.hp = hp;
    }

    public Integer getPhysicalDefense() {
        return physicalDefense;
    }

    public void setPhysicalDefense(Integer physicalDefense) {
        this.physicalDefense = physicalDefense;
    }

    public Integer getMagicDefense() {
        return magicDefense;
    }

    public void setMagicDefense(Integer magicDefense) {
        this.magicDefense = magicDefense;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getAccuracy() {
        return accuracy;
    }

    public void setAccuracy(Integer accuracy) {
        this.accuracy = accuracy;
    }

    public Integer getExp() {
        return exp;
    }

    public void setExp(Integer exp) {
        this.exp = exp;
    }

    public Integer getAttackDistance() {
        return attackDistance;
    }

    public void setAttackDistance(Integer attackDistance) {
        this.attackDistance = attackDistance;
    }

    public Integer getVision() {
        return vision;
    }

    public void setVision(Integer vision) {
        this.vision = vision;
    }

    public Integer getAttackInterval() {
        return attackInterval;
    }

    public void setAttackInterval(Integer attackInterval) {
        this.attackInterval = attackInterval;
    }

    public Integer getMoveInterval() {
        return moveInterval;
    }

    public void setMoveInterval(Integer moveInterval) {
        this.moveInterval = moveInterval;
    }
}
