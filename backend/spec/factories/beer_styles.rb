FactoryBot.define do
  factory :beer_style do
    association :beer_style_class

    name { Faker::Beer.style }
  end
end
