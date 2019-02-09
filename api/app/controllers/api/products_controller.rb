class Api::ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]
  before_action :authenticate_user, only: [:show], if: :product_access

  # GET /products
  def index
    @products = Product.all
    @products_data = []
    for @p in @products do
      if (Rate.where(product_id: @p.id)).empty?
        @avg = 0
        @count = 0
      else
        @rates = Rate.where(product_id: @p.id)
        @avg = Float(@rates.average(:value))
        @count = @rates.count
      end
      @p = @p.attributes
      @p[:avg] = @avg
      @p[:opinions_count] = @count
      @products_data.push(@p)
    end

    render json: @products_data
  end

  # GET /products/1
  def show
    @product_data = []
    if (Rate.where(product_id: @product.id)).empty?
      @avg = 0
      @count = 0
    else
      @rates = Rate.where(product_id: @product.id)
      @rates_table = []
      for @rate in @rates do
        @r = @rate.attributes
        @usermail = User.where(id: @rate.user_id).first
        @r[:user_name] = @usermail[:email]
        @rates_table.push(@r)
      end
      @avg = Float(@rates.average(:value))
      @count = @rates.count
    end
    @p = @product.attributes
    @p[:avg] = @avg
    @p[:opinions_count] = @count
    @p[:opinions] = @rates_table
    @product_data.push(@p)
    render json: @product_data
  end

  def rate_stats
    if (Rate.where(product_id: params[:id])).empty?
      @avg = 0
      @count = 0
    else
      @rates = Rate.where(product_id: params[:id])
      @avg = @rates.average(:value)
      @count = @rates.count
    end
    render json:{
    "average": @avg,
    "count": @count}
  end

  # POST /products
  def create
    @product = Product.new(product_params)

    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def destroy
    @product.destroy
  end

  def product_access
    @product.allow_unauth
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :description, :image, :user_id)
    end
end
