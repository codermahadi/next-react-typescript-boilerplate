import { shallow } from "enzyme";
import React from "react";

import App from "../pages/index";

describe("With Enzyme", () => {
  it('App shows "A simple example repo" in a <p> tag', () => {
    const app = shallow(<App />);
    expect(app.find("p").text()).toBe("Add your react component here as Child component.");
  });
});
