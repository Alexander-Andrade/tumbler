Rails.application.routes.draw do

  devise_for :users, controllers: { sessions: 'users/sessions' , registrations: 'users/registrations'}
  root 'home#index'

  post 'automation_server', to: 'automation_server#update'
  get  'automation_server', to: 'automation_server#show', defaults: {format: :json}

  resources :areas, except: [:new], defaults: {format: :json}
  resources :devices, except: [:new], defaults: {format: :json}
  resources :notifications, except: [:new], defaults: {format: :json}
  delete 'delete_notifications_by_group', to: 'notifications#destroy'
  resources :scripts, except: [:new], defaults: {format: :json}

end
