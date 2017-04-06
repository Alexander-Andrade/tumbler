class AddDefaultToAreas < ActiveRecord::Migration[5.0]
  def change
    add_column :areas, :default, :boolean, default: false
  end
end
