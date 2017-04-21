class AddOriginToNotifications < ActiveRecord::Migration[5.0]
  def change
    add_column :notifications, :origin, :string
  end
end
