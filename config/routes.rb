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
    end
  end
end
