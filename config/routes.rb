Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' , registrations: 'users/registrations'}
  root 'home#index'

  post 'update_automation_server' => 'automation_server#update'
  get 'get_automation_server' => 'automation_server#get'



end
