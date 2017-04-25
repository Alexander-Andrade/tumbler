class CreateDevices < ActiveRecord::Migration[5.0]
  def change
    create_table :devices do |t|
      t.string :dev_id
      t.string :name
      t.jsonb :controls

      t.timestamps
    end
  end
end
