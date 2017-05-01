class CreateScripts < ActiveRecord::Migration[5.0]
  def change
    create_table :scripts do |t|
      t.string :name
      t.text :code
      t.text :description
      t.references :user, foreign_key: true
      t.datetime :started_at
      t.string :status, default: 'stoped'

      t.timestamps
    end
  end
end
