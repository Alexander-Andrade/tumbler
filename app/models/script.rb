class Script < ApplicationRecord
  belongs_to :user

  validates :name, uniqueness: true
  validates :name, :code, presence: true
end
