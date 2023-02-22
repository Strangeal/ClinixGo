Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :doctors
        resources :appointments
      end
    end
  end
end
