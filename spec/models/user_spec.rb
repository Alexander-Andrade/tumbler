require 'rails_helper'

RSpec.describe User, type: :model do
  it { should validate_presence_of :automation_server }

  it "should create default Automation Server" do
    user = User.create!(email: Faker::Internet.email, password: 'password', password_confirmation: 'password', automation_server_attributes: {token: Faker::Crypto.md5})
    expect(user).to be_valid
  end
end
