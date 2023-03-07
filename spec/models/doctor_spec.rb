require 'rails_helper'

RSpec.describe Doctor, type: :model do
  let(:doctor) { create(:doctor) }

  describe 'associations' do
    it { is_expected.to have_many(:appointments) }
    it { is_expected.to have_many(:users) }
  end

  describe 'validations' do
    it { is_expected.to validate_presence_of(:name) }
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:hospital) }
    it { is_expected.to validate_presence_of(:specialities) }
    it { is_expected.to validate_presence_of(:available_days) }
    it { is_expected.to validate_presence_of(:photo) }
    it { is_expected.to validate_presence_of(:start_time) }
    it { is_expected.to validate_presence_of(:end_time) }
    it { is_expected.to validate_presence_of(:phone) }
    it { is_expected.to validate_presence_of(:reviews) }
    it { is_expected.to validate_presence_of(:patients) }
    it { is_expected.to validate_presence_of(:experience) }
    it { is_expected.to validate_presence_of(:bio) }
    it { is_expected.to validate_length_of(:bio) }
    it { is_expected.to validate_numericality_of(:reviews) }
    it { is_expected.to validate_numericality_of(:experience) }
    it { is_expected.to validate_numericality_of(:patients) }
  end
end
