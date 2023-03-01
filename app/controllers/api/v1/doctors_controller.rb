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

  def create
    @doctor = Doctor.create(doctor_params)
    if @doctor.save
      render json: {
        message: 'Created'
      }, status: :created
    else
      render json: @doctor.errors.full_messages, status: :unprocessable_entity, message: 'Sorry! Something went wrong'
    end
  end

  private
  
  def doctor_params
    params.require(:doctor).permit(:name, :bio, :photo, :available_days, :specialities, :hospital, :start_time, :end_time, :email, :phone, :reviews, :experience, :rating, :patients)
  end
end
