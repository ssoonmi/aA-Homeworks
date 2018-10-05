class LRUCache
  def initialize(length)
    @length = length
    @cache = []
  end

  def count
    # returns number of elements currently in cache
    cache.length
  end

  def add(el)
    # adds element to cache according to LRU principle
    idx = cache.find_index(el)
    if idx.nil? && count < length
      cache.push(el)
    elsif idx.nil? && count >= length
      cache.shift
      cache.push(el)
    else
      self.cache = cache.take(idx) + cache.drop(idx + 1) + [cache[idx]]
    end
  end

  def show
    # shows the items in the cache, with the LRU item first
    cache
  end

  private
  # helper methods go here!
  attr_accessor :cache, :length
end

johnny_cache = LRUCache.new(4)

johnny_cache.add("I walk the line")
johnny_cache.add(5)

johnny_cache.count # => returns 2

johnny_cache.add([1,2,3])
johnny_cache.add(5)
johnny_cache.add(-5)
johnny_cache.add({a: 1, b: 2, c: 3})
johnny_cache.add([1,2,3,4])
johnny_cache.add("I walk the line")
johnny_cache.add(:ring_of_fire)
johnny_cache.add("I walk the line")
johnny_cache.add({a: 1, b: 2, c: 3})


p johnny_cache.show # => prints [[1, 2, 3, 4], :ring_of_fire, "I walk the line", {:a=>1, :b=>2, :c=>3}]
