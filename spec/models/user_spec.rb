require 'rails_helper'

RSpec.describe User, type: :model do
  before(:each) do
    @user1 = User.create(name: 'John', age: 30, gender: 'male')
    @user2 = User.create(name: 'Isaac', age: '30', gender: 30)
    @user3 = User.create(name: 'Sara', age: 30, gender: 'homo-sapien')
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
