class Area < ApplicationRecord
  has_many :devices

  validates :name, presence: true
end
