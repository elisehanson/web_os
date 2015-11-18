class CreateSettings < ActiveRecord::Migration
  def change
    create_table :settings do |t|
      t.string :background_color
      t.references :user
      t.timestamps null: false
    end
  end
end
