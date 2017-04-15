class CreateGeolocations < ActiveRecord::Migration[5.0]
  def change
    create_table :geolocations do |t|
      t.string :country
      t.string :country_code
      t.string :lat
      t.string :lon
      t.string :region
      t.string :region_name
      t.string :timezone

      t.timestamps
    end
  end
end
