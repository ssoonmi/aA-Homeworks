class CreateCat < ActiveRecord::Migration[5.2]
  def change
    create_table :cats do |t|
      t.string :name, null: false
    end
  end
end
