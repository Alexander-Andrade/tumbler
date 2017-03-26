class AutomationServer < ApplicationRecord
  belongs_to :user, inverse_of: :automation_server
  validates :user_id, presence: true
end
