Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :doctors, only: [:index, :show, :create, :update]
      resources :users, only: [:create]
      resources :appointments, only: [:index, :create]
      post "auth/login", to: "users#login"
    end
  end
  get '*path', to: 'root#index', via: :all
end
