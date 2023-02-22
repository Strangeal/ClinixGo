class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :appointment_date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :user, presence: true
  validates :doctor, presence: true
end
