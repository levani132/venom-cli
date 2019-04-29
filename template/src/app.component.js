import {template, VenomComponent} from "venom-js";
import ArraySimpleComponent from "./testing-ground/array-simple.component.js";
import SimpleExampleComponent from "./testing-ground/simple-example.component.js";
import ArrayCounterComponent from "./testing-ground/array-counter.component.js";
import ObjectSimpleComponent from "./testing-ground/object-simple.component.js";
import ObjectNestedComponent from "./testing-ground/object-nested.component.js";
import ObjectArrayComponent from "./testing-ground/object-array.component.js";

export default class AppComponent extends VenomComponent {
  constructor() {
    super();
  }

  render() {
    return template`
      <div class="my-app">
        Hello, Venom!
      </div>
    `;
  }
}