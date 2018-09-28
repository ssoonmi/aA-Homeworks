require 'rspec'
require 'recursion'

describe "recursion" do
  describe "sum_to" do
    it "returns the sum of all the numbers from 1 up to n" do
      expect(sum_to(5)).to eq(15)
    end
    it "returns the sum of all the numbers from 1 up to n" do
      expect(sum_to(1)).to eq(1)
    end
    it "returns the sum of all the numbers from 1 up to n" do
      expect(sum_to(9)).to eq(45)
    end
    it "returns the sum of all the numbers from 1 up to n" do
      expect(sum_to(-8)).to eq(nil)
    end
  end

  describe "add_numbers" do
    it "returns the sum of all elements in a long array" do
      expect(add_numbers([1,2,3,4])).to eq(10)
    end

    it "returns the number in a single element array" do
      expect(add_numbers([3])).to eq(3)
    end
    it "returns the sum of all elements in a long array containing a negative number" do
      expect(add_numbers([3])).to eq(3)
    end
    it "returns nil if array is empty" do
      expect(add_numbers([])).to eq(nil)
    end
  end

  describe "gamma_fnc" do
    it "returns nil if input is 0" do
      expect(gamma_fnc(0)).to eq(nil)
    end
    it "returns 1 if input is 1" do
      expect(gamma_fnc(1)).to eq(1)
    end
    it "returns the factorial of (n-1)" do
      expect(gamma_fnc(4)).to eq(6)
    end
    it "returns the factorial of (n-1)" do
      expect(gamma_fnc(8)).to eq(5040)
    end
  end

  describe "ice_cream_shop" do
    it "returns false if there is no favorite flavor listed" do
      expect(ice_cream_shop(['vanilla', 'strawberry'], 'blue moon')).to eq(false)
      expect(ice_cream_shop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio')).to eq(false)
    end

    it "returns true if there is favorite flavor listed" do
      expect(ice_cream_shop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')).to eq(true)
      expect(ice_cream_shop(['moose tracks'], 'moose tracks')).to eq(true)
    end
    it "returns false if there is no flavor in list" do
      expect(ice_cream_shop([], 'honey lavender')).to eq(false)
    end
  end

  describe "reverse" do
    it "reverses a string with lengths greater than 1" do
      expect(reverse("house")).to eq('esuoh')
      expect(reverse("dog")).to eq('god')
      expect(reverse("atom")).to eq('mota')
      expect(reverse("id")).to eq('di')
    end

    it "returns the string if length is 1" do
      expect(reverse("q")).to eq('q')
    end

    it "returns an empty string when string is empty" do
      expect(reverse("")).to eq('')
    end
  end
end
