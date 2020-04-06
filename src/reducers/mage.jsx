import React from "react";
import "./css/reducer.css";
import { SEARCH_MAGE } from "../actions/index.jsx";
const _ = require("lodash"); // Lodash.
const mage = [
  {
    name: "Alice",
    id: 75,
    firstItem: "arcane-boots",
    secondItem: "concentrated-energy",
    thirdItem: "lightning-truncheon",
    fourthItem: "clock-of-destiny",
    fifthItem: "holy-crystal",
    sixthItem: "beast-killer",
    battlePointCost: "15000",
    diamondOrTicket: "Diamond",
    cost: "399",
    rating: "B",
    spell: "retribution",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Nana",
    id: 79,
    firstItem: "demon-shoes",
    secondItem: "lightning-truncheon",
    thirdItem: "necklace-of-durance",
    fourthItem: "glowing-wand",
    fifthItem: "immortality",
    sixthItem: "athena-s-shield",
    battlePointCost: "6500",
    diamondOrTicket: "Diamond",
    cost: "299",
    rating: "A+",
    spell: "flameshot",
    firstEmblem: "flow-active",
    secondEmblem: "mastery",
    thirdEmblem: "agility",
    fourthEmblem: "observation",
    fifthEmblem: "catastrophe-active",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Eudora",
    id: 78,
    firstItem: "arcane-boots",
    secondItem: "clock-of-destiny",
    thirdItem: "lightning-truncheon",
    fourthItem: "divine-glaive",
    fifthItem: "holy-crystal",
    sixthItem: "fleeting-time",
    battlePointCost: "2000",
    diamondOrTicket: "Diamond",
    cost: "299",
    rating: "C",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Gord",
    id: 85,
    firstItem: "magic-shoes",
    secondItem: "glowing-wand",
    thirdItem: "ice-queen-wand",
    fourthItem: "genius-wand",
    fifthItem: "divine-glaive",
    sixthItem: "holy-crystal",
    battlePointCost: "24000",
    diamondOrTicket: "Ticket",
    cost: "499",
    rating: "A+",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Kagura",
    id: 54,
    firstItem: "magic-shoes",
    secondItem: "clock-of-destiny",
    thirdItem: "lightning-truncheon",
    fourthItem: "glowing-wand",
    fifthItem: "holy-crystal",
    sixthItem: "genius-wand",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Cyclops",
    id: 76,
    firstItem: "arcane-boots",
    secondItem: "enchanted-talisman",
    thirdItem: "lightning-truncheon",
    fourthItem: "glowing-wand",
    fifthItem: "concentrated-energy",
    sixthItem: "immortality",
    battlePointCost: "15000",
    diamondOrTicket: "Diamond",
    cost: "399",
    rating: "C",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Aurora",
    id: 73,
    firstItem: "arcane-boots",
    secondItem: "lightning-truncheon",
    thirdItem: "winter-truncheon",
    fourthItem: "immortality",
    fifthItem: "divine-glaive",
    sixthItem: "blood-wings",
    battlePointCost: "24000",
    diamondOrTicket: "Diamond",
    cost: "499",
    rating: "B",
    spell: "flicker",
    firstEmblem: "mastery",
    secondEmblem: "vitality",
    thirdEmblem: "agility-active",
    fourthEmblem: "gift",
    fifthEmblem: "rupture-active",
    sixthEmblem: "recovery",
    firstTalent: "focusing-mark-active",
    secondTalent: "avarice",
    thirdTalent: "pull-yourself-together",
  },
  {
    name: "Vexana",
    id: 62,
    firstItem: "demon-shoes",
    secondItem: "glowing-wand",
    thirdItem: "fleeting-time",
    fourthItem: "lightning-truncheon",
    fifthItem: "genius-wand",
    sixthItem: "divine-glaive",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "C",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage-active",
  },
  {
    name: "Harley",
    id: 63,
    firstItem: "arcane-boots",
    secondItem: "lightning-truncheon",
    thirdItem: "clock-of-destiny",
    fourthItem: "concentrated-energy",
    fifthItem: "divine-glaive",
    sixthItem: "immortality",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "retribution",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage-active",
  },
  {
    name: "Odette",
    id: 47,
    firstItem: "magic-shoes",
    secondItem: "holy-crystal",
    thirdItem: "concentrated-energy",
    fourthItem: "glowing-wand",
    fifthItem: "divine-glaive",
    sixthItem: "blood-wings",
    battlePointCost: "N/A",
    diamondOrTicket: "Diamond",
    cost: "N/A",
    rating: "C",
    spell: "flicker",
    firstEmblem: "flow",
    secondEmblem: "mastery-active",
    thirdEmblem: "agility",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Pharsa",
    id: 22,
    firstItem: "magic-shoes",
    secondItem: "lightning-truncheon",
    thirdItem: "holy-crystal",
    fourthItem: "divine-glaive",
    fifthItem: "ice-queen-wand",
    sixthItem: "blood-wings",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "S",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Gusion",
    id: 20,
    firstItem: "magic-shoes",
    secondItem: "calamity-reaper",
    thirdItem: "holy-crystal",
    fourthItem: "concentrated-energy",
    fifthItem: "winter-truncheon",
    sixthItem: "divine-glaive",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A+",
    spell: "retribution",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Valir",
    id: 16,
    firstItem: "shadow-mask",
    secondItem: "demon-shoes",
    thirdItem: "glowing-wand",
    fourthItem: "necklace-of-durance",
    fifthItem: "winter-truncheon",
    sixthItem: "holy-crystal",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A+",
    spell: "flameshot",
    firstEmblem: "mastery",
    secondEmblem: "vitality",
    thirdEmblem: "agility-active",
    fourthEmblem: "gift",
    fifthEmblem: "rupture",
    sixthEmblem: "recovery-active",
    firstTalent: "focusing-mark",
    secondTalent: "avarice",
    thirdTalent: "pull-yourself-together-active",
  },
  {
    name: "Chang'e",
    id: 7,
    firstItem: "magic-shoes",
    secondItem: "glowing-wand",
    thirdItem: "ice-queen-wand",
    fourthItem: "windtalker",
    fifthItem: "divine-glaive",
    sixthItem: "winter-truncheon",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Selena",
    id: 14,
    firstItem: "demon-shoes",
    secondItem: "star-shard",
    thirdItem: "calamity-reaper",
    fourthItem: "divine-glaive",
    fifthItem: "berserker-s-fury",
    sixthItem: "winter-truncheon",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A+",
    spell: "retribution",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Lunox",
    id: 26,
    firstItem: "demon-shoes",
    secondItem: "genius-wand",
    thirdItem: "concentrated-energy",
    fourthItem: "holy-crystal",
    fifthItem: "divine-glaive",
    sixthItem: "winter-truncheon",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A+",
    spell: "retribution",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage-active",
  },
  {
    name: "Kimmy",
    id: 40,
    firstItem: "arcane-boots",
    secondItem: "glowing-wand",
    thirdItem: "ice-queen-wand",
    fourthItem: "blade-of-despair",
    fifthItem: "genius-wand",
    sixthItem: "blood-wings",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A+",
    spell: "flicker",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Harith",
    id: 42,
    firstItem: "magic-shoes",
    secondItem: "calamity-reaper",
    thirdItem: "holy-crystal",
    fourthItem: "concentrated-energy",
    fifthItem: "feather-of-heaven",
    sixthItem: "immortality",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "S",
    spell: "retribution",
    firstEmblem: "flow",
    secondEmblem: "mastery-active",
    thirdEmblem: "agility",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Kadita",
    id: 43,
    firstItem: "demon-shoes",
    secondItem: "clock-of-destiny",
    thirdItem: "lightning-truncheon",
    fourthItem: "winter-truncheon",
    fifthItem: "holy-crystal",
    sixthItem: "divine-glaive",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Faramis",
    id: 45,
    firstItem: "demon-shoes",
    secondItem: "clock-of-destiny",
    thirdItem: "lightning-truncheon",
    fourthItem: "glowing-wand",
    fifthItem: "holy-crystal",
    sixthItem: "genius-wand",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Guinivere",
    id: 31,
    firstItem: "arcane-boots",
    secondItem: "concentrated-energy",
    thirdItem: "holy-crystal",
    fourthItem: "calamity-reaper",
    fifthItem: "glowing-wand",
    sixthItem: "divine-glaive",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "execute",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Esmeralda",
    id: 30,
    firstItem: "magic-shoes",
    secondItem: "calamity-reaper",
    thirdItem: "feather-of-heaven",
    fourthItem: "holy-crystal",
    fifthItem: "oracle",
    sixthItem: "divine-glaive",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "retribution",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Lylia",
    id: 34,
    firstItem: "magic-shoes",
    secondItem: "glowing-wand",
    thirdItem: "holy-crystal",
    fourthItem: "ice-queen-wand",
    fifthItem: "divine-glaive",
    sixthItem: "genius-wand",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A+",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage-active",
  },
  {
    name: "Silvanna",
    id: 6,
    firstItem: "tough-boots",
    secondItem: "antique-cuirass",
    thirdItem: "feather-of-heaven",
    fourthItem: "beast-killer",
    fifthItem: "oracle",
    sixthItem: "necklace-of-durance",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A",
    spell: "inspire",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract-active",
    firstTalent: "mystery-shop-active",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage",
  },
  {
    name: "Cecilion",
    id: 4,
    firstItem: "demon-shoes",
    secondItem: "lightning-truncheon",
    thirdItem: "genius-wand",
    fourthItem: "concentrated-energy",
    fifthItem: "blood-wings",
    sixthItem: "immortality",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "A+",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery",
    thirdEmblem: "agility-active",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Karina",
    id: 1,
    firstItem: "arcane-boots",
    secondItem: "corrosion-scythe",
    thirdItem: "concentrated-energy",
    fourthItem: "lightning-truncheon",
    fifthItem: "holy-crystal",
    sixthItem: "immortality",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "C",
    spell: "flameshot",
    firstEmblem: "flow-active",
    secondEmblem: "mastery",
    thirdEmblem: "agility",
    fourthEmblem: "observation",
    fifthEmblem: "catastrophe-active",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship-active",
    thirdTalent: "impure-rage",
  },
  {
    name: "Vale",
    id: 2,
    firstItem: "demon-shoes",
    secondItem: "glowing-wand",
    thirdItem: "divine-glaive",
    fourthItem: "genius-wand",
    fifthItem: "blood-wings",
    sixthItem: "holy-crystal",
    battlePointCost: "32000",
    diamondOrTicket: "Diamond",
    cost: "599",
    rating: "D",
    spell: "flameshot",
    firstEmblem: "flow",
    secondEmblem: "mastery-active",
    thirdEmblem: "agility",
    fourthEmblem: "observation-active",
    fifthEmblem: "catastrophe",
    sixthEmblem: "contract",
    firstTalent: "mystery-shop",
    secondTalent: "magic-worship",
    thirdTalent: "impure-rage-active",
  },
];

mage.map(function (entry) {
  entry.arcaneBootsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Arcane Boots</h3>
      </div>
      <p>+15 Magic PEN</p>
      <p>Unique:+40 Movement SPD</p>
    </div>
  );
  entry.demonShoesDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Demon Shoes</h3>
      </div>
      <p>+30 Mana Regen</p>
      <p>
        Unique:+40 Movement SPD
        <br />
        Unique Passive-Mysticism:Eliminations of enemy heroes and assists
        regenerates hero's mana by 10%, while eliminating minions regenerates 4%
        of the hero's mana.
      </p>
    </div>
  );
  entry.magicShoesDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Magic Shoes</h3>
      </div>
      <p>+10% CD Reduction</p>
      <p>Unique:+40 Movement SPD"</p>
    </div>
  );
  entry.swiftBootsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Swift Boots</h3>
      </div>
      <p>+15% Attack Speed</p>
      <p>Unique:+40 Movement SPD</p>
    </div>
  );
  entry.rapidBootsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Rapid Boots</h3>
      </div>
      <p>Unique:+80 Movement SPD</p>
      <p>
        Unique Passive-Side Effect: Dealing or taking damage slows hero's
        movement speed by 40 points. Lasts 5 seconds.
      </p>
    </div>
  );
  entry.toughBootsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Tough Boots</h3>
      </div>
      <p>+22 Magic Defense</p>
      <p>
        Unique:+40 Movement SPD
        <br />
        Unique Passive-Fortitude:Reduces time controlled 30%
      </p>
    </div>
  );
  entry.warriorBootsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Warrior Boots</h3>
      </div>
      <p>+22 Physical Defense</p>
      <p>
        Unique:+40 Movement SPD
        <br />
        Unique Passive-Valor:Physical defense will go up 5 with each basic
        attack received, for an increase of up to 25 points. Lasts 3 seconds.
      </p>
    </div>
  );
  entry.raptorMacheteDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Raptor Machete</h3>
      </div>
      <p>
        +30 Physical ATK
        <br />
        +15% Physical Pen
      </p>
      <p>
        Unique:50% Damage to Monsters
        <br />
        Unique Passive-Breakout:For each 10s, Hero's next Basic Attack will deal
        extra 50 points of True Damage at least(increases with hero level) and
        slow enemies by 30%. Lasts 1s. Performing Basic Attacks will reduce its
        cooldown.
        <br />
        Unique Passive-Greed:Gain extra 25% EXP when jungling. After killing
        Creeps, recover HP by 4% and Mana by 10%.
        <br />
        Unique Passive-Gorge:Kill creeps to increase Phy.ATK by 4. Up to 15
        layers
      </p>
      <p>
        Unique Passive-:Makes the battle Spell 'Retribution' applicable to
        heroes, reducing the target's movement speed by 70% and dealing a small
        amount of True Damage to the target within 3 seconds. Buying other
        advanced jungling equipment will disable this effect.
      </p>
    </div>
  );
  entry.beastKillerDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Beast Killer</h3>
      </div>
      <h3>Beast Killer</h3>
      <p>
        +20 Physical Defense
        <br />
        +20 Magical Defense
      </p>
      <p>
        Unique:50% Damage to Monsters
        <br />
        Unique Passive-Impulse:Deals 100 points of Magic Damage at leaast to
        enemies nearby (increases with hero level) and slows them by 30% when
        taking 10% damage of Max HP. Lasts 2s. The effect activates every 2s.
        <br />
        Unique Passive-Greed:Gain extra 25% EXP when jungling. After killing
        Creeps, recover HP by 4% and Mana by 10%.
        <br />
        Unique Passive-Gorge:Kill creeps to increase Phy.Defense and Mag.Defense
        by 3. Up to 15 layers
        <br />
        Unique Passive-:Makes the battle Spell 'Retribution' applicable to
        heroes, reducing the target's movement speed by 70% (effect decays over
        3s) and for a short period of time grants a shield based on Max HP.
        Buying other advanced jungling equipment will disable this effect.
      </p>
    </div>
  );
  entry.starShardDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Star Shard</h3>
      </div>
      <p>
        +30 Magic Power
        <br />
        +15 Mana Regen
        <br />
        +15% Magic Lifesteal
      </p>
      <p>
        Unique:50% Damage to Monsters
        <br />
        Unique Passive-Recharge:Kill enemy hero to recover HP by 10%.
        <br />
        Unique Passive-Greed:Gain extra 25% EXP when jungling. After killing
        Creeps, recover HP by 4% and Mana by 10%.
        <br />
        Unique Passive-Gorge:Kill creeps to increase DMG by 0.6% Up to 15
        layers.
        <br />
        Unique Passive-:Makes the battle Spell 'Retribution' applicable to
        heroes, reducing the target's movement speed by 70% (effect decays over
        3s) and reducing target's Magic Defense. Buying other advanced jungling
        equipment will disable this effect.
      </p>
    </div>
  );
  entry.immortalityDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Immortality</h3>
      </div>
      <p>
        +800 HP
        <br />
        +40 Physical Defense
      </p>
      <p>
        Unique Passive-Immortal: Resurrect 2s upon death and get 15% HP and a
        shield that can absorb 300-1000 points of damage. (Scales with hero
        level) Shield lasts 3s. This effect has a CD of 180s.
      </p>
    </div>
  );
  entry.athenaSShieldDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Athena's Shield</h3>
      </div>
      <p>
        +900 HP
        <br />
        +62 Magic Defense
        <br />
        +20 HP Regen
      </p>
      <p>
        Unique Passive-Shield: Get a shield of 170-1150 points every 30s. Shield
        absorption amount grows as the match goes on.
      </p>
    </div>
  );
  entry.fleetingTimeDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Fleeting Time</h3>
      </div>
      <p>
        +70 Magic Power
        <br />
        +15% CD Reduction
      </p>
      <p>
        Unique Passive-Timestream: After an elimination or an assist, the CD of
        the hero's ultimate is immediately reduced by 30%.
      </p>
    </div>
  );
  entry.queenSWingsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Queen's Wings</h3>
      </div>
      <p>
        +15 Physical ATK
        <br />
        +1000 HP
        <br />
        +10% CD Reuction
      </p>
      <p>
        Unique Passive-Demonize:Reduces damage taken by 50% when health is less
        than 40% and increases your Physical Lifesteal by 30%. Lasts 5 seconds.
        This effect has a 50 second cooldown.
      </p>
    </div>
  );
  entry.twilightArmorDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Twilight Armor</h3>
      </div>
      <p>
        +1200 HP
        <br />
        +400 Mana
        <br />
        +20% Crit Damage Reduction
      </p>
      <p>
        Unique Passive-Defiance:Physical Damage taken will not exceed 900
        points. The CD is 4s.
      </p>
    </div>
  );
  entry.antiqueCuirassDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Antique Cuirass</h3>
      </div>
      <p>
        +920 HP
        <br />
        +54 Physical Defense
        <br />
        +30 HP Regen
      </p>
      <p>
        Unique Passive-Deter:When an enemy hero attacks, reduces Physical &
        Magic Attack by 6%. This effect lasts 2s. Stacks up to 3 times.
      </p>
    </div>
  );
  entry.cursedHelmetDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Cursed Helmet</h3>
      </div>
      <p>
        +1200 HP
        <br />
        +25 Magic Defense
      </p>
      <p>
        Unique Passive-Burning Soul:Deals 1.5% Magic Damage equal to the Max HP
        to nearby enemies per second. The damage will increase 50% to Minions.
      </p>
    </div>
  );
  entry.bruteForceBreastplateDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Brute Force Breastplate</h3>
      </div>
      <p>
        +7700 HP
        <br />
        +45 Physical Defense
      </p>
      <p>
        Unique Passive-Brute Force:Casting a skill or using Basic Attacks will
        increase movement Speed by 3%, Physical & Magic Defense by 4. Lasts 4s.
        Stacks up to 5 times.
      </p>
    </div>
  );
  entry.bladeArmorDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Blade Armor</h3>
      </div>
      <p>+90 Physical Defense</p>
      <p>
        Unique Passive-Vengeance:Deals 25% of opponent's physical attack as
        physical damage to an attacker when a basic attack is received.
      </p>
    </div>
  );
  entry.oracleDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Oracle</h3>
      </div>
      <p>
        +850 HP
        <br />
        +42 Magic Defense
        <br />
        +10% CD Reduction
      </p>
      <p>
        Unique Passive-Bless:Raises shield absorption and HP regeneration
        effects by 30%.
      </p>
    </div>
  );
  entry.guardianHelmetDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Guardian Helmet</h3>
      </div>
      <p>
        +1550 HP
        <br />
        +100 HP Regen
      </p>
      <p>
        Unique Passive-Recovery:Regenerates 1.5% of hero's Max HP. Eliminating
        enemy heroes raises regeneration rate by 0.4%, while assists raises the
        rate by 0.2% (includes eliminations and Assists prior to purchase), up
        to 3.5%. This effect wears off after 5s of the hero taking damage.
      </p>
    </div>
  );
  entry.thunderBeltDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Thunder Belt</h3>
      </div>
      <p>
        +800 HP
        <br />
        +30 Mana Regen
        <br />
        +10% CD Reduction
        <br />
        +40 Physical Defense
      </p>
      <p>
        Unique Passive-Thunderbolt:After using skills, next Basic Attack deals
        extra True Damage equal to 2% of the user's Max HP. The enemy target and
        their surrounding units all take this damage and are slowed for 1.5s.
        This effect cool down every 1.5s.
      </p>
    </div>
  );
  entry.dominanceIceDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Dominance Ice</h3>
      </div>
      <p>
        +500 Mana
        <br />
        +70 Physical Defense
        <br />
        +5% Movement SPD
      </p>
      <p>
        Unique:+10% CD Reduction
        <br />
        Unique Passive-Arctic Cold:Lowers movement speed 10% and lowers attack
        speed 30% for nearby enemy heroes.
      </p>
    </div>
  );
  entry.shadowMaskDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Shadow Mask</h3>
      </div>
      <p>
        +700 HP
        <br />
        +10% CD Reduction
      </p>
      <p>
        Unique:+25 Movement SPD
        <br />
        Active Skill-Conceal:Conceals you and your teammates nearby and
        increases Movement SPD by 15% for 5s. Dealing or taking damage will end
        the state. Cooldown: 80s. This effect prevents hero from benefiting from
        conceal and Encourage again in 80s.
        <br />
        Unique Passive-Devotion:Obtain 2 Exp and Gold every 4s. In the first 12
        minutes of the match. this equipment makes you gain nothing from Minions
        or Creeps if there are teammates without Roaming Equipment, or those
        with but have higer EXP or Gold than yours around you. They will share
        the whole EXP or Gold.
        <br />
        Unique Passive-Thriving: Gains extra 25% Gold and EXP with Assists. When
        your Gold Ranks the 5th in your team, increase Gold you gain to 20 per
        4s. When your EXP ranks the 5th in your team, increase EXP you gain to
        35 per 4s.
      </p>
    </div>
  );
  entry.courageMaskDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Courage Mask</h3>
      </div>
      <p>
        +700 HP
        <br />
        +10% CD Reduction
      </p>
      <p>
        Unique:+25 Movement SPD
        <br />
        Active Skill-Encourage:Increases Movement Speed of the hero and nearby
        allied heroes by 30%. Also increases Physical & Magic Attack by 20%.
        Last 3s. The CD is 80s. This effect prevents hero from benefiting from
        conceal and Encourage again in 80s.
        <br />
        Unique Passive-Bravery:Increases 10% of Physical & Magic Attack, 10% of
        Physical & Magic Defense and 50% of HP & Mana Regen for nearby allies.
        <br />
        Unique Passive-Devotion:Obtain 2 Exp and Gold every 4s. In the first 12
        minutes of the match. this equipment makes you gain nothing from Minions
        or Creeps if there are teammates without Roaming Equipment, or those
        with but have higer EXP or Gold than yours around you. They will share
        the whole EXP or Gold.
        <br />
        Unique Passive-Thriving: Gains extra 25% Gold and EXP with Assists. When
        your Gold Ranks the 5th in your team, increase Gold you gain to 20 per
        4s. When your EXP ranks the 5th in your team, increase EXP you gain to
        35 per 4s.
      </p>
    </div>
  );
  entry.roseGoldMeteorDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Rose Gold Meteor</h3>
      </div>
      <p>
        +60 Physical ATK
        <br />
        +30 Magic Defense
        <br />
        +5% Physical Lifesteal
      </p>
      <p>
        Unique Passive-Lifeline:Once the hero's HP falls below 30% they generate
        a shield that absorbs 510-1350 points of damage (increases with level)
        that lasts for 3 seconds. CD is 40 seconds.
      </p>
    </div>
  );
  entry.bloodlustAxeDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Bloodlust Axe</h3>
      </div>
      <p>
        +70 Physical Atk
        <br />
        10% CD Reduction
      </p>
      <p>Unique:+20% Spell Vamp</p>
    </div>
  );
  entry.hunterStrike = (
    <div>
      <div className="tooltip-header">
        <h3>Hunter Strike</h3>
      </div>
      <p>
        +80 Physical ATK
        <br />
        10% CD Reduction
      </p>
      <p>
        Unique:+15 Physical PEN
        <br />
        Unique Passive-Retribution:Deals damage to an enemy hero or Creep for 5
        times in a row and improves Movement Speed by 30% for 3s. This effect
        has a CD of 15s
      </p>
    </div>
  );
  entry.bladeOfDespairDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Blade of Despair</h3>
      </div>
      <p>
        +170 Phyical Atk
        <br />
        5% Movement SPD
      </p>
      <p>
        Unique Passive-Despair:Attacking enemy units that have HP below 50% will
        increase hero's Physical Attack by 25%. Lasts 2s. (Takes effect before
        damage is dealt)
      </p>
    </div>
  );
  entry.bladeOfTheHeptaseasDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Blade of the Heptaseas</h3>
      </div>
      <p>
        +65 Physical ATK
        <br />
        +250 HP
      </p>
      <p>
        Unique:+15 Physical PEN
        <br />
        Unique Passive-Ambush:if no damage is taken or dealt within 5s, the next
        Basic Attack will deal extra Physical Damage equal to 180 plus 100%
        Physical ATK.
      </p>
    </div>
  );
  entry.scarletPhantomDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Scarlet Phantom</h3>
      </div>
      <p>
        +30 Physical ATK
        <br />
        +20% Attack Speed
        <br />
        +25% Crit Chance
      </p>
      <p>
        Unique Passive-Frenzy:Crit hits increase the hero's ATK Speed by 30% and
        Crit Chance by 5%. Lasts 2s.
      </p>
    </div>
  );
  entry.windtalkerDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Windtalker</h3>
      </div>
      <p>
        +40% Attack Speed
        <br />
        +20 Movement SPD
        <br />
        +10% Crit Chance
      </p>
      <p>
        Unique Passive-Typhoon:Every 5-3s, Basic Attack hits 3 enemy units and
        deals 150-362 Magic Damage. The CD of this effect drops to the minimum
        when Crit Chances rises to 50%, While damage rises to the maximum when
        Attack SPD rises to 2.5. This Attack can cause Crit Damage. To minions,
        deals 200% Increased Damage.
        <br />
        Unique Passive-Active:Each time Typhoon is cast, one's movement speed
        will be increased 5% for a short time.
      </p>
    </div>
  );
  entry.berserkerSFuryDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Berserker's Fury</h3>
      </div>
      <p>
        +65 PhysicalATK
        <br />
        +25% Crit Chance
      </p>
      <p>
        Unique:+40% Crit Damage
        <br />
        Unique Passive-Doom:Crit hit will increase the hero's Physical Attack by
        5% for 2s.
      </p>
    </div>
  );
  entry.haasSClawsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Haas's Claws</h3>
      </div>
      <p>+70 Phyical Atk</p>
      <p>
        Unique:+20% Physical Lifesteal
        <br />
        Unique Passive-Insanity:When HP drop below 40%, the hero will receive
        extra 10% Physical Lifesteal.
      </p>
    </div>
  );
  entry.maleficRoarDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Malefic Roar</h3>
      </div>
      <p>+60 Physical ATK</p>
      <p>
        Unique:+40% Physical PEN
        <br />
        Unique Passive-Armor Buster:Basic Attack will ignore 20% of a Turret's
        Defense.
      </p>
    </div>
  );
  entry.endlessBattleDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Endless Battle</h3>
      </div>
      <p>
        +65 Physical Atk
        <br />
        +25 Mana Regen
        <br />
        +250 HP
        <br />
        +10% CD Reduction
        <br />
        +5% Movement SPD
        <br />
        +15% Physical Lifesteal
      </p>
      <p>
        Unique Passive-Divine Justice:After using a skill, the next Basic Attack
        will deal extra 70% of Physical Attack as True Damage. This effect has a
        cd of 1.5s.
        <br />
        Unique Passive-Chase Fate:When Divine justice's effect is triggered, it
        will increase the hero's movement speed 10%.
      </p>
    </div>
  );
  entry.demonHunterSwordDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Demon Hunter Sword</h3>
      </div>
      <p>
        +35 Physical ATK
        <br />
        +25% Attack Speed
      </p>
      <p>
        Unique Passive-Devour:Basic attacks will deal 9% of the target current
        HP as additional physical damage(up to 60 against creeps and minions).
        <br />
        Unique Passive-Devour:Each Basic Attack grants 4% Physical Lifesteal for
        3s. Stacks up to 5 times.
      </p>
    </div>
  );
  entry.goldenStaffDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Golden Staff</h3>
      </div>
      <p>
        +65 Physical ATK
        <br />
        +30% Attack Speed
      </p>
      <p>
        Unique Passive-Swift:Unable to increase critical chance. Every 1% of
        critical chance gained will increase attack speed by 1%.
        <br />
        Unique Passive-Endless Strike:Normal basic attacks add a stack of
        Endless Strike. After accumulating 2 stacks of Endless Strike, the
        effect of the next basic attack is triggered 3 times.
      </p>
    </div>
  );
  entry.corrosionScytheDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Corrosion Scythe</h3>
      </div>
      <p>
        +50 Physical ATK
        <br />
        +5% Movement SPD
        <br />
        +25% Attack Speed
      </p>
      <p>
        Unique Passive-Corrosion:Basic Attack has 50% probability of slowing the
        enemy unit by 30%. Long ranged Basic Attack only slows enemy by 15%.
        <br />
        Unique Passive-impulse:When each Basic Attack deals damage to enemies,
        increase Attack Speed by 8%. Stacks up to 5 times. Lasts 3s
        <br />
        Unique Passive-Armor Buster:Basic Attack will ignore 20% of a Turret's
        Defense.
      </p>
    </div>
  );
  entry.geniusWandDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Genius Wand</h3>
      </div>
      <p>
        +75 Magic Power
        <br />
        +5% Movement SPD
      </p>
      <p>
        Unique:+15 Magic PEN
        <br />
        Unique Passive-Magic:Dealing damage to enemy heroes will reduce 3-10
        points of their Magic Defense (Scales with level). This effect lasts 2s.
        Stacks up to 3 times.
      </p>
    </div>
  );
  entry.lightningTruncheonDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Lightning Truncheon</h3>
      </div>
      <p>
        +75 Magic Power
        <br />
        +300 Mana
        <br />
        +10% CD Reduction
      </p>
      <p>
        Unique Passive-Resonate:Every 6s, your next skill enchoes, dealing
        20-1000 Magic Damage (scales with the hero's Max Mana) to up to 3
        enemies.
      </p>
    </div>
  );
  entry.bloodWingsDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Blood Wings</h3>
      </div>
      <p>
        +150 Magic Power
        <br />
        +500 HP
      </p>
      <p>
        Unique Passive-Nirvana:Adds 1.5 HP for every 1 pt of magic power added.
      </p>
    </div>
  );
  entry.clockOfDestinyDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Clock of Destiny</h3>
      </div>
      <p>
        +60 Magic Power
        <br />
        +615 HP
        <br />
        +600 Mana
      </p>
      <p>
        Unique Passive-Time:Adds 30 HP and 5 magic attack every 30 seconds. Up
        to 10 times.
        <br />
        Unique Passive-Reincarnate:If Time reaches Max, then the hero will
        receive extra 5% Magic Attack and 300 Mana.
      </p>
    </div>
  );
  entry.calamityReaperDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Calamity Reaper</h3>
      </div>
      <p>
        +70 Magic Power
        <br />
        +100 Mana
        <br />
        +30 Mana Regen
        <br />
        +10% CD Reduction
      </p>
      <p>
        Unique Passive-Calamity:After using a skill, the next Basic Attack deals
        extra True Damage that equals to 120% Magic Attack. CD: 1.5s. Briefly
        raises Movement Speed by 10%.
      </p>
    </div>
  );
  entry.glowingWandDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Glowing Wand</h3>
      </div>
      <p>
        +75 Magic Power
        <br />
        +400 HP
        <br />
        +5% Movement SPD
      </p>
      <p>
        Unique Passive-Scorch:Skill Damage will burn the targets for 3s, dealing
        1% of the target's Max HP as Magic Damage per second (damaging the same
        target multiple times within a short duration can increase this damage
        to 2.5% at most), 10 damage minimum.
      </p>
    </div>
  );
  entry.iceQueenWandDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Ice Queen Wand</h3>
      </div>
      <p>
        +75 Magic Power
        <br />
        +10% Magic Lifesteal
        <br />
        +150 Mana
        <br />
        +7% Movement SPD
      </p>
      <p>
        Unique Passive-Ice Bound:Skills that deal damage to an enemy hero will
        slow them by 15%. This effect lasts 3s. Stacks up to 2 times
      </p>
    </div>
  );
  entry.concentratedEnergyDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Concentrated Energy</h3>
      </div>
      <p>
        +70 Magic Power
        <br />
        +700 HP
      </p>
      <p>
        Unique:+25% Magic Lifesteal
        <br />
        Unique Passive-Recharge:Kill enemy hero to recover HP by 10%.
      </p>
    </div>
  );
  entry.holyCrystalDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Holy Crystal</h3>
      </div>
      <p>+100 Magic Power</p>
      <p>
        Unique Passive-Mystery:Increases Magic Attack by 21%-35% (Scales with
        level).
      </p>
    </div>
  );
  entry.divineGlaiveDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Divine Glaive</h3>
      </div>
      <p>+65 Magic Power</p>
      <p>
        Unique:+40% Magic PEN
        <br />
        Unique Passive-Spellbreaker:When HP is higher than 70%. the unique bonus
        effect is increased by 30%.
      </p>
    </div>
  );
  entry.necklaceOfDuranceDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Necklace of Durance</h3>
      </div>
      <p>
        +65 Magic Power
        <br />
        +10% CD Reduction
        <br />
        +10% Magic Lifesteal
      </p>
      <p>
        Unique Passive-Life Drain:Reduces the regen effect of enemies with this
        skill damage by 50% for 3s.
      </p>
    </div>
  );
  entry.featherOfHeavenDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Feather of Heaven</h3>
      </div>
      <p>
        +65 Magic Power
        <br />
        +30% Attack Speed
        <br />
        +5% Movement SPD
      </p>
      <p>
        Unique Passive-Affiction:Basic Attack will deal 40% of the hero's Magic
        Attack as extra Magic Damage.
      </p>
    </div>
  );
  entry.winterTruncheonDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Winter Trucheon</h3>
      </div>
      <p>
        +60 Magic Power
        <br />
        +25 Physical Defense
        <br />
        +400 HP
      </p>
      <p>
        Active Skill-Frozen: Freeze upon using. The hero can't do anything but
        will be immune to all DMG and debuff. Last 2s, CD 100s
      </p>
    </div>
  );
  entry.enchantedTalismanDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Enchanted Talisman</h3>
      </div>
      <p>
        +50 Magic Power
        <br />
        +250 HP
        <br />
        +20% CD Reduction
      </p>
      <p>
        Unique Passive-Mana Spring:Regeneration 12% of Max Mana every 10s in
        total.
      </p>
    </div>
  );
  entry.purifyDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Purify</h3>
      </div>
      <h4>CD: 75.0</h4>
      <p>
        immediately remove all DEBUFFs. Gains immunity againstControl Effect for
        1.2s and increases Movement Speed by 30%.
      </p>
    </div>
  );
  entry.retributionDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Retribution</h3>
      </div>
      <h4>CD: 35.0</h4>
      <p>
        Deals 540(+60*Hero Level) points of True Damage to nearby Creeps or
        minions (damage increases with level). Passive: When carrying Jungling
        Equipment Items, decrease the damage taken from Creeps by 40%
        permanently.
      </p>
    </div>
  );
  entry.executeDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Execute</h3>
      </div>
      <h4>CD: 90.0</h4>
      <p>
        Deals 200(+20*Hero Level) and 10% of enemy's lost HP points of True
        Damage to the designated enemy (scales with levels). The damage ignores
        the shield effect and if the target is slain by Execute, its CD will
        reduce by 40%.
      </p>
    </div>
  );
  entry.inspireDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Inspire</h3>
      </div>
      <h4>CD: 60.0</h4>
      <p>
        Greatly enhances the hero for a short period of time. The next 8 basic
        attacks will ignore 8(+1*Hero Level) Physical Defense (increases with
        the hero's level) and increase your hero's attack speed by 55%. Last 5
        seconds.
      </p>
    </div>
  );
  entry.sprintDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Sprint</h3>
      </div>
      <h4>CD: 100.0</h4>
      <p>
        increases Movement Speed by 40% for 8s. The effect decays after 2s.
        After using Sprint, the hero then reduces time controlled and gains
        immunity against Slowing effect for 2s.
      </p>
    </div>
  );
  entry.revitalizeDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Revitalize</h3>
      </div>
      <h4>CD: 100.0</h4>
      <p>
        Summons a Healing Spring, where allies within the area of effect restore
        2.5% of their Max HP every 0.5s, and enhance the Shield and HP Regen
        Effect they receive by 25% (the enhancement is not stackable). Lasts 5s.
      </p>
    </div>
  );
  entry.aegisDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Aegis</h3>
      </div>
      <h4>CD: 90.0</h4>
      <p>
        Immediately generates a shield that absorbs 670(+50*Hero Level) points
        of damage (scales with hero level). Lasts 3s. The nearby allied hero
        with the lowest HP also gains a 50% shield.
      </p>
    </div>
  );
  entry.petrifyDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Petrify</h3>
      </div>
      <h4>CD: 90.0</h4>
      <p>
        Deals 100(+15*Hero Level) Magic Damage to surrounding enemies (increases
        with level) and petrifies targets for 0.7 seconds.
      </p>
    </div>
  );
  entry.flameshotDesc = (
    <div>
      <div className="tooltip-header">
        <h3>flameshot</h3>
      </div>
      <h4>CD: 50.0</h4>
      <p>
        Fires a Flamming Shot in a designated direction that can knock back the
        enemies in the front, dealing 400(+100%Total Magic Power)-640(+160%Total
        Magic Power) Magic Damage (scales with the range) to enemies hit and
        slowing them down by 60% for 1s.
      </p>
    </div>
  );
  entry.flickerDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Flicker</h3>
      </div>
      <h4>CD: 120.0</h4>
      <p>
        Teleport a certain distance in a specified direction. For 1 seconds
        after the teleport, increase 5(+1*Hero Level) points of Physical and
        Magic Defense.
      </p>
    </div>
  );
  entry.arrivalDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Arrival</h3>
      </div>
      <h4>CD: 75.0</h4>
      <p>
        Teleports to an allied turret (including destoyed ones) or minion after
        chanting for 3s, increasing the Movement SPD by 60^ for 3s (decay with
        the time). Meanwhile, enhances the next Basic Attack, dealing extra
        100%(+10*Hero Level) True Damage and slowing the target hit by 45% for
        1s. if it is interrupted, the CD will be reduced by 30s.
      </p>
    </div>
  );
  entry.vengeanceDesc = (
    <div>
      <div className="tooltip-header">
        <h3>Vengeance</h3>
      </div>
      <h4>CD: 70.0</h4>
      <p>
        in 3s, when receiving damage from an enemy unit, the Vengeance deals
        Magic Damage equal to 80+30% damage received to the inflictor. After
        that, regenerates HP equal to 50% of the damage dealt by the Vengeance.
      </p>
    </div>
  );
  return entry;
});

const initialState = {
  mage,
  filtered: mage,
};

const mageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MAGE:
      const { payload } = action;
      const filtered = _.filter(state.mage, (o) =>
        _.toLower(o.name).includes(_.toLower(payload))
      );
      return { ...state, filtered };
    default:
      return state;
  }
};

export default mageReducer;
