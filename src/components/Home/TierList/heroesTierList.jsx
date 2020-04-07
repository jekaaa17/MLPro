import * as React from "react";
import { Component } from "react";
import "./heroesTierList.css";
import ReactTooltip from "react-tooltip";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

importAll(require.context("./assets", false, /.png/));

class HeroesTierList extends Component {
  render() {
    return (
      <div className="block">
        <ReactTooltip />
        <hr className="hr" />
        <div className="flex-box">
          <div className="top-arrow">
            <a href={"#cardlist"}>&#8679;</a>
          </div>
        </div>
        <h1 className="title">Heroes Tier List</h1>
        <div className="info">
          <p>
            In this Heroes Tier List we provide Hero rankings to give you the
            best heroes for the current meta.
          </p>
        </div>
        <table className="tier-list">
          <tbody>
            <tr>
              <th style={{ width: "9px" }}>Rank</th>
              <th>Marksman</th>
              <th>Assasin</th>
              <th>Mage</th>
              <th>Fighter</th>
              <th>Tank</th>
              <th>Support</th>
            </tr>
            <tr>
              <td>S</td>
              <td>
                <span data-tip="Karrie">
                  <img src={"./assets/Karrie.png"} />
                </span>
                <span data-tip="Granger">
                  <img src={"./assets/Granger.png"} />
                </span>
                <span data-tip="Bruno">
                  <img src={"./assets/Bruno.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Ling">
                  <img src={"./assets/Ling.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Pharsa">
                  <img src={"./assets/Pharsa.png"} />
                </span>
                <span data-tip="Harith">
                  <img src={"./assets/Harith.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Chou">
                  <img src={"./assets/Chou.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Grock">
                  <img src={"./assets/Grock.png"} />
                </span>
                <span data-tip="Khufra">
                  <img src={"./assets/Khufra.png"} />
                </span>
                <span data-tip="Uranus">
                  <img src={"./assets/Uranus.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Diggie">
                  <img src={"./assets/Diggie.png"} />
                </span>
              </td>
            </tr>
            <tr>
              <td>A+</td>
              <td>
                <span data-tip="Kimmy">
                  <img src={"./assets/Kimmy.png"} />
                </span>
                <span data-tip="Wanwan">
                  <img src={"./assets/Wanwan.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Helcurt">
                  <img src={"./assets/Helcurt.png"} />
                </span>
                <span data-tip="Gusion">
                  <img src={"./assets/Gusion.png"} />
                </span>
                <span data-tip="Selena">
                  <img src={"./assets/Selena.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Lunox">
                  <img src={"./assets/Lunox.png"} />
                </span>
                <span data-tip="Nana">
                  <img src={"./assets/Nana.png"} />
                </span>
                <span data-tip="Valir">
                  <img src={"./assets/Valir.png"} />
                </span>
                <span data-tip="Lylia">
                  <img src={"./assets/Lylia.png"} />
                </span>
                <span data-tip="Cecilion">
                  <img src={"./assets/Cecilion.png"} />
                </span>
                <span data-tip="Zhask">
                  <img src={"./assets/Zhask.png"} />
                </span>
                <span data-tip="Gord">
                  <img src={"./assets/Gord.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Thamuz">
                  <img src={"./assets/Thamuz.png"} />
                </span>
                <span data-tip="Badang">
                  <img src={"./assets/Badang.png"} />
                </span>
                <span data-tip="X.Borg">
                  <img src={"./assets/X.Borg.png"} />
                </span>
                <span data-tip="Jawhead">
                  <img src={"./assets/Jawhead.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Hylos">
                  <img src={"./assets/Hylos.png"} />
                </span>
                <span data-tip="Baxia">
                  <img src={"./assets/Baxia.png"} />
                </span>
                <span data-tip="Franco">
                  <img src={"./assets/Franco.png"} />
                </span>
                <span data-tip="Lolita">
                  <img src={"./assets/Lolita.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Carmilla">
                  <img src={"./assets/Carmilla.png"} />
                </span>
                <span data-tip="Kaja">
                  <img src={"./assets/Kaja.png"} />
                </span>
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>
                <span data-tip="Claude">
                  <img src={"./assets/Claude.png"} />
                </span>
                <span data-tip="Moskov">
                  <img src={"./assets/Moskov.png"} />
                </span>
                <span data-tip="Lesley">
                  <img src={"./assets/Lesley.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Lancelot">
                  <img src={"./assets/Lancelot.png"} />
                </span>
                <span data-tip="Hayabusa">
                  <img src={"./assets/Hayabusa.png"} />
                </span>
                <span data-tip="Fanny">
                  <img src={"./assets/Fanny.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Chang'e">
                  <img src={"./assets/Chang'e.png"} />
                </span>
                <span data-tip="Kagura">
                  <img src={"./assets/Kagura.png"} />
                </span>
                <span data-tip="Guinivere">
                  <img src={"./assets/Guinivere.png"} />
                </span>
                <span data-tip="Esmeralda">
                  <img src={"./assets/Esmeralda.png"} />
                </span>
                <span data-tip="Harley">
                  <img src={"./assets/Harley.png"} />
                </span>
                <span data-tip="Kadita">
                  <img src={"./assets/Kadita.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Leomord">
                  <img src={"./assets/Leomord.png"} />
                </span>
                <span data-tip="Aldous">
                  <img src={"./assets/Aldous.png"} />
                </span>
                <span data-tip="Masha">
                  <img src={"./assets/Masha.png"} />
                </span>
                <span data-tip="Silvanna">
                  <img src={"./assets/Silvanna.png"} />
                </span>
                <span data-tip="Terizla">
                  <img src={"./assets/Terizla.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Akai">
                  <img src={"./assets/Akai.png"} />
                </span>
                <span data-tip="Minotaur">
                  <img src={"./assets/Minotaur.png"} />
                </span>
                <span data-tip="Belerick">
                  <img src={"./assets/Belerick.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Estes">
                  <img src={"./assets/Estes.png"} />
                </span>
                <span data-tip="Angela">
                  <img src={"./assets/Angela.png"} />
                </span>
                <span data-tip="Faramis">
                  <img src={"./assets/Faramis.png"} />
                </span>
              </td>
            </tr>
            <tr>
              <td>B</td>
              <td>
                <span data-tip="Clint">
                  <img src={"./assets/Clint.png"} />
                </span>
                <span data-tip="Irithel">
                  <img src={"./assets/Irithel.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Natalia">
                  <img src={"./assets/Natalia.png"} />
                </span>
                <span data-tip="Hanzo">
                  <img src={"./assets/Hanzo.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Aurora">
                  <img src={"./assets/Aurora.png"} />
                </span>
                <span data-tip="Alice">
                  <img src={"./assets/Alice.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Ruby">
                  <img src={"./assets/Ruby.png"} />
                </span>
                <span data-tip="Lapu-Lapu">
                  <img src={"./assets/Lapu-Lapu.png"} />
                </span>
                <span data-tip="Dyroth">
                  <img src={"./assets/Dyroth.png"} />
                </span>
                <span data-tip="Roger">
                  <img src={"./assets/Roger.png"} />
                </span>
                <span data-tip="Minsitthar">
                  <img src={"./assets/Minsitthar.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Tigreal">
                  <img src={"./assets/Tigreal.png"} />
                </span>
                <span data-tip="Johnson">
                  <img src={"./assets/Johnson.png"} />
                </span>
                <span data-tip="Gatotkaca">
                  <img src={"./assets/Gatotkaca.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Rafaela">
                  <img src={"./assets/Rafaela.png"} />
                </span>
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                <span data-tip="Hanabi">
                  <img src={"./assets/Hanabi.png"} />
                </span>
                <span data-tip="Miya">
                  <img src={"./assets/Miya.png"} />
                </span>
                <span data-tip="Yi Sun-shin">
                  <img src={"./assets/Yi Sun-shin.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Saber">
                  <img src={"./assets/Saber.png"} />
                </span>
                <span data-tip="Karina">
                  <img src={"./assets/Karina.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Odette">
                  <img src={"./assets/Odette.png"} />
                </span>
                <span data-tip="Eudora">
                  <img src={"./assets/Eudora.png"} />
                </span>
                <span data-tip="Cyclops">
                  <img src={"./assets/Cyclops.png"} />
                </span>
                <span data-tip="Vexana">
                  <img src={"./assets/Vexana.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Sun">
                  <img src={"./assets/Sun.png"} />
                </span>
                <span data-tip="Alucard">
                  <img src={"./assets/Alucard.png"} />
                </span>
                <span data-tip="Martis">
                  <img src={"./assets/Martis.png"} />
                </span>
                <span data-tip="Bane">
                  <img src={"./assets/Bane.png"} />
                </span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>D</td>
              <td>
                <span data-tip="Layla">
                  <img src={"./assets/Layla.png"} />
                </span>
              </td>
              <td></td>
              <td>
                <span data-tip="Vale">
                  <img src={"./assets/Vale.png"} />
                </span>
              </td>
              <td>
                <span data-tip="Zilong">
                  <img src={"./assets/Zilong.png"} />
                </span>
                <span data-tip="Balmond">
                  <img src={"./assets/Balmond.png"} />
                </span>
                <span data-tip="Freya">
                  <img src={"./assets/Freya.png"} />
                </span>
                <span data-tip="Argus">
                  <img src={"./assets/Argus.png"} />
                </span>
                <span data-tip="Alpha">
                  <img src={"./assets/Alpha.png"} />
                </span>
                <span data-tip="Hilda">
                  <img src={"./assets/Hilda.png"} />
                </span>
              </td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className="criteria-container">
          <div className="tier-list-card">
            <div className="box-header">
              <p> Rank Criteria </p>
            </div>
            <p>
              <b>S</b>, Excellent Heroes. They are heroes which has the highest
              winrate compared to others. that is the reason these heroes are
              always banned or first picked.
            </p>
            <p>
              <b>A+</b>, Strong Heroes. These are powerful and mostly picked
              heroes because they are not in ban list. These heroes sometimes
              effective to counter top tier heroes.
            </p>
            <p>
              <b>A</b>, Good Heroes. These heroes are picked sometimes by
              players and they are not in the current meta (popular/strong).
            </p>
            <p>
              <b>B</b>, Average Heroes. These heroes are not really effective in
              the game but it can be helpful sometimes with good gameplay.
            </p>
            <p>
              <b>C</b>, Bad Heroes. These are heroes that gives little impact to
              game.
            </p>
            <p>
              <b>D</b>, Poor Heroes. These are the most bottom tier heroes which
              almost has never been picked and perform poorly in game.
            </p>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default HeroesTierList;
