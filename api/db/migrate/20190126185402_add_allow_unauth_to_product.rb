class AddAllowUnauthToProduct < ActiveRecord::Migration[5.1]
  def change
    add_column :products, :allow_unauth, :boolean
  end
end
