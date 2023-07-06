def countUniqueVales(values)
    left = 0

    values.each_with_index do |value,ind|
        # puts ind+1
        if values[left] != values[ind+1]
            left = left+1
            values[left] = values[ind+1]
            # puts left
        end
        # puts values[ind]
    end
    return left

   
end


puts  countUniqueVales([1,1,2,3])