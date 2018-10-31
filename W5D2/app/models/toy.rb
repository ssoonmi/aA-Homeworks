class Toy < ApplicationRecord
  validates :name, presence: true
  validates :toyable, uniqueness: { scope: :name, message: 'toyable cannot have toy with same name' }

  belongs_to :toyable, polymorphic: true

end
