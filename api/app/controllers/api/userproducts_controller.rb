class Api::UserproductsController < ApplicationController
  # GET /userproducts/1
  def show
    @products = Product.where("user_id = ?", params[:id])
    render json: @products
  end
end
