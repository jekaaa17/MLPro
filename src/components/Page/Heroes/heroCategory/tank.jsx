import React, { Component } from "react";
import Field from "../field.jsx";
import "../heroesPage.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { searchTank } from "../../../../actions/index.jsx";

class Tank extends Component {
  render() {
    return (
      <div>
        <div className="searchbox-layout">
          <div id="cover">
            <form>
              <div className="tb">
                <div className="td">
                  <input
                    type="text"
                    onChange={(e) => this.props.searchTank(e.target.value)}
                    placeholder="Heroes Search"
                  />
                </div>
                <div className="td" id="s-cover">
                  <button className="search-button" type="submit">
                    <div id="s-circle"></div>
                    <span></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="content-container">
          <Field
            heroesCard={this.props.data}
            heroesCardCategory={this.props.data.tank}
          />
        </div>
      </div>
    );
  }
}

function tank() {}

function mapStateToProps(state) {
  return { data: state.tank };
}

//action creator
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ searchTank }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Tank);
