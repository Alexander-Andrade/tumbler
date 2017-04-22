class Notification < ApplicationRecord
  belongs_to :user

  validates :category, :origin, :details, presence: true
end
