class AutomationServer < ApplicationRecord
  belongs_to :user, inverse_of: :automation_server
  has_one :geolocation

  validates :token, length: { minimum: 6 }, presence: true
  VALID_URL_REGEX=/wss?:\/\/[\S]+/
  validates :url, format: { with: VALID_URL_REGEX }, allow_blank: true

end
