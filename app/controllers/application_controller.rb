class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  before_action :authenticate_request
  attr_reader :current_user

  def encode_token(payload, exp = 7.days.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, 'mysecret')
  end

  def decode_token(token)
    decoded = JWT.decode(token, 'mysecret')[0]
    HashWithIndifferentAccess.new decoded
  end

  # rescue from cancan authorized access errors
  rescue_from CanCan::AccessDenied do |exception|
    render json: { waring: exception, status: 'authorization_failed' }
  end

  private

  def authenticate_request
    header = request.headers['Authorization']
    header = header.split.last if header
    begin
      @decoded = decode_token(header)
      @current_user = User.find(@decoded[:user_id])
    rescue ActiveRecord::RecordNotFound => e
      render json: { errors: e.message }, status: :unauthorized
    end
  end
end
