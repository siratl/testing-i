const { enhancer } = require("./enhancer");

describe("enhancer", () => {
  describe("repair()", () => {
    it("sets durability to 100", () => {
      expect(enhancer.repair({ durability: 80 }).durability).toBe(100);
    });
  });

  describe("fail()", () => {
    it("checks if durability > 25", () => {
      expect(() => {
        enhancer.fail({ durability: 26 }).durability;
      }).toThrow();
    });

    it("checks if durability is between 0 - 15", () => {
      expect(enhancer.fail({ enhancement: 10, durability: 20 })).toEqual({
        enhancement: 10,
        durability: 15
      });
    });

    it("checks if durability is between 10 - 14", () => {
      expect(() => {
        enhancer.fail({ durability: 9 }).durability;
      }).toThrow();
    });

    it("subtracts 10 from durability", () => {
      expect(enhancer.fail({ durability: 20 })).toEqual({
        durability: 10
      });
    });

    it("Checks name if enhancement is greater than 16", () => {
      expect(enhancer.fail({ enhancement: 16, displayName: "" })).toEqual({
        enhancement: 15,
        displayName: ""
      });
    });
  });

  describe("success()", () => {
    it("checks if enhancement is less than or equal to 16", () => {
      expect(enhancer.success({ enhancement: 15 }).enhancement).toBe(15);
    });

    it("adds 1 to 16", () => {
      expect(
        enhancer.success({ enhancement: 16, displayName: "banana" })
      ).toEqual({
        enhancement: 17,
        displayName: "PRI"
      });
    });

    it("adds 1 to 17", () => {
      expect(enhancer.success({ enhancement: 17, displayName: "" })).toEqual({
        enhancement: 18,
        displayName: "DUO"
      });
    });

    it("adds 1 to 18", () => {
      expect(enhancer.success({ enhancement: 18, displayName: "" })).toEqual({
        enhancement: 19,
        displayName: "TRI"
      });
    });

    it("adds 1 to 19", () => {
      expect(enhancer.success({ enhancement: 19, displayName: "" })).toEqual({
        enhancement: 20,
        displayName: "TET"
      });
    });

    it("keeps enhancement the same", () => {
      expect(enhancer.success({ enhancement: 20, displayName: "" })).toEqual({
        enhancement: 20,
        displayName: "PEN"
      });
    });

    it("checks if the item is an object", () => {
      expect(enhancer.success(typeof {})).toBe("object");
    });
  });
});