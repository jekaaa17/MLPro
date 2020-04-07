import React, { Component } from "react";
import "./guidePage.css";

function BestHeroesGuide() {
  return (
    <div className="guides-body">
      <div className="guides-background">
        <div className="guides-wrapper">
          <h1>Best Heroes for Solo Ranked</h1>
          <p>
            Most players get stuck in legend/epic tier when they play solo
            ranked. They will get frustrated when they keep losing and stop
            playing this game. This guide provides you with heroes who are the
            best to win the game, especially in solo ranked. I only mention
            marksman heroes as the best heroes to climb up your rank because of
            mage heroes such as gusion, pharsa, ling can't guarantee you will
            win in the late game. Marksman is one of the hero roles that has
            massive damage after 15 minutes of the game, which brings your team
            to victory.
          </p>
          <img src="../assets/first-best-heroes.png" />
          <p>1. Bruno</p>
          <p>
            Bruno is the best marksman I would say if you play solo ranked to
            reach mythic tier. He has a lot of damage when he gets his third
            item, which is an endless battle. On top of that, his emblem stats
            which increase his critical chance would make Powerball (skill one
            effect, his next basic attack will kick a Powerball) more effective.
          </p>
          <img src="../assets/bruno-powerball.png" />
          <p>
            Nevertheless, using Bruno is not as easy as you look because there
            is one trick that you have to master before you can be a good Bruno
            player. The method is quite simple, but not many people have known
            this trick called unlimited Powerball. Usually, when Bruno cast his
            skill one, his next basic attack will kick Powerball to the enemy.
            Therefore, while the ball is rebounding to Bruno, his basic attack
            will become normal. The trick to create unlimited Powerball is by
            using his skill one again while the Powerball is rebounding to Bruno
            and It will create unlimited Powerball.
          </p>
          <img src="../assets/best-heroes-guide.png" />
          <p>3. Granger</p>
          <p>
            Last but not least, Granger is also one of the meta heroes for
            marksman. Although his basic attack is not as fast as the other two
            marksmen, his skill one has a massive amount of damage. Moreover, if
            flicker is being used as a battle spell added with skill two, it
            will make him have two escape skills. As a result, it is hard to
            kill him. Granger is one of the greatest marksmen for early to
            mid-game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestHeroesGuide;
