class Api::V1::DoctorsController < ApplicationController
  def index
    @doctors = Doctor.all
    render json: @doctors, status: :ok
  end

  def show
    @doctor = Doctor.find(params[:id])
    render json: @doctor, status: :ok
  end
end
