class Area < ApplicationRecord
  has_many :devices

  validates :name, presence: true, length: { in: 6..255 }, uniqueness: true
end
