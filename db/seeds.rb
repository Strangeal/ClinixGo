# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# Create 10 users
# 10.times do 
#   users = User.create(name: "Adel", gender: "male", age: 25)
# end

doc_1 = Doctor.create(
  name: "Dr. Justine Smith",
  bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Pariatur repellendus cumque vero excepturi. Quis quibusdam,
  expedita sunt modi eaque enim possimus totam, rerum perferendis
  saepe nobis.",
  photo: "https://res.cloudinary.com/db3ckadxp/image/upload/v1677239506/doc1_rzintp.png",
  available_days: "Monday - Friday",
  specialities: "Professional Dentist",
  hospital: "St. Bonaventure Hospital",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "john.smith@gmail.com",
  phone: 1234567890,
  reviews: 123,
  experience: 7,
  rating: 4.8,
  patients: 67
)

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

doc_4 = Doctor.create(
  name: "Eunice Ramirez",
  bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur repellendus cumque vero ",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677511461/photo-1594824476967-48c8b964273f-removebg-preview_ikhvuu.png",
  available_days: "Monday - Friday",
  specialities: "Cardiologist",
  hospital: "Chastain Memorial Hospital",
  start_time: "08:00 AM",
  end_time: "08:00 PM",
  email: "eunice.ramirez@gmail.com",
  phone: 1234567890,
  reviews: 90,
  experience: 10,
  rating: 4.0,
  patients: 6
)

doc_5 = Doctor.create(
  name: "Bruno Alvarez",
  bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, blanditiis qui provident doloribus pariatur nesciunt nisi ab excepturi aliquid eum.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677511768/photo-1622253692010-333f2da6031d-removebg-preview_aiaefb.png",
  available_days: "Monday - Friday",
  specialities: "Radiologist",
  hospital: "Kwame Nkrumah Teaching Hospital",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "bruno.alvarez@gmail.com",
  phone: 1234567890,
  reviews: 23,
  experience: 5,
  rating: 3.9,
  patients: 7
)

doc_6 = Doctor.create(
  name: "Hugo Smith",
  bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ipsum illum, alias excepturi unde modi officiis natus rem aspernatur sed!",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677512147/premium_photo-1661764878654-3d0fc2eefcca-removebg-preview_paoqyb.png",
  available_days: "Monday - Friday",
  specialities: "Gynecologist",
  hospital: "Dansoman Polyclinic",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "hugo.smith@gmail.com",
  phone: 1234567890,
  reviews: 450,
  experience: 17,
  rating: 4.8,
  patients: 59
)