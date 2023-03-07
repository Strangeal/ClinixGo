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
              password: { type: :string },
              email: { type: :string }
            },
            required: %w[name username password email]
          }
        }
      }

      response 201, 'user created' do
        let(:user) do
          { user: { name: 'John Smith', username: 'smithey11', password: 'smithey123', email: 'john@smithey.com' } }
        end
        run_test!
      end

      # response 4
      response 422, 'Invalid user data' do
        let(:user) do
          { user: { name: 'John Smith', username: 'smithey11', password: 's123', email: 'john@smithey.com' } }
        end
        run_test!
      end
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
      response 200, 'successful' do
        before do
          User.create(name: 'John Smith', username: 'smithey11', password: 'smithey123', email: 'john@smithey.com')
        end
        let(:user) do
          { user: { username: 'smithey11', password: 'smithey123' } }
        end
        run_test!
      end

      response 401, 'Invalid user data' do
        let(:user) do
          { user: { username: 'smithey11', password: 's' } }
        end
        run_test!
      end
    end
  end
end
