class Api::RankingController < ApplicationController
  # GET /ranking
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
end
