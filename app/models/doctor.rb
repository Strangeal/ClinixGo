class Doctor < ApplicationRecord

  validates :name, :email, :hospital, :specialities, :available_days, :photo, :start_time, :end_time, presence: true
  validates :bio, presence: true, length: { minimum: 10, maximum: 1000 }
  validates :reviews, :patients, numericality: { only_integer: true }
  validates :experience, numericality: { only_integer: true }, comparison: { greater_than_or_equal_to: 0 }
  validates :phone, numericality: { only_integer: true }, comparison: { greater_than: 0 }
end
