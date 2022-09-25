class Brewery < ApplicationRecord
  has_many :beers, dependent: :destroy

  validates :name, uniqueness: true, presence: true
end
