def sum_to(n)
  # base case
  return nil if n < 1
  return 1 if n == 1
  # inductive step
  sum_to(n-1) + n
end

def add_numbers(nums_array)
  # base case
  return nums_array[0] if nums_array.length <= 1
  # inductive case
  nums_array[0] + add_numbers(nums_array[1...nums_array.length])
end

def gamma_fnc(n)
  # base case
  return nil if n < 1
  return 1 if n <= 2
  # inductive case
  (n-1) * gamma_fnc(n-1)
end

def ice_cream_shop(flavors, favorite)
  # base cases
  return true if flavors[0] == favorite
  return false if flavors.length == 0
  # inductive case
  ice_cream_shop(flavors[1...flavors.length], favorite)
end

def reverse(string)
  # base case
  return string if string.length <= 1
  # inductive case
  reverse(string[1...string.length]) + string[0]
end
