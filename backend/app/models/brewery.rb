class Brewery < ApplicationRecord
  has_many :beers, dependent: :destroy

  validates :name, uniqueness: true, presence: true, length: { maximum: 255 }
end
