FactoryBot.define do
  factory :user do
    provider              { 'email' }
    uid                   { Faker::Internet.email }
    password              { Faker::Internet.password(min_length: 6) }
    password_confirmation { password }
    name                  { Faker::Name.name }
    email                 { Faker::Internet.email }
    user_id               { Faker::Lorem.word }
    roll                  { User.rolls.keys.sample }

    trait :general_user do
      roll { User.rolls[:general] }
    end

    trait :brewery_user do
      roll { User.rolls[:brewery] }
    end

    trait :admin_user do
      roll { User.rolls[:admin] }
    end
  end
end
