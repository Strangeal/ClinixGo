require 'rails_helper'

RSpec.describe "Doctors", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/doctors/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/doctors/show"
      expect(response).to have_http_status(:success)
    end
  end

end
