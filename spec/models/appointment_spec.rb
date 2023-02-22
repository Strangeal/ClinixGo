require 'rails_helper'

RSpec.describe Appointment, type: :model do
  let(:user) { create(:user) }
  let(:doctor) { create(:doctor) }
  let(:appointment) { create(:appointment, user:, doctor:) }

  describe 'associations' do
    it { is_expected.to belong_to(:user) }
    it { is_expected.to belong_to(:doctor) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:appointment_date) }
    it { is_expected.to validate_presence_of(:start_time) }
    it { is_expected.to validate_presence_of(:end_time) }
    it { is_expected.to validate_presence_of(:user) }
    it { is_expected.to validate_presence_of(:doctor) }
  end
end
