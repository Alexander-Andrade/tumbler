Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' , registrations: 'users/registrations'}
  post 'update_automation_server' => 'automation_server#update'
  root 'home#index'


end
