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
            ranked. There is a time when you can get winstreak or losestreak and
            then you keep staying in the same rank. This guide provides you
            about what heroes is the best especially in solo ranked. I only
            mention marksman heroes as the best heroes to climb up your rank
            because midlaner hero such as gusion, pharsa, ling or meta heroes
            can't guarantee you will win in late game. Marksman is hard carry
            that becomes online after 15 minutes with huge amount of damage
            which brings your team to victory.
          </p>
          <img src="../assets/first-best-heroes.png" />
          <p>1. Bruno</p>
          <p>
            Bruno is the best marksman I would say if you play solo ranked to
            reach mythic. He has a lot of damage when he get his third item
            which is endless battle. In addition, his second emblem stats which
            increase his critical chance would make powerball (skill one effect,
            his next basic attack will kick a powerball) really powerful.
          </p>
          <img src="../assets/bruno-powerball.png" />
          <p>
            Neverthless, using bruno is not as easy as you look because there is
            one trick that you have to master before you can be a good bruno
            player. The trick is quite simple but not many people have known
            this trick called unlimited powerball. Normally, when bruno cast his
            skill one, his next basic attack will kick powerball. Therefore,
            while ball is rebounding to bruno his basic attack will become
            normal. The trick to create unlimited powerball is by using his
            skill 1 again while the powerball is rebounding to bruno and It will
            create unlimited powerball.
          </p>
          <img src="../assets/best-heroes-guide.png" />
          <p>3. Granger</p>
          <p>
            Last but not least, Granger is also one of meta heroes for marksman.
            Although, his basic attack is not as fast as other two marksman, his
            skill one has massive amount of damage. Moreover, if flicker is
            being used as battle spell added with skill 2 it will make him hard
            to be killed. Granger is one of the greatest marksman for early to
            mid game.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BestHeroesGuide;
