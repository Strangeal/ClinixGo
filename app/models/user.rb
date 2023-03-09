class User < ApplicationRecord
  has_secure_password
  has_many :appointments, dependent: :destroy
  has_many :doctors, through: :appointments

  validates :name, presence: true
  validates :password, presence: true, length: { minimum: 6 }
  validates :email, presence: true
  validates :username, presence: true, uniqueness: true

  ROLES = %w[admin].freeze

  def admin?
    role == 'admin'
  end
end
