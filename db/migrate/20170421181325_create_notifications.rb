class CreateNotifications < ActiveRecord::Migration[5.0]
  def change
    create_table :notifications do |t|
      t.string :category
      t.string :details
      t.string :origin
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
