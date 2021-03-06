# frozen_string_literal: true

# https://github.com/joncalhoun/algorithmswithgo.com/tree/master/module01#07---reverse-a-string-code

# Reverse :
class Reverse
  def self.iterate(word)
    res = ''
    word.each_char { |w| res = w + res }
    res
  end

  def self.recursive(word)
    return '' if word == ''

    recursive(word[1..]) + word[0]
  end

  def self.std(word)
    word.reverse
  end
end
