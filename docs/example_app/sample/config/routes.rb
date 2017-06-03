Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :examples
  end
end
