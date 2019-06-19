package org.css.gildedroserefactor;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class GildedRoseTest {

    private final String testItemName = "Cheese";
    private final String agedBrieName = "Aged Brie";
    private final String sulfurasName = "Sulfuras, Hand of Ragnaros";
    private final String backstagePassesName = "Backstage passes to a TAFKAL80ETC concert";
    private final int sellIn = 2;
    private final int backstageSellIn = 11;
    private final int quality = 10;

    private Item testItem;
    private Item agedBrie;
    private Item sulfuras;
    private Item backstagePasses;
    private GildedRose gildedRose;

    @BeforeEach
    public void setUp() {
        testItem = new Item(testItemName, sellIn, quality);
        agedBrie = new Item(agedBrieName, sellIn, quality);
        sulfuras = new Item(sulfurasName, sellIn, quality);

        gildedRose = new GildedRose(new Item[]{testItem, agedBrie, sulfuras});
    }

    @Test
    public void willDecreaseSellInAndQualityWithEachUpdate() {
        int daysOnShelf = 1;
        int qualityChange = daysOnShelf;
        Item expectedValues = new Item(testItemName, sellIn - daysOnShelf, quality - qualityChange);

        testQualityAndSellInUpdateProperlyOverTime(testItem, daysOnShelf, expectedValues);
    }

    @Test
    public void willDecreaseQualityTwiceAsFastOnceSellInDateHasPassed() {
        int daysOnShelf = 3;
        int qualityChange = calculateQualityChangeAfterSellInDate(daysOnShelf, testItem.sellIn);
        Item expectedValues = new Item(testItemName, sellIn - daysOnShelf, quality - qualityChange);

        testQualityAndSellInUpdateProperlyOverTime(testItem, daysOnShelf, expectedValues);
    }

    @Test
    public void willNotDecreaseQualityBelowZero() {
        int daysOnShelf = 25;
        Item expectedValues = new Item(testItemName, sellIn - daysOnShelf, 0);

        testQualityAndSellInUpdateProperlyOverTime(testItem, daysOnShelf, expectedValues);
    }

    @Test
    public void willIncreaseSellInAndQualityOfAgedBrieWithEachDay() {
        int daysOnShelf = 1;
        int qualityChange = daysOnShelf;
        Item expectedValues = new Item(agedBrieName, sellIn - daysOnShelf, quality + qualityChange);

        testQualityAndSellInUpdateProperlyOverTime(agedBrie, daysOnShelf, expectedValues);
    }

    @Test
    public void willIncreaseQualityOfAgedBrieTwiceAsFastOnceSellInDateHasPassed() {
        int daysOnShelf = 3;
        int qualityChange = calculateQualityChangeAfterSellInDate(daysOnShelf, agedBrie.sellIn);
        Item expectedValues = new Item(agedBrieName, sellIn - daysOnShelf, quality + qualityChange);

        testQualityAndSellInUpdateProperlyOverTime(agedBrie, daysOnShelf, expectedValues);
    }

    @Test
    public void willNotIncreaseQualityOfAgedBrieAboveFifty() {
        int daysOnShelf = 25;
        Item expectedItem = new Item(agedBrieName, sellIn - daysOnShelf, 50);

        testQualityAndSellInUpdateProperlyOverTime(agedBrie, daysOnShelf, expectedItem);
    }

    @Test
    public void willNotDecreaseSulfurasQuality() {
        int daysOnShelf = 25;
        Item expectedValues = new Item(sulfurasName, sellIn, quality);

        testQualityAndSellInUpdateProperlyOverTime(sulfuras, daysOnShelf, expectedValues);
    }

    @Test
    public void willIncreaseQualityOfBackstagePassesAsConcertApproaches() {
        creategildedRoseWithBackstagePasses();

        int daysOnShelf = 1;
        int qualityChange = daysOnShelf;
        Item expectedValues = new Item(backstagePassesName, backstageSellIn - daysOnShelf, quality + qualityChange);

        testQualityAndSellInUpdateProperlyOverTime(backstagePasses, daysOnShelf, expectedValues);
    }

    @Test
    public void willIncreaseQualityOfBackstagePassesby2ifConcertIsLessThan10DaysAway() {
        creategildedRoseWithBackstagePasses();

        int daysOnShelf = 2;
        int qualityChange = 3;
        Item expectedValues = new Item(backstagePassesName, backstageSellIn - daysOnShelf, quality + qualityChange);

        testQualityAndSellInUpdateProperlyOverTime(backstagePasses, daysOnShelf, expectedValues);
    }

    @Test
    public void willIncreaseQualityOfBackstagePassesby3ifConcertIsLessThan5DaysAway() {
        creategildedRoseWithBackstagePasses();

        int daysOnShelf = 7;
        int qualityChange = 14;
        Item expectedValues = new Item(backstagePassesName, backstageSellIn - daysOnShelf, quality + qualityChange);

        testQualityAndSellInUpdateProperlyOverTime(backstagePasses, daysOnShelf, expectedValues);
    }

    @Test
    public void willDropQualityOfBackstagePassesTo0ifConcertHasHappened() {
        creategildedRoseWithBackstagePasses();

        int daysOnShelf = 25;
        Item expectedValues = new Item(backstagePassesName, backstageSellIn - daysOnShelf, 0);

        testQualityAndSellInUpdateProperlyOverTime(backstagePasses, daysOnShelf, expectedValues);
    }

    private void creategildedRoseWithBackstagePasses() {
        backstagePasses = new Item(backstagePassesName, backstageSellIn, quality);
        gildedRose = new GildedRose(new Item[]{backstagePasses});
    }

    private void simulateDaysPassing(int numberOfDays) {
        for (int i = 0; i < numberOfDays; i++) {
            gildedRose.updateQuality();
        }
    }

    private int calculateQualityChangeAfterSellInDate(int daysOnShelf, int sellIn) {
        return sellIn + ((daysOnShelf - sellIn) * 2);
    }

    private void testQualityAndSellInUpdateProperlyOverTime(Item itemFromGildedRose, int daysOnShelf, Item itemWithExpectedValues) {
        simulateDaysPassing(daysOnShelf);

        assertEquals(itemWithExpectedValues.name, itemFromGildedRose.name);
        assertEquals(itemWithExpectedValues.sellIn, itemFromGildedRose.sellIn);
        assertEquals(itemWithExpectedValues.quality, itemFromGildedRose.quality);
    }

}