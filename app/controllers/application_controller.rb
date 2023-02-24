class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def encode_token(payload, exp = 7.days.from_now)
    payload[:exp] = exp.to_i
    JWT.encode(payload, 'mysecret')
  end
end
