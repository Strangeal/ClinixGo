class Api::V1::AppointmentsController < ApplicationController
  def index
    appointments = current_user.appointments.includes(:doctor)
    appointments_array = []
    appointments.each do |appointment|
      new_data = {
        appointment_date: appointment.appointment_date,
        start_time: appointment.start_time,
        end_time: appointment.end_time,
        doctor_name: appointment.doctor.name,
        doctor_specialty: appointment.doctor.specialities,
        doctor_photo: appointment.doctor.photo
      }
      appointments_array << new_data
    end
    render json: appointments_array, status: :ok
  end

  def create
    appointment = Appointment.new(appointment_params)
    appointment.user = current_user

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
