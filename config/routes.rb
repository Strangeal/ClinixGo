Rails.application.routes.draw do
  root 'root#index'

    resource :doctors

end
