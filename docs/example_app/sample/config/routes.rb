Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :examples
  end

  root "static_pages#root"
end
