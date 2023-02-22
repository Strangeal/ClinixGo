class CreateDoctor < ActiveRecord::Migration[7.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.text :bio
      t.string :photo
      t.string :available_days
      t.string :specialities
      t.string :hospital
      t.time :start_time
      t.time :end_time
      t.string :email
      t.integer :phone
      t.integer :reviews
      t.integer :experience
      t.float :rating
      t.integer :patients

      t.timestamps
    end
  end
end
