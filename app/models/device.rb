class Device < ApplicationRecord
  belongs_to :area
  belongs_to :user

  validates :dev_id, :name, :actions, presence: true
  validates :dev_id, uniqueness: true
end
