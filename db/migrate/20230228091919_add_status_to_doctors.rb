class AddStatusToDoctors < ActiveRecord::Migration[7.0]
  def change
    add_column :doctors, :status, :string, default: "active"
  end
end
