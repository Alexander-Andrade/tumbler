class AddAutomationServerRefToGeolocations < ActiveRecord::Migration[5.0]
  def change
    add_reference :geolocations, :automation_server, foreign_key: true
  end
end
