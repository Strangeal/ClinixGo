require 'swagger_helper'

RSpec.describe 'api/v1/users', type: :request do
  path '/api/v1/users' do
    post('create user') do
      # tags 'Create User'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: {
              name: { type: :string },
              username: { type: :string },
              email: { type: :string },
              password: { type: :string }
            },
            required: %w[name username email password]
          }
        }
      }

      response 201, 'user created' do
        let(:user) do
          @user = User.create(name: 'John Smith', username: 'smithey', email: 'john@smithey.com', password: 'smithey123')
        end
        run_test!
      end

      # response 4

    end
  end

  path '/api/v1/auth/login' do
    post('login user') do
      # tags 'Login User'
      consumes 'application/json'
      parameter name: :user, in: :body, schema: {
        type: :object,
        properties: {
          user: {
            type: :object,
            properties: {
              username: { type: :string },
              password: { type: :string }
            },
            required: %w[username password]
          }
        }
      }
      response(200, 'successful') do
        let(:user) do
          User.create(username: 'riley12', password: 'riley123')
        end
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
