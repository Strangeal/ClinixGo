Rails.application.routes.draw do
  root 'root#index'

  namespace :api do
    namespace :v1 do
      resources :doctors, only: [:index, :show]
      resources :users
          resources :appointments
    end
  end
  get '*path', to: 'root#index', via: :all
end
