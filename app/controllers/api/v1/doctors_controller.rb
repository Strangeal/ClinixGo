class Api::V1::DoctorsController < ApplicationController
  skip_before_action :authenticate_request, only: %i[index show]
  def index
    @doctors = Doctor.all
    render json: @doctors, status: :ok
  end

  def show
    @doctor = Doctor.find(params[:id])
    render json: @doctor, status: :ok
  end
end
