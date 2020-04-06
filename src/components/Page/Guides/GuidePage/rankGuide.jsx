import React, { Component } from "react";
import "./guidePage.css";

function RankGuide() {
  return (
    <div className="guides-body">
      <div className="guides-background">
        <div className="guides-wrapper">
          <h1>How to Reach Mythic or Mythical Glory</h1>
          <img src="../assets/rank-guide.png" />
          <p>1. Trio Party</p>
          <p>
            Mobile legend has many game modes available for players. There are
            classic, ranked, brawl and many more. Players can level-up their
            rank by playing ranked mode in solo, duo, trio or full house(5)
            party. From my experience, the fastest way to rank-up in this game
            is trio party. The reason I do not mention full house party because
            it is hard to find four other people to play at the same time.
            Moreover, enemy is usually harder because most of them may have been
            playing together for a long time.
          </p>
          <img src="../assets/trio-party.png" />
          <p>
            Trio party has many advantages in ranked game. Firstly, you play
            with two friends that you already know. Therefore, you can choose 2
            teammates which is great in marksman and tanker role for example.
            Secondly, there is less chance that you will meet random players
            that has low skill level because you will only meet 2 random people
            instead of meeting 3/4 people that you do not know in solo or duo
            party.
          </p>
          <p>
            There are some tricks to win more games in trio party. I got this
            trick from ex-top global and pro player which is Jessnolimit. he
            said that if you played in trio, three of you had to fill up
            midlaner role which was mage mostly, tank role in the middle lane
            and marksman in safe lane because they are the most impactful hero
            in a game. Tank and mage in midlane carry the marksman in the early
            game to get items by ganking, rotation and getting objectives. After
            marksman has some items, he carry the game and destroy the last
            tower to win game. Nevertheless, you also need someone who use
            fighter to take offlane position and one support or tank to
            accompany marksman.
          </p>
          <img src="../assets/meta-heroes.png" />
          <p>2. Pick Meta Heroes</p>
          <p>
            Meta Heroes are heroes that is currently more powerful than other
            heroes in current patch of game. On every update, there are some
            updates like buff/nerf heroes, hero revamp (not every time) and many
            more. Developer wants to make game not boring therefore the gameplay
            is always changing.
          </p>
          <p>
            Players can easily win game with meta heroes but some meta heroes
            will get banned during draft pick phase. hence, I created a table
            for the latest heroes tier list at this home page to give players
            some information about what heroes are better than others. I got the
            information from what I have been seeing in game tournament or
            ranked draft pick.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RankGuide;
