class Stack
  attr_accessor :arr

  def initialize
    # create ivar to store stack here!
    @arr = []
  end

  def push(el)
    # adds an element to the stack
    self.arr.push(el)
  end

  def pop
    # removes one element from the stack
    self.arr.pop
  end

  def peek
    # returns, but doesn't remove, the top element in the stack
    self.arr[-1]
  end
end

class Queue
  attr_accessor :arr
  def initialize
    # create ivar to store stack here!
    @arr = []
  end

  def enqueue(el)
    # adds an element to the queue by pushing
    self.arr.push(el)
  end

  def dequeue
    # removes one element from the queue by shifting
    self.arr.shift
  end

  def peek
    # returns, but doesn't remove, the top element in the queue
    self.arr[0]
  end
end

class Map
  attr_accessor :map

  def initialize
    @map = []
  end

  def set(key,value)
    self.map.each do |pair|
      if pair[0] == key
        pair[1] = value
        return self.map
      end
    end
    map.push([key,value])
    self.map
  end

  def get(key)
    self.map.each do |pair|
      if pair[0] == key
        return pair[1]
      end
    end
    nil
  end

  def delete(key)
    pair_idx = nil
    self.map.each_with_index do |pair, idx|
      if pair[0] == key
        pair_idx = idx
        self.map.delete_at(pair_idx)
        return pair
      end
    end
    nil
  end

  def show
    self.map
  end
end
