Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :doctors, only: [:index, :show, :create]
      resources :users
      resources :appointments
      post "auth/login", to: "users#login"
    end
  end
  get '*path', to: 'root#index', via: :all
end
