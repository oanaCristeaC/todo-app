// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  "default e2e tests": browser => {
    browser
      .init()
      .pause(100000000)

      browser 
      .waitForElementVisible("#app")
      .assert.elementPresent("#nav")
      .assert.containsText("h1", "todos")
      .pause(100000000)
      //.end();
  },

  "example e2e test using a custom command": browser => {
    browser
      .openHomepage()
      .assert.elementPresent("#nav")
      .timeoutsImplicitWait(1000000, function() {
        console.log("result");
      })
      // sleep(10000000)
      //.end();
  }
};
