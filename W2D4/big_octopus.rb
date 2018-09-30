class Array
  def merge_sort
    return self if self.length <= 1

    midpoint = self.length / 2
    mid_value = self[midpoint]

    arr_no_mid = self[0...midpoint] + self[midpoint+1..-1]

    left = arr_no_mid.select {|el| el < mid_value}
    right = arr_no_mid.select {|el| el >= mid_value}

    left_sorted = left.merge_sort
    right_sorted = [mid_value] + right.merge_sort

    left_sorted.merge(right_sorted)
  end

  def merge(arr2)
    arr1 = self

    merged = []

    until arr1.empty? || arr2.empty?
      if arr1[0].length < arr2[0].length
        merged << arr1.shift
      else
        merged << arr2.shift
      end
    end

    merged + arr1 + arr2
  end
end

class Octopus
  attr_reader :fishes

  def initialize(fishes=[])
    @fishes = fishes
  end

end

class SluggishOctopus < Octopus

  def initialize(fishes=[])
    super
  end

  def find_longest
    fishes = self.fishes
    fishes.each_with_index do |fish1,idx1|
      bigger_fish = fish1
      fishes[idx1+1..-1].each do |fish2|
        bigger_fish = fish2 if fish2.length > fish1.length
      end
      return bigger_fish if fish1.length == bigger_fish.length
    end
    nil
  end

end

class DominantOctopus < Octopus
  def initialize(fishes=[])
    super
  end

  def find_longest
    self.fishes.merge_sort[-1]
  end

end

class CleverOctopus < Octopus
  def initialize(fishes=[])
    super
  end

  def find_longest
    longest = ""
    self.fishes.each do |fish|
      longest = fish if fish.length > longest.length
    end
    longest
  end
end

class DancingOctopus < Octopus
  TILES = %w(up, right-up, right, right-down, down, left-down, left, left-up)

  def initialize(fishes=[])
    super
  end

  def slow_dance(direction, tiles_array=TILES)
    tiles_array.each_with_index do |tile, idx|
      return idx if tile == direction
    end
    nil
  end

  def new_tiles_data_structure(tiles_array)
    tiles_hash = {}
    tiles_array.each_with_index do |tile, idx|
      tiles_hash[tile] = idx
    end
    tiles_hash
  end

  def fast_dance(direction, new_tiles_data_structure)
    new_tiles_data_structure[direction]
  end
end
