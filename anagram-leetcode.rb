def is_anagram(s, t)
    if s.length != t.length
        return false
    end

    obj = {}

    s.each_char do |val|
        if obj[val] 
            obj[val] = obj[val].to_i + 1
        else
            obj[val] = 1
        end
    end
    t.each_char do |ind|
        if !obj.key?(ind)
            return false
        elsif obj[ind] <= 0
            return false
        else
            obj[ind] -= 1
        end
    end
    return true
end

#  puts is_anagram('anagram', 'naagram')
# # {"a"=>3, "c"=>-1}
# # {"a"=>1, "c"=>-1}
# puts is_anagram('aacc', 'ccac')