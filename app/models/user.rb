class User < ApplicationRecord
  has_one :automation_server, inverse_of: :user
  accepts_nested_attributes_for :automation_server
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def with_automation_server
    self.build_automation_server
    self
  end
end
