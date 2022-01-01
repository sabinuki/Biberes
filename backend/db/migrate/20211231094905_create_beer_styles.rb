class CreateBeerStyles < ActiveRecord::Migration[6.1]
  def change
    create_table :beer_styles do |t|
      t.string :name, null: false
      t.integer :beer_style_id, null: false

      t.timestamps
    end
  end
end
