class CreateBeerStyleClasses < ActiveRecord::Migration[6.1]
  def change
    create_table :beer_style_classes do |t|
      t.string :name, null: false

      t.timestamps
    end
  end
end
