require 'swagger_helper'

RSpec.describe 'api/v1/appointments', type: :request do
  path '/api/v1/appointments' do
    get('list appointments') do
      security [{ bearer_auth: [] }]
      # tags 'List Appointments'
      consumes 'application/json'
      parameter name: :Authorization, in: :header, type: :string, required: true, description: 'Client token'

      response(200, 'successful') do
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

      response(200, 'successful') do
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
