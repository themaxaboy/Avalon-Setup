import { h, Component } from "preact";
import { route } from "preact-router";

import style from "./style";

export default class Home extends Component {
  state = {
    name: "",
    pin: ""
  };

  linkTo = path => () => {
    route(path);
  };

  goToLobby = name => this.linkTo("/lobby/" + window.btoa(name));

  handleChange = e => {
    if (e.target.getAttribute("type") == "name") {
      this.setState({ name: e.target.value });
    } else if (e.target.getAttribute("type") == "pin") {
      this.setState({ pin: e.target.value });
    }
  };

  render({}, { name, pin }) {
    return (
      <div>
        <section class="hero is-fullheight">
          <div class="hero-body">
            <div class="container has-text-centered">
              <div class="column is-half is-offset-one-quarter">
                <div class="box">
                  <h3 class="title">Avalon Everywhere</h3>
                  <p class="subtitle">Let's start!</p>
                  <figure class="avatar">
                    <img
                      class={style.corners}
                      src={
                        "https://api.adorable.io/avatars/200/" + name + ".png"
                      }
                    />
                  </figure>
                  <br />
                  <form>
                    <div class="field">
                      <div class="control has-icons-left">
                        <span class="icon is-small is-left">
                          <i class="fa fa-user" />
                        </span>
                        <input
                          class="input"
                          type="name"
                          placeholder="Your Name"
                          autofocus=""
                          value={name}
                          onInput={this.handleChange}
                        />
                      </div>
                    </div>
                    <div class="field">
                      <div class="control has-icons-left">
                        <span class="icon is-small is-left">
                          <i class="fa fa-key" />
                        </span>
                        <input
                          class="input"
                          type="pin"
                          placeholder="Your Pin"
                          value={pin}
                          onInput={this.handleChange}
                        />
                      </div>
                    </div>
                    <a onClick={this.goToLobby(name)} class="button">
                      &nbsp;Enter&nbsp;
                    </a>&nbsp;&nbsp;
                    <a class="button">Observe</a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
