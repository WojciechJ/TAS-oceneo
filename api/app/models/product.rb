class Product < ApplicationRecord
  belongs_to :user, optional: true
  has_many :rates, :dependent => :destroy
end
