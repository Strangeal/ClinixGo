class AddStatusToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :active, :boolean, default: true
  end
end
