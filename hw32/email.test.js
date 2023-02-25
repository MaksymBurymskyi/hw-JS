let { assert } = chai;

describe("validateEmail", function () {
  describe("valid string", function () {
    it("not an empty string", function () {
      assert.equal(validateEmail(""), false);
    });
    it("typeof string", function () {
      assert.equal(validateEmail(222), false, "number error");
      assert.equal(validateEmail(true), false, "boolean error");
      assert.equal(validateEmail({}), false, "object error");
    });
    it("not all spaces", function () {
      assert.equal(validateEmail("     "), false);
    });
  });
  describe("valid data", function () {
    it("Don't have the @ or @ the first character", function () {
      assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
      assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
    });
    it("Does not have extra characters '@'", function () {
      assert.isFalse(
        validateEmail("email@g@mail.com"),
        "has more than one character @"
      );
    });
    const email = "em@g.cm";
    it("Valid length", function () {
      assert.isAtLeast(email.length, 7, "email length is too short");
    });
  });
  describe("valid delimeter", function () {
    it("Has no delimeter character '.'", function () {
      assert.isFalse(validateEmail("email@gmailcom"), "missing delimeter '.'");
    });
    it("Has incorrect delimeter character '.'", function () {
      assert.isFalse(
        validateEmail("e.mail@gmailcom"),
        "incorrect delimeter character '.', missing delimeter"
      );
      assert.isFalse(
        validateEmail("email.@gmailcom"),
        "incorrect delimeter character '.'"
      );
      assert.isFalse(
        validateEmail("email@.gmailcom"),
        "incorrect delimeter character '.'"
      );
    });
  });
});
