Rails.application.routes.draw do
  namespace :api do
    resources :menu do
      resources :items
      
    end
  end
end
