class DropOpacity < ActiveRecord::Migration
  def change
    remove_column :settings, :opacity
  end
end
