# frozen_string_literal: true

# https://github.com/joncalhoun/algorithmswithgo.com/tree/master/module01#05---determine-if-a-number-is-in-a-list-code

# NumInList :
class NumInList
  def self.iterate(list, num)
    list.each { |n| return true if n == num }
    false
  end

  def self.recursive(list, num)
    return false if list.empty?
    return true if list.first == num

    recursive(list[1..], num)
  end

  def self.std(list, num)
    list.include? num
  end
end
