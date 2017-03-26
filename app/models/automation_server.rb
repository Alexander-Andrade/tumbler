class AutomationServer < ApplicationRecord
  belongs_to :user, inverse_of: :automation_server
  validates :token, presence: true
end
