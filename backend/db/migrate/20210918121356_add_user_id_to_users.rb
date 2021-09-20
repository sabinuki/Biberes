class AddUserIdToUsers < ActiveRecord::Migration[6.1]
  def change
    change_table :users, bulk: true do |t|
      t.string :user_id, null: false, default: '', after: :email

      t.index :user_id, unique: true
    end
  end
end
