Rails.application.routes.draw do
  get 'devices/index'

  devise_for :users, controllers: { sessions: 'users/sessions' , registrations: 'users/registrations'}
  root 'home#index'

  post 'update_automation_server' => 'automation_server#update'
  get 'get_automation_server' => 'automation_server#get', defaults: {format: :json}

  resources :areas, only: [:index], defaults: {format: :json}
  resources :devices, only: [:index], defaults: {format: :json}

end
