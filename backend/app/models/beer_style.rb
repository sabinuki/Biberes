class BeerStyle < ApplicationRecord
  belongs_to :beer_style_class, optional: true
end
