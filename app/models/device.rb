class Device < ApplicationRecord
  belongs_to :area

  validates :dev_id, :name, :actions, presence: true
  validates :dev_id, uniqueness: true
end
