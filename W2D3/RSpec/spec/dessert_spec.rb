require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double('chef', :titleize => "chef") }
  subject(:dessert) { Dessert.new('pudding', 10, chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to eq('pudding')
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq(10)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to match_array([])
    end

    context 'when given a non-integer quantity' do
      subject(:dessert) { Dessert.new('pudding', '10', chef)}

      it "raises an argument error" do
        expect {dessert}.to raise_error(ArgumentError)
      end
    end
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      dessert.add_ingredient('milk')
      expect(dessert.ingredients).to eq(['milk'])
    end
  end

  describe "#mix!" do
    let(:ingredients) {['milk','egg','sugar','cornstarch','salt']}

    it "shuffles the ingredient array" do
      ingredients.each do |ingredient|
        dessert.add_ingredient(ingredient)
      end

      expect(dessert.ingredients).to eq(ingredients)
      dessert.mix!
      expect(dessert.ingredients).to_not eq(ingredients)
      expect(dessert.ingredients.sort).to eq(ingredients.sort)
    end
  end

  describe "#eat" do

    it "subtracts an amount from the quantity" do
      dessert.eat(6)
      expect(dessert.quantity).to eq(4)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect {dessert.eat(11)}.to raise_error('not enough left!')
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(chef).to receive(:titleize)
      allow(chef).to receive(:titleize).and_return('a great chef')
      expect(dessert.serve).to eq('a great chef has made 10 puddings!')
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
    end
  end
end
