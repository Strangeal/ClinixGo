class Api::V1::DoctorsController < ApplicationController
  skip_before_action :authenticate_request, only: %i[index show create update]
  def index
    @doctors = Doctor.all.order(:created_at)
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

  def update
    @doctor = Doctor.find(params[:id])

    if @doctor.update(update_status)
      render json: {
        message: 'Status updated successfully'
      }, status: :ok
    else
      render json: @doctor.errors_full_messages, status: :unprocessable_entity
    end
  end

  private
  
  def doctor_params
    params.require(:doctor).permit(:name, :bio, :photo, :available_days, :specialities, :hospital, :start_time, :end_time, :email, :phone, :reviews, :experience, :rating, :patients)
  end
  
  def update_status
    params.require(:doctor).permit(:active)
  end

end
