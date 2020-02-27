import * as React from "react";
import { Component } from "react";
import "./heroesTierList.css";

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
      <div className="body">
        <h2 className="title">Heroes Tier List</h2>
        <table>
          <tbody>
            <tr>
              <th style={{ width: "15px" }}>Rating</th>
              <th style={{ width: "180px" }}>Marksman</th>
              <th style={{ width: "180px" }}>Assasin</th>
              <th style={{ width: "180px" }}>Mage</th>
              <th style={{ width: "180px" }}>Fighter</th>
              <th style={{ width: "180px" }}>Tank</th>
              <th style={{ width: "180px" }}>Support</th>
            </tr>
            <tr>
              <td>S+</td>
              <td>
                <img src={"./assets/Karrie.png"} />
                <img src={"./assets/Granger.png"} />
                <img src={"./assets/Bruno.png"} />
              </td>
              <td>
                <img src={"./assets/Ling.png"} />
              </td>
              <td>
                <img src={"./assets/Pharsa.png"} />
                <img src={"./assets/Harith.png"} />
              </td>
            </tr>
            <tr>
              <td>S</td>
              <td>
                <img src={"./assets/Kimmy.png"} />
                <img src={"./assets/Wanwan.png"} />
              </td>
              <td>
                <img src={"./assets/Helcurt.png"} />
                <img src={"./assets/Gusion.png"} />
                <img src={"./assets/Selena.png"} />
              </td>
              <td>
              <img src={"./assets/Lunox.png"} />
              <img src={"./assets/Valir.png"} />
              <img src={"./assets/Lylia.png"} />
              <img src={"./assets/Cecilion.png"} />
              <img src={"./assets/Zhask.png"} />
              <img src={"./assets/Gord.png"} />
              </td>
            </tr>
            <tr>
              <td>A+</td>
              <td>
                <img src={"./assets/Claude.png"} />
                <img src={"./assets/Moskov.png"} />
                <img src={"./assets/Lesley.png"} />
              </td>
              <td>
                <img src={"./assets/Lancelot.png"} />
                <img src={"./assets/Hayabusa.png"} />
                <img src={"./assets/Fanny.png"} />
              </td>
              <td>
                <img src={"./assets/Chang'e.png"} />
                <img src={"./assets/Kagura.png"} />
                <img src={"./assets/Esmeralda.png"} />
                <img src={"./assets/Harley.png"} />
                <img src={"./assets/Kadita.png"} />
              </td>
            </tr>
            <tr>
              <td>A</td>
              <td>
                <img src={"./assets/Clint.png"} />
                <img src={"./assets/Irithel.png"} />
              </td>
              <td>
                <img src={"./assets/Natalia.png"} />
                <img src={"./assets/Hanzo.png"} />
              </td>
              <td>
              <img src={"./assets/Aurora.png"} />
              <img src={"./assets/Nana.png"} />
              <img src={"./assets/Alice.png"} />
              </td>

            </tr>
            <tr>
              <td>B</td>
              <td>
                <img src={"./assets/Hanabi.png"} />
                <img src={"./assets/Miya.png"} />
                <img src={"./assets/Yi Sun-shin.png"} />
              </td>
              <td>
                <img src={"./assets/Saber.png"} />
                <img src={"./assets/Karina.png"} />
              </td>
              <td>
              <img src={"./assets/Odette.png"} />
              <img src={"./assets/Eudora.png"} />
              <img src={"./assets/Cyclops.png"} />
              <img src={"./assets/Vexana.png"} />
              </td>
            </tr>
            <tr>
              <td>C</td>
              <td>
                <img src={"./assets/Layla.png"} />
                <img src={"./assets/Dyroth.png"} />
                <img src={"./assets/Dyroth.png"} />
                <img src={"./assets/Dyroth.png"} />
                <img src={"./assets/Dyroth.png"} />
              </td>
              <td></td>
              <td>
                <img src={"./assets/Vale.png"} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default HeroesTierList;
