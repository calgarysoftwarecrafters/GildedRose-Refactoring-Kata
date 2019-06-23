require File.join(File.dirname(__FILE__), 'gilded_rose')
require 'test/unit'

class TestUntitled < Test::Unit::TestCase
  @@sell_in = 2
  @@quality = 10
  @@backstage_sell_in = 11

  @@test_item_name = "Cheese"
  @@test_item = Item.new(@@test_item_name, @@sell_in, @@quality)

  @@aged_brie_name = "Aged Brie"
  @@aged_brie = Item.new(@@aged_brie_name, @@sell_in, @@quality)

  @@sulfuras_name = "Sulfuras, Hand of Ragnaros"
  @@sulfuras = Item.new(@@sulfuras_name, @@sell_in, @@quality)

  @@backstage_passes_name = "Backstage passes to a TAFKAL80ETC concert"
  @@backstage_passes = Item.new(@@backstage_passes_name, @@backstage_sell_in, @@quality)


  @@gilded_rose = GildedRose.new([@@test_item])

  def setup
    @@test_item = Item.new(@@test_item_name, @@sell_in, @@quality)
    @@aged_brie = Item.new(@@aged_brie_name, @@sell_in, @@quality)
    @@sulfuras = Item.new(@@sulfuras_name, @@sell_in, @@quality)
    @@gilded_rose = GildedRose.new([@@test_item, @@aged_brie, @@sulfuras])
  end

  def test_will_decrease_sell_in_and_quality_with_each_update
    days_on_shelf = 1
    quality_change = days_on_shelf
    expected_values = Item.new(@@test_item_name, @@sell_in - days_on_shelf, @@quality - quality_change)

    check_quality_and_sell_in_update_properly_over_time(@@test_item, days_on_shelf, expected_values)
  end

  def test_will_decrease_quality_twice_as_fast_once_sel_in_date_has_passed
    days_on_shelf = 3
    quality_change = calculate_quality_change_after_sell_in_date(days_on_shelf, @@test_item.sell_in)
    expected_values = Item.new(@@test_item_name, @@sell_in - days_on_shelf, @@quality - quality_change)

    check_quality_and_sell_in_update_properly_over_time(@@test_item, days_on_shelf, expected_values)
  end

  def test_will_not_decrease_quality_below_zero
    days_on_shelf = 25
    expected_values = Item.new(@@test_item_name, @@sell_in - days_on_shelf, 0)

    check_quality_and_sell_in_update_properly_over_time(@@test_item, days_on_shelf, expected_values)
  end

  def test_will_increase_sell_in_and_quality_of_aged_brie_with_each_day
    days_on_shelf = 1
    quality_change = days_on_shelf
    expected_values = Item.new(@@aged_brie_name, @@sell_in - days_on_shelf, @@quality + quality_change)

    check_quality_and_sell_in_update_properly_over_time(@@aged_brie, days_on_shelf, expected_values)
  end


  def test_will_increase_quality_of_aged_brie_twice_as_fast_once_sell_in_date_has_passed
    days_on_shelf = 3
    quality_change = calculate_quality_change_after_sell_in_date(days_on_shelf, @@sell_in)
    expected_values = Item.new(@@aged_brie_name, @@sell_in - days_on_shelf, @@quality + quality_change)

    check_quality_and_sell_in_update_properly_over_time(@@aged_brie, days_on_shelf, expected_values)
  end


  def test_will_not_increase_quality_of_aged_brie_above_fifty
    days_on_shelf = 25
    expected_values = Item.new(@@aged_brie_name, @@sell_in - days_on_shelf, 50)

    check_quality_and_sell_in_update_properly_over_time(@@aged_brie, days_on_shelf, expected_values)
  end

  def test_will_not_decrease_sulfuras_quality
    days_on_shelf = 25
    expected_values = Item.new(@@sulfuras_name, @@sell_in, @@quality)

    check_quality_and_sell_in_update_properly_over_time(@@sulfuras, days_on_shelf, expected_values)
  end

  def test_will_increase_quality_of_backstage_passes_as_concert_approaches
    create_gilded_rose_with_backstage_passes()

    days_on_shelf = 1
    quality_change = days_on_shelf
    expected_values = Item.new(@@backstage_passes_name, @@backstage_sell_in - days_on_shelf, @@quality + quality_change)

    check_quality_and_sell_in_update_properly_over_time(@@backstage_passes, days_on_shelf, expected_values)
  end

  def test_willIncreaseQualityOfBackstagePassesby2ifConcertIsLessThan10DaysAway
    create_gilded_rose_with_backstage_passes()

    days_on_shelf = 2
    quality_change = 3
    expected_values = Item.new(@@backstage_passes_name, @@backstage_sell_in - days_on_shelf, @@quality + quality_change)

    check_quality_and_sell_in_update_properly_over_time(@@backstage_passes, days_on_shelf, expected_values)
  end

  def test_willIncreaseQualityOfBackstagePassesby3ifConcertIsLessThan5DaysAway
    create_gilded_rose_with_backstage_passes()

    days_on_shelf = 7
    quality_change = 14
    expected_values = Item.new(@@backstage_passes_name, @@backstage_sell_in - days_on_shelf, @@quality + quality_change)

    check_quality_and_sell_in_update_properly_over_time(@@backstage_passes, days_on_shelf, expected_values)
  end

  def test_willDropQualityOfBackstagePassesTo0ifConcertHasHappened
    create_gilded_rose_with_backstage_passes()

    days_on_shelf = 25
    expected_values = Item.new(@@backstage_passes_name, @@backstage_sell_in - days_on_shelf, 0)

    check_quality_and_sell_in_update_properly_over_time(@@backstage_passes, days_on_shelf, expected_values)
  end

  def create_gilded_rose_with_backstage_passes()
    @@backstage_passes = Item.new(@@backstage_passes_name, @@backstage_sell_in, @@quality)
    @@gilded_rose = GildedRose.new([@@backstage_passes])
  end

  def check_quality_and_sell_in_update_properly_over_time(item_from_gilded_rose, days_on_shelf, item_with_expected_values)

    simulate_days_passing(days_on_shelf)

    assert_equal item_with_expected_values.name, item_from_gilded_rose.name, "Object names don't match"
    assert_equal item_with_expected_values.sell_in, item_from_gilded_rose.sell_in, "Sell in dates don't match"
    assert_equal item_with_expected_values.quality, item_from_gilded_rose.quality, "Quality values don't match"
  end

  def calculate_quality_change_after_sell_in_date(days_on_shelf, sell_in)
    return sell_in + ((days_on_shelf - sell_in) * 2)
  end

  def simulate_days_passing(number_of_days)
    for x in 1..number_of_days
      @@gilded_rose.update_quality
    end
  end

end