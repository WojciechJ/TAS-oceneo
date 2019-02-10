Rails.application.routes.draw do
namespace :api do
post 'user/token' => 'user_token#create'
get 'users/current' => 'users#current'
resources :products,  except: [:new, :edit]do
resources :rates
end
resources :ranking
resources :userproducts

end
end
