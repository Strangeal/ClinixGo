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

admin = User.create(name: "admin", username: "admin", password: "jukwnapa1234", email: "admin@example.com", role: "admin")

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
admin = User.create(name: "admin", username: "admin", password: "admin123", email: "admin@example.com", role: "admin")
doc_1 = Doctor.create(
  name: "Dr. Justine Smith",
  bio: "Dr. Justine Smith is a skilled and compassionate dentist with over a decade of experience in providing exceptional dental care. She received her degree with honors from the University of Dental Medicine and has since dedicated herself to helping her patients achieve healthy and beautiful smiles. Dr. Smith offers a wide range of dental services, from routine check-ups to complex restorative treatments, and is known for her gentle touch, attention to detail, and commitment to staying up-to-date with the latest advancements in dental technology. When she's not working, Dr. Smith enjoys spending time with her family and friends, hiking, and volunteering her time and expertise to several local charitable organizations.",
  photo: "https://res.cloudinary.com/db3ckadxp/image/upload/v1677239506/doc1_rzintp.png",
  available_days: "Monday - Friday",
  specialities: "Dentist",
  hospital: "St. Bonaventure Hospital",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "justine.smith@gmail.com",
  active: true,
  phone: "123-456-7890",
  reviews: 123,
  experience: 10,
  rating: 4.8,
  patients: 67
)
doc_2 = Doctor.create(
  name: "Dr. Rodney Stilinsky",
  bio: "Dr. Rodney Stilinsky is a highly skilled and experienced physiotherapist, with a passion for helping his patients regain their mobility and lead active, healthy lives. He received his Doctorate of Physical Therapy degree from a top-ranked university, and has since worked with a diverse range of patients, from professional athletes to individuals with chronic pain and mobility issues. Dr. Stilinsky offers a wide range of physiotherapy services, including manual therapy, therapeutic exercise, and electrotherapy, and is committed to creating personalized treatment plans tailored to each patient's unique needs and goals. He is known for his compassionate approach, exceptional communication skills, and dedication to ongoing education and professional development. Outside of work, Dr. Stilinsky enjoys staying active through hiking and playing sports, and is an active member of his local community.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677331291/assets/doc_2_pbbvzx.png",
  available_days: "Monday - Friday",
  specialities: "Physiotherapist",
  hospital: "New York Medical Center",
  start_time: "08:00 AM",
  end_time: "07:30 PM",
  email: "rodney.stilinsky@gmail.com",
  active: true,
  phone: "555-123-456",
  reviews: 456,
  experience: 14,
  rating: 4.0,
  patients: 130
)
doc_3 = Doctor.create(
  name: "Dr. Jenna Miles",
  bio: "Dr. Jenna Miles is a board-certified radiologist with a passion for utilizing cutting-edge medical imaging technology to diagnose and treat a wide range of health conditions. She received her medical degree from a prestigious university and completed her residency in diagnostic radiology at a leading medical center. Dr. Miles specializes in interpreting X-rays, CT scans, MRIs, and other diagnostic imaging tests, and is known for her exceptional attention to detail and accuracy in interpreting images. She works closely with referring physicians to ensure that her patients receive the most appropriate and effective treatment options available. When she's not working, Dr. Miles enjoys spending time with her family, traveling, and volunteering her time and expertise to charitable organizations focused on improving access to healthcare for underserved communities.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286742/pexels-tima-miroshnichenko-5452195-removebg-preview_ayuqnk.png",
  available_days: "Monday, Tuesday, Thursday, Saturday",
  specialities: "Radiologist",
  hospital: "St. Bonaventure Hospital",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "jenna.miles@gmail.com",
  active: false,
  phone: "054-809-1237",
  reviews: 123,
  experience: 7,
  rating: 4.8,
  patients: 67
)
doc_4 = Doctor.create(
  name: "Dr. Eunice Ramirez",
  bio: "Dr. Eunice Ramirez is a compassionate and highly skilled oncologist with a commitment to providing exceptional care to cancer patients. She earned her medical degree from a prestigious university and completed her residency in internal medicine before specializing in oncology. Dr. Ramirez has extensive experience in diagnosing and treating various types of cancer, and is known for her dedication to staying up-to-date with the latest advancements in cancer treatments. She is passionate about educating her patients and their families on their treatment options and guiding them through every step of their cancer journey. Outside of work, Dr. Ramirez enjoys spending time with her family, traveling, and supporting various cancer advocacy groups.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677511461/photo-1594824476967-48c8b964273f-removebg-preview_ikhvuu.png",
  available_days: "Monday, Wednesday, Thursday, Friday",
  specialities: "Oncologist",
  hospital: "Chastain Memorial Hospital",
  start_time: "08:00 AM",
  end_time: "08:00 PM",
  email: "eunice.ramirez@gmail.com",
  active: false,
  phone: "055-123-4560",
  reviews: 90,
  experience: 10,
  rating: 4.0,
  patients: 12
)
doc_5 = Doctor.create(
  name: "Bruno Alvarez",
  bio: "Dr. Bruno Alvarez is a board-certified dermatologist with over a five years of experience in providing high-quality skin care services. He earned his medical degree from a top-ranked university and completed his residency in dermatology at a leading medical center. Dr. Alvarez is known for his exceptional diagnostic skills and ability to effectively treat a wide range of skin conditions, from common issues such as acne and eczema to more complex conditions such as skin cancer. He offers a variety of dermatological services, including medical, surgical, and cosmetic treatments, and is committed to providing personalized care tailored to each patient's unique needs and goals. Outside of work, Dr. Alvarez enjoys spending time with his family, playing sports, and volunteering his time and expertise to charitable organizations focused on improving access to healthcare for underserved communities.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286743/pexels-jrfotosgrand-fotografia-12660379-removebg-preview_asinx8.png",
  available_days: "Monday - Friday",
  specialities: "Dermatologist",
  hospital: "Kwame Nkrumah Teaching Hospital",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "bruno.alvarez@gmail.com",
  active: false,
  phone: "455-124-565",
  reviews: 23,
  experience: 5,
  rating: 4.2,
  patients: 35
)
doc_6 = Doctor.create(
  name: "Hugo Smith",
  bio: "Dr. Hugo Smith is a highly experienced gynecologist with over 20 years of medical practice. He completed his medical degree from a reputable university and subsequently pursued a specialization in obstetrics and gynecology. Dr. Smith is known for his exceptional patient care and has helped numerous women achieve their reproductive health goals. He has a keen interest in minimally invasive surgical procedures, and his expertise in this area has led to positive outcomes for many of his patients. Dr. Smith is also actively involved in community health initiatives, organizing several workshops and awareness campaigns to promote women's health.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1677512147/premium_photo-1661764878654-3d0fc2eefcca-removebg-preview_paoqyb.png",
  available_days: "Monday - Friday",
  specialities: "Gynecologist",
  hospital: "Dansoman Polyclinic",
  start_time: "08:00 AM",
  end_time: "09:00 PM",
  email: "hugo.smith@gmail.com",
  active: true,
  phone: "098-754-098",
  reviews: 450,
  experience: 20,
  rating: 4.8,
  patients: 59
)
doc_7 = Doctor.create(
  name: "Dr. Sarah Johnson",
  bio: "Dr. Sarah Johnson is an experienced dermatologist with a focus on skin cancer prevention and treatment. She has been practicing for over 10 years and has helped numerous patients with their skin conditions. In her free time, Dr. Johnson enjoys hiking and photography.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286743/pexels-pavel-danilyuk-5998474-removebg-preview_fzkxgo.png",
  available_days: "Monday, Wednesday, Friday",
  specialities: "Dermatology, Skin Cancer",
  hospital: "Mercy Medical Center",
  start_time: "9:00 AM",
  end_time: "5:00 PM",
  email: "sjohnson@mercy.com",
  active: true,
  phone: "555-555-5555",
  reviews: 123,
  experience: 10,
  rating: 4.9,
  patients: 100
)
  
doc_8 = Doctor.create(
  name: "Dr. John Lee",
  bio: "Dr. John Lee is a cardiologist with over 15 years of experience. He has a special interest in heart failure and has helped many patients manage their condition. In his free time, Dr. Lee enjoys playing golf and spending time with his family.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286725/pexels-gustavo-fring-5888149-removebg-preview_dlkduc.png",
  available_days: "Tuesday, Thursday, Saturday",
  specialities: "Cardiology, Heart Failure",
  hospital: "St. Mary's Hospital",
  start_time: "8:00 AM",
  end_time: "4:00 PM",
  email: "jlee@stmarys.com",
  active: true,
  phone: "555-555-5556",
  reviews: 150,
  experience: 15,
  rating: 4.7,
  patients: 85
)
doc_9 = Doctor.create(
  name: "Dr. Emily Chen",
  bio: "Dr. Emily Chen is a pediatrician with a passion for helping children and their families. She has been practicing for over 5 years and has a special interest in developmental disorders. In her free time, Dr. Chen enjoys hiking and reading.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286740/pexels-gustavo-fring-7447008-removebg-preview_esvwjj.png",
  available_days: "Monday, Wednesday, Friday",
  specialities: "Pediatrics, Developmental Disorders",
  hospital: "Children's Hospital",
  start_time: "10:00 AM",
  end_time: "6:00 PM",
  email: "echen@childrenshospital.com",
  active: true,
  phone: "555-555-5557",
  reviews: 75,
  experience: 8,
  rating: 4.5,
  patients: 45
)
doc_10 = Doctor.create(
  name: "Dr. Drake Mingle",
  bio: "Dr. Mingle is a highly experienced orthopedic surgeon with over 20 years of experience. He specializes in joint replacements and has performed over 1000 successful surgeries.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286742/pexels-tima-miroshnichenko-5452205-removebg-preview_kjbmv6.png",
  available_days: "Monday - Friday",
  specialities: "Orthopedic Surgery, Joint Replacements",
  hospital: "St. Mary's Hospital",
  start_time: "9:00 AM",
  end_time: "5:00 AM",
  email: "drakemingle@example.com",
  active: true,
  phone: "555-1234-555",
  reviews: 123,
  experience: 20,
  rating: 4.9,
  patients: 500
)
doc_11 = Doctor.create(
  name: "Dr. Tracy Strong",
  bio: "Dr. Lee is a board-certified dermatologist with a passion for helping her patients achieve healthy and glowing skin. She offers a range of treatments, from acne therapy to cosmetic procedures.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286719/pexels-cottonbro-studio-5722166-removebg-preview_twfe2b.png",
  available_days: "Monday - Wednesday, Friday",
  specialities: "Dermatology, Cosmetic Procedures",
  hospital: "City General Hospital",
  start_time: "8:00 AM",
  end_time: "4:00 PM",
  email: "drtractstrong@example.com",
  active: true,
  phone: "555-0653-5678",
  reviews: 200,
  experience: 10,
  rating: 4.7,
  patients: 300
)
doc_12 = Doctor.create(
  name: "Dr. John Smith",
  bio: "Dr. John Smith is a board-certified cardiologist with over 15 years of experience. He is known for his patient-centered approach to care and his expertise in diagnosing and treating heart conditions. In his spare time, Dr. Smith enjoys playing golf and spending time with his family.",
  photo: "https://res.cloudinary.com/dskl0qde4/image/upload/v1678286992/pexels-cottonbro-studio-5867737-removebg-preview_zyxhh1.png",
  available_days: "Monday, Wednesday, Friday",
  specialities: "Cardiology",
  hospital: "Cocoa Regional Hospital",
  start_time: "9:00 AM",
  end_time: "5:00 PM",
  email: "johnsmith@cocoaregionalhospital.com",
  active: true,
  phone: "555-555-1234",
  reviews: 236,
  experience: 15,
  rating: 4.9,
  patients: 143
)