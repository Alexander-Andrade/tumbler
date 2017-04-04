class CreateDevices < ActiveRecord::Migration[5.0]
  def change
    create_table :devices do |t|
      t.integer :dev_id
      t.string :name
      t.jsonp :actions

      t.timestamps
    end
  end
end
