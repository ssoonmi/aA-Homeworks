require 'byebug'

class Board
  attr_accessor :cups
  attr_reader :name1, :name2

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2

    @cups = place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    cups = Array.new(14) {[]}
    cups.map.with_index do |cup,idx|
      if [6,13].include?(idx)
        cup
      else
        cup = [:stone,:stone,:stone,:stone]
      end
    end
  end

  def valid_move?(start_pos)
    unless ((0..5).to_a + (7..12).to_a).include?(start_pos)
      raise 'Invalid starting cup'
    end
    raise 'Starting cup is empty' if self.cups[start_pos].empty?
  end

  def make_move(start_pos, current_player_name)
    num_stones = self.cups[start_pos].length
    self.cups[start_pos] = []
    player_cup_idx = 6
    if current_player_name != self.name1
      player_cup_idx = 13
    end
    next_pos = start_pos + 1
    while num_stones > 0
      next_pos = 0 if next_pos > 13 && player_cup_idx == 13
      next_pos = 0 if next_pos > 12 && player_cup_idx != 13
      next_pos += 1 if next_pos == 6 && player_cup_idx != 6
      self.cups[next_pos] += [:stone]
      next_pos += 1
      num_stones -= 1
    end
    render
    next_turn(next_pos - 1)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if [6,13].include?(ending_cup_idx)
      :prompt
    elsif self.cups[ending_cup_idx].length == 1
      :switch
    else
      ending_cup_idx
    end
  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    (0..5).to_a.all? { |idx| self.cups[idx].empty? } ||
      (7..12).to_a.all? {|idx| self.cups[idx].empty?}
  end

  def winner
    return self.name1 if cups[6].length > cups[13].length
    return self.name2 if cups[6].length < cups[13].length
    :draw
  end
end
