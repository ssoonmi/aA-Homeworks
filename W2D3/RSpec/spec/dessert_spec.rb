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
    before(:each) do
      dessert.add_ingredient('milk')
    end

    it "adds an ingredient to the ingredients array" do
      expect(dessert.ingredients).to eq(['milk'])
    end
  end

  describe "#mix!" do
    let(:ingredients) {['milk','egg','sugar','cornstarch','salt']}

    before(:each) do
      ingredients.each do |ingredient|
        dessert.add_ingredient(ingredient)
      end
      dessert.mix!
    end

    it "shuffles the ingredient array" do
      expect(dessert.ingredients).to_not eq(ingredients)
    end
  end

  describe "#eat" do
    before(:each) do
      dessert.eat(5)
    end

    it "subtracts an amount from the quantity" do
      expect(dessert.quantity).to eq(5)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect {dessert.eat(6)}.to raise_error('not enough left!')
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(chef).to receive(:titleize)
      dessert.serve
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(dessert)
      dessert.make_more
    end
  end
end
