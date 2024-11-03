inputs = gets.chomp.split.map(&:to_i)



def gcd_euclid(num1, num2)
  array = [num1,num2]

    if num1.zero? || num2.zero?
      return   puts [num1,num2].find{|num| num > 0 }
    end

    rest =  array.max.to_f / array.min.to_f 
    array[array.index(array.max)] = rest 
    p array 
end 


gcd_euclid(*inputs)