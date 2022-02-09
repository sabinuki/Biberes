class CreateBeers < ActiveRecord::Migration[6.1]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.references :brewery, index: true, foreign_key: true

      t.timestamps
    end
  end
end
