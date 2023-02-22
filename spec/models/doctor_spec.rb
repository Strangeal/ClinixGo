require 'rails_helper'

RSpec.describe Doctor, type: :model do
  before :each do
    @first_doc = Doctor.create(name: 'Mike Venom', bio: 'Lorem ipsum is placeholder',
                               photo: 'https://img.freepik.com/free-photo/world-doctors-day-thinking-blonde-young-doctor-with-stethoscope-lab-coat_140725-162409.jpg?', available_days: 'Moday - Frinday', specialities: 'Primary Care Doctor', hospital: 'NYU Langone Health', start_time: '08: 00 AM', end_time: '20: 00 PM', email: 'doc.mikevenom@apple.com', phone: 1_555_000_213, reviews: 235, experience: 4, rating: 4.8, patients: 25)
  end

  context 'Test Validation' do
    it 'name should be present' do
      @first_doc.name = nil
      expect(@first_doc).to_not be_valid
    end

    it 'email should be present' do
      @first_doc.email = nil
      expect(@first_doc).to_not be_valid
    end

    it 'specialities should be present' do
      @first_doc.specialities = nil
      expect(@first_doc).to_not be_valid
    end

    it 'available_days should be present' do
      @first_doc.available_days = nil
      expect(@first_doc).to_not be_valid
    end

    it 'photo should be present' do
      @first_doc.photo = nil
      expect(@first_doc).to_not be_valid
    end

    it 'bio should not be less than 10 characters' do
      expect(@first_doc.bio.length).to_not eq 9
    end

    it 'review should be numeric' do
      expect(@first_doc.reviews).to eq 235
    end

    it 'patients should be numeric' do
      expect(@first_doc.patients).to eq 25
    end

    it 'experience should not be less than 0' do
      @first_doc.experience = -1
      expect(@first_doc).to_not be_valid
    end

    it 'phone should be numeric only' do
      @first_doc.phone = '0213hello'
      expect(@first_doc).to_not be_valid
    end
  end
end
