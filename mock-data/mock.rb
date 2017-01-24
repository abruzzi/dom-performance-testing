require 'faker'
require 'json'

data = []
(1..1000).each do |index|
    data << {
        "cardNumber" => index,
        "stayTime" => Faker::Number.between(1, 100),
        "cardOwner" => Faker::Name.name,
        "title" => Faker::Lorem.sentence
    }
end
puts data.to_json
