require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user1 = User.create(name: 'Riley Olsen', username: 'riley123', email: 'riley@olsen.com', password: 'riley123')
    @user2 = User.create(name: 'Isaac', email: 'isaac@olsen.com', password: 'isaac123')
    @user3 = User.create(name: 'Sara', username: 'sarahgoofey', email: 'sarah@olsen.com', password: 'sarah')
  end

  describe 'User' do
    it 'should be valid' do
      expect(@user1).to be_valid
    end

    it 'should be invalid' do
      expect(@user2).to be_invalid
    end

    it 'should be invalid' do
      expect(@user3).to be_invalid
    end

    it 'should create a user' do
      expect(User.all.count).to eql(1)
    end
  end
end