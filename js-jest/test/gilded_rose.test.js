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
  it("should return correct items for 30 days", function() {
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
    expect(gildedRoseOutput).toBe(expectedOutput());
  });
});
function expectedOutput() {
  return (
    "-------- day 0--------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest, 10, 20\n" +
    "Aged Brie, 2, 0\n" +
    "Elixir of the Mongoose, 5, 7\n" +
    "Sulfuras, Hand of Ragnaros, 0, 80\n" +
    "Sulfuras, Hand of Ragnaros, -1, 80\n" +
    "Backstage passes to a TAFKAL80ETC concert, 15, 20\n" +
    "Backstage passes to a TAFKAL80ETC concert, 10, 49\n" +
    "Backstage passes to a TAFKAL80ETC concert, 5, 49\n" +
    "-------- day 1--------\nname, sellIn, quality\n" +
    "+5 Dexterity Vest, 9, 19\n" +
    "Aged Brie, 1, 1\n" +
    "Elixir of the Mongoose, 4, 6\n" +
    "Sulfuras, Hand of Ragnaros, 0, 80\n" +
    "Sulfuras, Hand of Ragnaros, -1, 80\n" +
    "Backstage passes to a TAFKAL80ETC concert, 14, 21\n" +
    "Backstage passes to a TAFKAL80ETC concert, 9, 50\n" +
    "Backstage passes to a TAFKAL80ETC concert, 4, 50\n" +
    "-------- day 2--------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest, 8, 18\n" +
    "Aged Brie, 0, 2\n" +
    "Elixir of the Mongoose, 3, 5\n" +
    "Sulfuras, Hand of Ragnaros, 0, 80\n" +
    "Sulfuras, Hand of Ragnaros, -1, 80\n" +
    "Backstage passes to a TAFKAL80ETC concert, 13, 22\n" +
    "Backstage passes to a TAFKAL80ETC concert, 8, 50\n" +
    "Backstage passes to a TAFKAL80ETC concert, 3, 50\n" +
    "-------- day 3--------\n" +
    "name, sellIn, quality\n" +
    "+5 Dexterity Vest, 7, 17\n" +
    "Aged Brie, -1, 4\n" +
    "Elixir of the Mongoose, 2, 4\n" +
    "Sulfuras, Hand of Ragnaros, 0, 80\n" +
    "Sulfuras, Hand of Ragnaros, -1, 80\n" +
    "Backstage passes to a TAFKAL80ETC concert, 12, 23\n" +
    "Backstage passes to a TAFKAL80ETC concert, 7, 50\n" +
    "Backstage passes to a TAFKAL80ETC concert, 2, 50\n" +
    "-------- day 4--------\n" +
    "name, sellIn, quality\n+5 Dexterity Vest, 6, 16\nAged Brie, -2, 6\nElixir of the Mongoose, 1, 3\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 11, 24\nBackstage passes to a TAFKAL80ETC concert, 6, 50\nBackstage passes to a TAFKAL80ETC concert, 1, 50\n-------- day 5--------\nname, sellIn, quality\n+5 Dexterity Vest, 5, 15\nAged Brie, -3, 8\nElixir of the Mongoose, 0, 2\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 10, 25\nBackstage passes to a TAFKAL80ETC concert, 5, 50\nBackstage passes to a TAFKAL80ETC concert, 0, 50\n-------- day 6--------\nname, sellIn, quality\n+5 Dexterity Vest, 4, 14\nAged Brie, -4, 10\nElixir of the Mongoose, -1, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 9, 27\nBackstage passes to a TAFKAL80ETC concert, 4, 50\nBackstage passes to a TAFKAL80ETC concert, -1, 0\n-------- day 7--------\nname, sellIn, quality\n+5 Dexterity Vest, 3, 13\nAged Brie, -5, 12\nElixir of the Mongoose, -2, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 8, 29\nBackstage passes to a TAFKAL80ETC concert, 3, 50\nBackstage passes to a TAFKAL80ETC concert, -2, 0\n-------- day 8--------\nname, sellIn, quality\n+5 Dexterity Vest, 2, 12\nAged Brie, -6, 14\nElixir of the Mongoose, -3, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 7, 31\nBackstage passes to a TAFKAL80ETC concert, 2, 50\nBackstage passes to a TAFKAL80ETC concert, -3, 0\n-------- day 9--------\nname, sellIn, quality\n+5 Dexterity Vest, 1, 11\nAged Brie, -7, 16\nElixir of the Mongoose, -4, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 6, 33\nBackstage passes to a TAFKAL80ETC concert, 1, 50\nBackstage passes to a TAFKAL80ETC concert, -4, 0\n-------- day 10--------\nname, sellIn, quality\n+5 Dexterity Vest, 0, 10\nAged Brie, -8, 18\nElixir of the Mongoose, -5, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 5, 35\nBackstage passes to a TAFKAL80ETC concert, 0, 50\nBackstage passes to a TAFKAL80ETC concert, -5, 0\n-------- day 11--------\nname, sellIn, quality\n+5 Dexterity Vest, -1, 8\nAged Brie, -9, 20\nElixir of the Mongoose, -6, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 4, 38\nBackstage passes to a TAFKAL80ETC concert, -1, 0\nBackstage passes to a TAFKAL80ETC concert, -6, 0\n-------- day 12--------\nname, sellIn, quality\n+5 Dexterity Vest, -2, 6\nAged Brie, -10, 22\nElixir of the Mongoose, -7, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 3, 41\nBackstage passes to a TAFKAL80ETC concert, -2, 0\nBackstage passes to a TAFKAL80ETC concert, -7, 0\n-------- day 13--------\nname, sellIn, quality\n+5 Dexterity Vest, -3, 4\nAged Brie, -11, 24\nElixir of the Mongoose, -8, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 2, 44\nBackstage passes to a TAFKAL80ETC concert, -3, 0\nBackstage passes to a TAFKAL80ETC concert, -8, 0\n-------- day 14--------\nname, sellIn, quality\n+5 Dexterity Vest, -4, 2\nAged Brie, -12, 26\nElixir of the Mongoose, -9, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 1, 47\nBackstage passes to a TAFKAL80ETC concert, -4, 0\nBackstage passes to a TAFKAL80ETC concert, -9, 0\n-------- day 15--------\nname, sellIn, quality\n+5 Dexterity Vest, -5, 0\nAged Brie, -13, 28\nElixir of the Mongoose, -10, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, 0, 50\nBackstage passes to a TAFKAL80ETC concert, -5, 0\nBackstage passes to a TAFKAL80ETC concert, -10, 0\n-------- day 16--------\nname, sellIn, quality\n+5 Dexterity Vest, -6, 0\nAged Brie, -14, 30\nElixir of the Mongoose, -11, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -1, 0\nBackstage passes to a TAFKAL80ETC concert, -6, 0\nBackstage passes to a TAFKAL80ETC concert, -11, 0\n-------- day 17--------\nname, sellIn, quality\n+5 Dexterity Vest, -7, 0\nAged Brie, -15, 32\nElixir of the Mongoose, -12, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -2, 0\nBackstage passes to a TAFKAL80ETC concert, -7, 0\nBackstage passes to a TAFKAL80ETC concert, -12, 0\n-------- day 18--------\nname, sellIn, quality\n+5 Dexterity Vest, -8, 0\nAged Brie, -16, 34\nElixir of the Mongoose, -13, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -3, 0\nBackstage passes to a TAFKAL80ETC concert, -8, 0\nBackstage passes to a TAFKAL80ETC concert, -13, 0\n-------- day 19--------\nname, sellIn, quality\n+5 Dexterity Vest, -9, 0\nAged Brie, -17, 36\nElixir of the Mongoose, -14, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -4, 0\nBackstage passes to a TAFKAL80ETC concert, -9, 0\nBackstage passes to a TAFKAL80ETC concert, -14, 0\n-------- day 20--------\nname, sellIn, quality\n+5 Dexterity Vest, -10, 0\nAged Brie, -18, 38\nElixir of the Mongoose, -15, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -5, 0\nBackstage passes to a TAFKAL80ETC concert, -10, 0\nBackstage passes to a TAFKAL80ETC concert, -15, 0\n-------- day 21--------\nname, sellIn, quality\n+5 Dexterity Vest, -11, 0\nAged Brie, -19, 40\nElixir of the Mongoose, -16, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -6, 0\nBackstage passes to a TAFKAL80ETC concert, -11, 0\nBackstage passes to a TAFKAL80ETC concert, -16, 0\n-------- day 22--------\nname, sellIn, quality\n+5 Dexterity Vest, -12, 0\nAged Brie, -20, 42\nElixir of the Mongoose, -17, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -7, 0\nBackstage passes to a TAFKAL80ETC concert, -12, 0\nBackstage passes to a TAFKAL80ETC concert, -17, 0\n-------- day 23--------\nname, sellIn, quality\n+5 Dexterity Vest, -13, 0\nAged Brie, -21, 44\nElixir of the Mongoose, -18, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -8, 0\nBackstage passes to a TAFKAL80ETC concert, -13, 0\nBackstage passes to a TAFKAL80ETC concert, -18, 0\n-------- day 24--------\nname, sellIn, quality\n+5 Dexterity Vest, -14, 0\nAged Brie, -22, 46\nElixir of the Mongoose, -19, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -9, 0\nBackstage passes to a TAFKAL80ETC concert, -14, 0\nBackstage passes to a TAFKAL80ETC concert, -19, 0\n-------- day 25--------\nname, sellIn, quality\n+5 Dexterity Vest, -15, 0\nAged Brie, -23, 48\nElixir of the Mongoose, -20, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -10, 0\nBackstage passes to a TAFKAL80ETC concert, -15, 0\nBackstage passes to a TAFKAL80ETC concert, -20, 0\n-------- day 26--------\nname, sellIn, quality\n+5 Dexterity Vest, -16, 0\nAged Brie, -24, 50\nElixir of the Mongoose, -21, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -11, 0\nBackstage passes to a TAFKAL80ETC concert, -16, 0\nBackstage passes to a TAFKAL80ETC concert, -21, 0\n-------- day 27--------\nname, sellIn, quality\n+5 Dexterity Vest, -17, 0\nAged Brie, -25, 50\nElixir of the Mongoose, -22, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -12, 0\nBackstage passes to a TAFKAL80ETC concert, -17, 0\nBackstage passes to a TAFKAL80ETC concert, -22, 0\n-------- day 28--------\nname, sellIn, quality\n+5 Dexterity Vest, -18, 0\nAged Brie, -26, 50\nElixir of the Mongoose, -23, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -13, 0\nBackstage passes to a TAFKAL80ETC concert, -18, 0\nBackstage passes to a TAFKAL80ETC concert, -23, 0\n-------- day 29--------\nname, sellIn, quality\n+5 Dexterity Vest, -19, 0\nAged Brie, -27, 50\nElixir of the Mongoose, -24, 0\nSulfuras, Hand of Ragnaros, 0, 80\nSulfuras, Hand of Ragnaros, -1, 80\nBackstage passes to a TAFKAL80ETC concert, -14, 0\nBackstage passes to a TAFKAL80ETC concert, -19, 0\nBackstage passes to a TAFKAL80ETC concert, -24, 0\n"
  );
}
