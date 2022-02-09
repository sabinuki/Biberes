FactoryBot.define do
  factory :beer do
    association :brewery

    name { Faker::Beer.name }
  end
end
