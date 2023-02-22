class User < ApplicationRecord
  has_many :doctors
  has_many :appointments

  validates :name, presence: true
  validates :age, presence: true, numericality: { only_integer: true }
  validates :gender, presence: true
  validate :gender_valid

  def gender_valid
    unless ["male", "female", "non-binary"].include?(gender)
      errors.add(:gender, "must be male, female, or non-binary")
    end
  end

end
