class User < ApplicationRecord
  has_secure_password
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments

  validates :name, presence: true
  validates :email, presence: true
  validates :username, presence: true, uniqueness: true
end
