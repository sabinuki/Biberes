class AddIndexToBrewery < ActiveRecord::Migration[6.1]
  def change
    add_index :breweries, :name, unique: true
  end
end
