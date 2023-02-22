require 'rails_helper'
require 'rack/test'

# RSpec.describe "Api::V1::Appointments", type: :request do
#   before(:each) do
#     @user = User.create(name: 'Samed', age: 13, gender: 'male')
#     @first_doc = Doctor.create(name: 'Mike Venom', bio: 'Lorem ipsum is placeholder',
#       photo: 'https://img.freepik.com/free-photo/world-doctors-day-thinking-blonde-young-doctor-with-stethoscope-lab-coat_140725-162409.jpg?', available_days: 'Moday - Frinday', specialities: 'Primary Care Doctor', hospital: 'NYU Langone Health', start_time: '08: 00 AM', end_time: '20: 00 PM', email: 'doc.mikevenom@apple.com', phone: 1_555_000_213, reviews: 235, experience: 4, rating: 4.8, patients: 25)

#     @appointment = Appointment.create(user: @user, doctor: @first_doc, date: "02-12-2020", start_time: "08:00", end_time: "09:20")
#   end

#   describe "GET User's appointments" do
#     it 'returns a success response' do
#       get api_v1_user_appointments_path(@user)
#       expect(response).to be_successful
#     end
#   end

#   describe "Create an appointment" do
#     it 'create a new appointment for the user' do
#       post api_v1_user_appointments_path(@user)

#     end
#   end
# end

RSpec.describe 'api/v1/appointments', type: :request do
  include Rack::Test::Methods
  before(:each) do
    @user = User.create(name: 'Samed', age: 13, gender: 'male')
    @first_doc = Doctor.create(name: 'Mike Venom', bio: 'Lorem ipsum is placeholder',
                               photo: 'https://img.freepik.com/free-photo/world-doctors-day-thinking-blonde-young-doctor-with-stethoscope-lab-coat_140725-162409.jpg?', available_days: 'Moday - Frinday', specialities: 'Primary Care Doctor', hospital: 'NYU Langone Health', start_time: '08: 00 AM', end_time: '20: 00 PM', email: 'doc.mikevenom@apple.com', phone: 1_555_000_213, reviews: 235, experience: 4, rating: 4.8, patients: 25)

    @appointment = Appointment.create(user: @user, doctor: @first_doc, appointment_date: 'Wed, 02 Dec 2020', start_time: '08:00', end_time: '09:20')
  end

  describe 'GET /api/v1/users/:user_id/appointments' do
    it 'returns a list of appointments for the user' do
      get "/api/v1/users/#{@user.id}/doctors/#{@first_doc.id}/appointments"
      expect(last_response.status).to eq(200)
      appointments = JSON.parse(last_response.body)
      expect(appointments.size).to eq(1)
    end
  end

  describe 'POST /api/v1/users/:user_id/appointments' do
    let(:appointment_params) do
      {
        appointment_date: 'Wed, 02 Dec 2020',
        start_time: Time.now + 1.hour,
        end_time: Time.now + 2.hours
      }
    end

    it 'creates a new appointment for the specified user' do
      post "/api/v1/users/#{@user.id}/doctors/#{@first_doc.id}/appointments", appointment: appointment_params
      expect(last_response.status).to eq(201)
      appointment = Appointment.last
      expect(appointment.appointment_date).to eq('Wed, 02 Dec 2020')
      expect(appointment.start_time).to eq(appointment_params[:start_time])
      expect(appointment.end_time).to eq(appointment_params[:end_time])
    end
  end
end
