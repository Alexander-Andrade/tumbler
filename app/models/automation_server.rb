class AutomationServer < ApplicationRecord
  after_create :provide_geolocation

  belongs_to :user, inverse_of: :automation_server
  has_one :geolocation

  validates :token, presence: true


  private

  def provide_geolocation
    create_geolocation
  end
end
