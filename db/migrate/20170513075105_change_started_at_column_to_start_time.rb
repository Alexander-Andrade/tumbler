class ChangeStartedAtColumnToStartTime < ActiveRecord::Migration[5.0]
  def change
    rename_column :scripts, :started_at, :start_time
  end
end
