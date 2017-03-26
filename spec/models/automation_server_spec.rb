require 'rails_helper'

RSpec.describe AutomationServer, type: :model do
  it { should validate_presence_of :token }
end
