class User < ApplicationRecord
  has_one :automation_server, inverse_of: :user
  accepts_nested_attributes_for :automation_server
  validates :automation_server, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
