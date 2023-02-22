class AppointmentsController < ApplicationController
  def index
    user = User.find(params[:user_id])
    appointments = user.appointments
    render json: appointments, status: :ok
  end

end
