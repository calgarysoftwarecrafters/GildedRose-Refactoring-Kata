import { Shop, Item } from "../src/gilded_rose.js";

function printGildedRoseItemsOnDay(day, items) {
  let result = "-------- day " + day + "--------\n";
  result = result.concat("name, sellIn, quality\n");
  for (var i = 0; i < items.length; i++) {
    result = result.concat(
      String(items[i].name).concat(", ") +
        items[i].sellIn +
        ", " +
        items[i].quality +
        "\n"
    );
  }
  return result;
}

describe("Gilded Rose", function() {
  it("should foo", function() {
    const gildedRose = new Shop([
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)
    ]);

    let numDays = 30;
    let gildedRoseOutput = "";
    for (var day in [...Array(numDays).keys()]) {
      gildedRoseOutput = gildedRoseOutput.concat(
        printGildedRoseItemsOnDay(day, gildedRose.items)
      );
      gildedRose.updateQuality();
    }
    expect(gildedRoseOutput).toBe("day0");
  });
});
