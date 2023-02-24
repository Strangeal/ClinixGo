class Api::V1::ApplicationController < ActionController::API
    def encode_token(payload, exp = 7.days.from_now)
        payload[:exp] = exp.to_i
        JWT.encode(payload, 'mysecret')
      end
end