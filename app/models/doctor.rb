class Doctor < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :users, through: :appointments

  validates :name, :email, :hospital, :specialities, :available_days, :photo, :start_time, :end_time, :phone, :reviews, :patients, :experience, presence: true
  validates :bio, presence: true, length: { minimum: 10, maximum: 1000 }
  validates :reviews, :patients, numericality: { only_integer: true }
  validates :experience, numericality: { only_integer: true }, comparison: { greater_than_or_equal_to: 0 }
end
