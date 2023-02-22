require 'rails_helper'

RSpec.describe "Users", type: :request do

  before(:each) do
    @user = User.create(name: "Samed", age: 13, gender: "male")
  end

  describe "User" do
    it "should be valid" do
      expect(@user).to be_valid
    end

    it "should be invalid" do
      @user.name = nil
      expect(@user).to be_invalid
    end
  end

  describe "GET /new" do
    it "returns http success" do
      get new_user_path
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /create" do
    it "returns http success" do
      get users_path
      expect(response).to have_http_status(:success)
    end
  end 

  
end
