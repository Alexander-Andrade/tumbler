Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' , registrations: 'users/registrations'}
  root 'home#index'

  post 'automation_server', to: 'automation_server#update'
  get  'automation_server', to: 'automation_server#show', defaults: {format: :json}

  resources :areas, except: [:new], defaults: {format: :json}
  resources :devices, except: [:new], defaults: {format: :json}

end
