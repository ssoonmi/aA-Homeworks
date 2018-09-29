class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    take_turn until game_over
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    require_sequence
    round_success_message unless game_over
    self.sequence_length += 1 unless game_over
  end

  def show_sequence
    system ('clear')
    add_random_color
    puts "Wait to enter sequence..."
    self.seq.each do |seq|
      puts "\n#{seq}"
      sleep(1)
    end
  end

  def require_sequence
    sleep(1.5)
    system ('clear')
    puts 'Enter sequence now (each color on a new line)'
    simon_seq = []
    self.sequence_length.downto(1) do
      simon_seq << gets.chomp
    end
    self.game_over = true if self.seq != simon_seq
  end

  def add_random_color
    self.seq += [COLORS.sample]
  end

  def round_success_message
    puts "\nYou finished Round #{sequence_length}!"
    sleep(3)
  end

  def game_over_message
    puts "\n\nYou lost.. You completed #{sequence_length - 1} rounds!"
  end

  def reset_game
    self.game_over = false
    self.seq = []
    self.sequence_length = 1
    puts "\nDo you want to play again? (y/n)"
    ask_reset = gets.chomp
    if ask_reset == 'y'
      play
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  game = Simon.new
  game.play
end
