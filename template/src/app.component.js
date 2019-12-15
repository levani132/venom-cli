import {template, VenomComponent} from "venom-js";

export default class AppComponent extends VenomComponent {
  render() {
    return template`
      <div class="my-app">
        Hello, Venom!
      </div>
    `;
  }
}