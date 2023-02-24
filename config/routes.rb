Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :doctors, only: [:index]
      resources :users do
        resources :doctors do
          resources :appointments
        end
      end
      post "auth/login", to: "users#login"
    end
  end
end
