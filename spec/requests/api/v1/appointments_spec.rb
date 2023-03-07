require 'swagger_helper'

RSpec.describe 'api/v1/appointments', type: :request do
  path '/api/v1/appointments' do
    get('list appointments') do
      security [{ bearer_auth: [] }]
      # tags 'List Appointments'
      consumes 'application/json'
      parameter name: :Authorization, in: :header, type: :string, required: true, description: 'Client token'

      response(200, 'successful') do
        def encode_token(payload, exp = 7.days.from_now)
          payload[:exp] = exp.to_i
          JWT.encode(payload, 'mysecret')
        end
        let(:user) do
          @user = User.create(name: 'John Smith', username: 'smithey', email: 'john@smithey.com', password: 'smithey123')
        end
        let(:auth_token) { encode_token({ user_id: user.id }) }
        let(:Authorization) { "Bearer #{auth_token}" }
        run_test!
      end
    end

    post('create appointment') do
      security [{ bearer_auth: [] }]
      # tags 'Create Appointment'
      consumes 'application/json'
      parameter name: :Authorization, in: :header, type: :string, required: true, description: 'Client token'
      parameter name: :appointment, in: :body, schema: {
        type: :object,
        properties: {
          appointment: {
            type: :object,
            properties: {
              appointment_date: { type: :string },
              start_time: { type: :string },
              end_time: { type: :string },
              doctor_id: { type: :number }
            },
            required: %w[appointment_date start_time end_time doctor_id]
          }
        }
      }

      response(201, 'appointment created') do
        def encode_token(payload, exp = 7.days.from_now)
          payload[:exp] = exp.to_i
          JWT.encode(payload, 'mysecret')
        end

        let(:user) do
          @user = User.create(name: 'John Smith', username: 'smithey', email: 'john@smithey.com', password: 'smithey123')
        end

        let(:doctor) do
          @first_doc = Doctor.create(name: 'Mike Venom', bio: 'Lorem ipsum is placeholder',
                                     photo: 'https://img.freepik.com/free-photo/world-doctors-day-thinking-blonde-young-doctor-with-stethoscope-lab-coat_140725-162409.jpg?', available_days: 'Moday - Frinday', specialities: 'Primary Care Doctor', hospital: 'NYU Langone Health', start_time: '08: 00 AM', end_time: '20: 00 PM', email: 'doc.mikevenom@apple.com', phone: 1_555_000_213, reviews: 235, experience: 4, rating: 4.8, patients: 25)
        end

        let(:appointment) do
          @appointment = Appointment.create(appointment_date: '2023-04-04', start_time: '10:00 AM', end_time: '10:30 AM', doctor:)
        end

        let(:auth_token) { encode_token({ user_id: user.id }) }

        let(:Authorization) { "Bearer #{auth_token}" }

        after do |example|
          example.metadata[:response][:content] = {
            'application/json' => {
              example: JSON.parse(response.body, symbolize_names: true)
            }
          }
        end
        run_test!
      end
    end
  end
end
