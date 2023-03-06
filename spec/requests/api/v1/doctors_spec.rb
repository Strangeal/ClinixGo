require 'swagger_helper'

RSpec.describe 'api/v1/doctors', type: :request do
  path '/api/v1/doctors' do
    get('list doctors') do
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

    post('create doctor') do
      security [{ bearer_auth: [] }]
      # tags 'Doctors'
      consumes 'application/json'
      parameter name: :Authorization, in: :header, type: :string, required: true, description: 'Client token'
      parameter name: :doctor, in: :body, schema: {
        type: :object,
        properties: {
          doctor: {
            type: :object,
            properties: {
              name: { type: :string },
              bio: { type: :text },
              photo: { type: :string },
              available_days: { type: :string },
              specialities: { type: :string },
              hospital: { type: :string },
              start_time: { type: :string },
              end_time: { type: :string },
              email: { type: :string },
              active: { type: :boolean },
              phone: { type: :number },
              reviews: { type: :number },
              experience: { type: :number },
              rating: { type: :float },
              patients: { type: :number }
            },
            required: %w[name bio photo available_days specialities hospital start_time end_time email active phone reviews experience rating patients]
          }
        }
      }

      response '201', 'doctor created' do
        let(:doctor) do
          @first_doc = Doctor.create(name: 'Mike Venom', bio: 'Lorem ipsum is placeholder',
                                     photo: 'https://img.freepik.com/free-photo/world-doctors-day-thinking-blonde-young-doctor-with-stethoscope-lab-coat_140725-162409.jpg?', available_days: 'Moday - Frinday', specialities: 'Primary Care Doctor', hospital: 'NYU Langone Health', start_time: '08: 00 AM', end_time: '20: 00 PM', email: 'doc.mikevenom@apple.com', phone: 1_555_000_213, reviews: 235, experience: 4, rating: 4.8, patients: 25)
        end
        run_test!
      end

      response '422', 'invalid request' do
        let(:doctor) do
          @first_doc = Doctor.create(name: 'Mike Venom', bio: 'Lorem ipsum is placeholder',
                                     photo: 'https://img.freepik.com/free-photo/world-doctors-day-thinking-blonde-young-doctor-with-stethoscope-lab-coat_140725-162409.jpg?', available_days: 'Monday - Frinday', specialities: 'Primary Care Doctor', hospital: 'NYU Langone Health', start_time: '08: 00 AM', end_time: '20: 00 PM', email: 'doc.mikevenom@apple.com', phone: 1_555_000_213)
        end
        run_test!
      end
    end
  end

  path '/api/v1/doctors/{id}' do
    # You'll want to customize the parameter types...
    parameter name: 'id', in: :path, type: :string, description: 'id'

    get('show doctor') do
      response(200, 'successful') do
        let(:id) { '123' }

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

  path '/api/v1/doctors/{id}' do
    put('update doctor info') do
      let(:id) { '123' }
      security [{ bearer_auth: [] }]
      consumes 'application/json'
      parameter name: :id, in: :path, type: :string, description: 'doctors id'
      parameter name: :Authorization, in: :header, type: :string, required: true, description: 'Client token'
      parameter name: :doctor, in: :body, schema: {
        type: :object,
        properties: {
          doctor: {
            type: :object,
            properties: {
              active: { type: :boolean }
            },
            required: %w[active]
          }
        }
      }

      response '201', 'doctor updated' do
        let(:doctor) do
          @first_doc = Doctor.update(active: true)
        end
        run_test!
      end

      response '422', 'invalid request' do
        let(:doctor) do
          @first_doc = Doctor.update(active: true)
        end
        run_test!
      end
    end
  end
end
