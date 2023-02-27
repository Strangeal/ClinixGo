# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create 10 users
10.times do 
  users = User.create(name: "Adel", gender: "male", age: 25)
end


doc_2 = Doctor.create(
  name: "Rodney Stilinsky",
  bio: "Quis quibusdam, expedita sunt modi eaque enim possimus totam, rerum perferendis
  saepe nobis.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677331291/assets/doc_2_pbbvzx.png",
  available_days: "Monday - Friday",
  specialities: "Physiotherapist",
  hospital: "New York Medical Center",
  start_time: "08:00 AM",
  end_time: "07:30 PM",
  email: "rodney.stilinsky@gmail.com",
  phone: 1245367890,
  reviews: 456,
  experience: 14,
  rating: 4.0,
  patients: 130
)
doc_3 = Doctor.create(
  name: "Jenna Miles",
  bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Pariatur repellendus cumque vero excepturi. Quis quibusdam,
  expedita sunt modi eaque enim possimus totam, rerum perferendis
  saepe nobis.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677227659/assets/rvzpkwlpfiwtntpdxezk.png",
  available_days: "Monday - Friday",
  specialities: "Professional Dentist",
  hospital: "St. Bonaventure Hospital",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "jenna.miles@gmail.com",
  phone: 1234567890,
  reviews: 123,
  experience: 7,
  rating: 4.8,
  patients: 67
)