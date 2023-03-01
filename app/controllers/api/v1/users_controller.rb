class Api::V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, only: %i[create login]
  def index
    @users = User.all
    render json: @users
  end

  def create
    @user = User.create(user_params)
    if @user.save
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token:, message: 'User created' }, status: :created
    else
      render json: { errors: @user.errors.full_messages,  message: 'Sorry! Something went wrong' }, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(username: user_params[:username])
    if @user&.authenticate(user_params[:password])
      token = encode_token({ user_id: @user.id })
      render json: { user: @user, token:, message: 'User logged in successfully' }, status: :ok
    else
      render json: { error: 'Invalid login credentials' }, status: :unauthorized
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password, :email)
  end
end
