class BeerStyleClass < ApplicationRecord
  has_many :beer_styles, dependent: :nullify
end
