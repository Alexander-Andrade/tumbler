class ChangeScriptsDefaultStatus < ActiveRecord::Migration[5.0]
  def change
    change_column_default(:scripts, :status, 'stopped')
  end
end
