FactoryBot.define do
  factory :user do
    provider              { 'email' }
    uid                   { Faker::Internet.email }
    password              { Faker::Internet.password(min_length: 6) }
    password_confirmation { password }
    name                  { Faker::Name.name }
    email                 { Faker::Internet.email }
    user_id               { Faker::Lorem.word }
  end
end
