class Api::V1::AppointmentsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    appointments = user.appointments
    render json: appointments, status: :ok
  end

  def create
    appointment = Appointment.new(appointment_params)
    user = User.find(params[:user_id])
    doctor = Doctor.find(params[:doctor_id])
    appointment.user = user
    appointment.doctor = doctor

    if appointment.save
      render json: appointment, status: :created, message: 'Appointment was successfully created'
    else
      render json: {
        data: appointment.errors.full_messages
      }, status: :unprocessable_entity, message: 'Appointment could not be created'
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:appointment_date, :start_time, :end_time)
  end
end
