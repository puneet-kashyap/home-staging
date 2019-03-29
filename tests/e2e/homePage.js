const nightwatch = require("nightwatch");

describe("Home page => ", () => {
  before((client, done) => {
    done();
  });

  after((client, done) => {
    client.end(() => {
      done();
    });
  });

  afterEach((client, done) => {
    done();
  });

  beforeEach((client, done) => {
    done();
  });

  it("Home page displayed", client => {
    client
      .url("https://addglamour.ca")
      .expect.element("body")
      .to.be.present.before(5000);
  });
});
