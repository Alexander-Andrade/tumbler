class AddAreaRefToDevices < ActiveRecord::Migration[5.0]
  def change
    add_reference :devices, :area, foreign_key: true
  end
end
