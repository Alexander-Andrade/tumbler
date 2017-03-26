class CreateAutomationServers < ActiveRecord::Migration[5.0]
  def change
    create_table :automation_servers do |t|
      t.string :url
      t.string :token
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
