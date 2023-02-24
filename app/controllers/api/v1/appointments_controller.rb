class Api::V1::AppointmentsController < ApplicationController
  def index
    appointments = User.first.appointments #replace user.first with current_user
    render json: appointments, status: :ok
  end

  def create
    appointment = Appointment.new(appointment_params)
    appointment.user = User.first #replace user.first with current_user

    if appointment.save
      render json: {
        message: 'Appointment was successfully created'
      }, status: :created
    else
      render json: {
        data: appointment.errors.full_messages
      }, status: :unprocessable_entity, message: 'Appointment could not be created'
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:appointment_date, :start_time, :end_time, :doctor_id)
  end
end
