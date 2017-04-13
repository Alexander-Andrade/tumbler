class AddLabelToDevices < ActiveRecord::Migration[5.0]
  def change
    add_column :devices, :label, :string
  end
end
