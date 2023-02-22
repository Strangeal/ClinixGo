class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor

  validates :appointment_date, presence: true, date: { after_or_equal_to: Date.today }
  validates :start_time, presence: true, time: { after_or_equal_to: "08:00" }
  validates :end_time, presence: true, time: { after_or_equal_to: "17:00" }
  validates :user, presence: true
  validates :doctor, presence: true
end
