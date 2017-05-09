# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170509101830) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "areas", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "default",    default: false
    t.integer  "user_id"
    t.index ["user_id"], name: "index_areas_on_user_id", using: :btree
  end

  create_table "automation_servers", force: :cascade do |t|
    t.string   "url"
    t.string   "token"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_automation_servers_on_user_id", using: :btree
  end

  create_table "devices", force: :cascade do |t|
    t.string   "dev_id"
    t.string   "name"
    t.jsonb    "controls"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "area_id"
    t.string   "label"
    t.integer  "user_id"
    t.index ["area_id"], name: "index_devices_on_area_id", using: :btree
    t.index ["user_id"], name: "index_devices_on_user_id", using: :btree
  end

  create_table "geolocations", force: :cascade do |t|
    t.string   "country"
    t.string   "country_code"
    t.string   "lat"
    t.string   "lon"
    t.string   "region"
    t.string   "region_name"
    t.string   "timezone"
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.integer  "automation_server_id"
    t.index ["automation_server_id"], name: "index_geolocations_on_automation_server_id", using: :btree
  end

  create_table "notifications", force: :cascade do |t|
    t.string   "category"
    t.string   "details"
    t.string   "origin"
    t.integer  "user_id"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
    t.boolean  "read",       default: false
    t.index ["user_id"], name: "index_notifications_on_user_id", using: :btree
  end

  create_table "scripts", force: :cascade do |t|
    t.string   "name"
    t.text     "code"
    t.text     "description"
    t.integer  "user_id"
    t.datetime "started_at"
    t.string   "status",      default: "stopped"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.index ["user_id"], name: "index_scripts_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "areas", "users"
  add_foreign_key "automation_servers", "users"
  add_foreign_key "devices", "areas"
  add_foreign_key "devices", "users"
  add_foreign_key "geolocations", "automation_servers"
  add_foreign_key "notifications", "users"
  add_foreign_key "scripts", "users"
end
