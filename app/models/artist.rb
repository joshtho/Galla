class Artist < ApplicationRecord
    has_many :artworks
    has_many :users, through: :artworks
end
