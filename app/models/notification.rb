class Notification < ApplicationRecord
  belongs_to :user

  validates :type, :origin, :details, presence: true
end
