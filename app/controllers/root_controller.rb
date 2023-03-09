class RootController < ApplicationController
  skip_before_action :authenticate_request, only: %i[index]
  def index; end
end
