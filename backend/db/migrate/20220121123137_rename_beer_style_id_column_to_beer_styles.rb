class RenameBeerStyleIdColumnToBeerStyles < ActiveRecord::Migration[6.1]
  def change
    rename_column :beer_styles, :beer_style_id, :beer_style_class_id
  end
end
