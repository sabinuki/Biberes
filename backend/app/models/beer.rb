class Beer < ApplicationRecord
  belongs_to :brewery

  delegate :name, to: :brewery, prefix: true
end
