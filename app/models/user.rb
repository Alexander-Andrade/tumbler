class User < ApplicationRecord

  after_create :provide_default_area


  has_one :automation_server, inverse_of: :user
  accepts_nested_attributes_for :automation_server
  has_many :areas, dependent: :destroy
  has_many :devices, through: :areas, dependent: :destroy
  has_many :notifications, dependent: :destroy
  has_one :default_area, -> { where(default:true) }, class_name: 'Area'
  has_many :scripts, dependent: :destroy


  validates :automation_server, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable





  private

  def provide_default_area
    create_default_area(name: 'Area 0', default: true)
  end
end
