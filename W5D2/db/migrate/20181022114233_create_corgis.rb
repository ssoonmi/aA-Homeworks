class CreateCorgis < ActiveRecord::Migration[5.2]
  def change
    create_table :corgis do |t|
      t.string :name, null: false
    end
  end
end
